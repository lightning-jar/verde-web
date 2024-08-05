<!--
@component
Here's some documentation for this component.
-->
<script lang="ts">
	// components
	import PageContainer from "$atoms/PageContainer.svelte";

	// types
	import type { PageData } from "./$types.js";

	// data
	let { data } = $props(); // data coming in from page.ts LoadEvent

	// variables
	let onPageArticleBody = truncateArticleText(data.article.text.html, 2);

	// functions
	function truncateArticleText(text: string, length: number): string {
		let textArray: string[] = text.split("</p>");
		if (textArray.length > length) {
			textArray = textArray.slice(0, length + 1);
			let lastSegment = textArray[length]; // This will always exist if textArray.length > length
			if (lastSegment !== undefined) {
				let trimmingIndex = lastSegment.lastIndexOf(".");
				if (trimmingIndex > 0) {
					textArray[length] = lastSegment.slice(0, trimmingIndex);
				}
			}
			return textArray.join("</p>") + "...";
		} else {
			return text;
		}
	}
</script>

<template lang="pug">
	PageContainer(
		classes="bg-penn")
		//- breadcrumb
		nav(
			class="mb-8")
			ul.flex.gap-2
				li.flex.gap-2
					a(
						class=`
						 	decoration-white/20
							opacity-80
							text-17
							text-neutral-100
							underline
							underline-offset-4
							hover:decoration-white/80
							hover:opacity-100`,
						href="/news") News
					.opacity-60 /
				//-li
					span.text-17.opacity-80.text-neutral-100
						| { data.article.slug ? data.article.slug : "source" }
		.grid(
			class="lg:grid-cols-3")
			div(
				class="lg:col-span-2")
				+if('data.article?.image?.url')
					img.w-full.h-auto.rounded-lg.block.mb-8.max-w-2xl(
						alt!="",
						role!="presentation",
						src!="{ data.article.image.url ?? null }",
						width!="{ data.article.image.width ? data.article.image.width : null }")

				//- body
				.w-full.pb-12.max-w-2xl
					//- metadata
					.flex.mb-6
						+if('data.article?.source?.name')
							a(
								class=`
									inline-block
									opacity-80
									text-17
									text-neutral-100
									underline-offset-4
									hover:underline`,
								href!="{ data.article.source.url }",
								rel="external noopener noreferrer") { data.article?.source?.name }
								.inline-block.px-2 |
						span.text-17.opacity-80.text-neutral-100
							| { data.article?.date }
					h1.text-19.font-semibold.mb-4.capitalize(
						class="lg:text-24") { data.article?.headline }
					p.mb-4.text-17.italic.opacity-80.text-neutral-100 { data?.article.excerpt }
					//- prettier-ignore
					#article-text.text-18.leading-relaxed.mb-8(class="md:text-[18px]")
						+html('onPageArticleBody ?? "" + "... " ')

						i.opacity-80.text-16 ( article continues at { data.article?.source?.name ? data.article?.source?.name : "" } )

					//- read full article cta
					+if('data.article?.sourceArticleUrl')
						a(
							class=`
								border
								inline-block
								mb-8
								opacity-90
								px-4
								py-2
								rounded-md
								text-16
								text-primary-100
								hover:bg-penn-800`,
							href!="{ data.article.sourceArticleUrl }",
							rel="external noopener noreferrer",
							title!="read this full article at {data.article?.source?.name ? data.article?.source?.name : 'source'} ") Read Full Article

					//- back to news
					.flex.gap-8
						+each("[['/news','← Back to News', 'go back to browsing all news stories'],[data.nextArticleSlug, 'Next Article →', data.nextArticleTitle]] as link")
							a(
								class=`
									block
									decoration-white/20
									mt-8
									opacity-80
									text-17
									text-primary-100
									underline-offset-4
									underline
									hover:underline
									hover:decoration-white/80
									hover:opacity-100`,
								href!="{ link[0] }",
								title!="{ link[2] ?? null }") { link[1] }

	|</template>

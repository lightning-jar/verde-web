<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	// components
	import ArticleGallery from "$molecules/ArticleGallery.svelte";
	import ArticleTile from "$molecules/ArticleTile.svelte";
	import BrandLeaf from "$atoms/BrandLeaf.svelte";
	import WidgetTitle from "$atoms/WidgetTitle.svelte";
	import WidgetText from "$atoms/WidgetText.svelte";
	import WidgetSubtitle from "$atoms/WidgetSubtitle.svelte";
	import WidgetSubheading from "$atoms/WidgetSubheading.svelte";
	import PrimaryActionLink from "$atoms/PrimaryActionLink.svelte";

	// props
	let { backgroundClasses, blog, latestBlogArticles } = $props();
</script>

<template lang="pug">
	.text-penn(
		class!="page-x-padding {backgroundClasses}")
		//- inner
		.h-auto(
			class="pt-16 pb-28")
			//- header
			.mb-16.grid.grid-cols-1(
				class="md:order-1 md:grid-cols-2")
				.order-2.text-center(
					class="sm:text-left")
					a(
						class="group",
						href="/blog")
						WidgetTitle(
							classes="sm:text-left group-hover:underline underline-offset-8") Blog
					WidgetText(
						classes="sm:text-left") Thoughts and insights about carbon offset projects, carbon credits, and carbon reduction from the experts at Verde.
				.flex.w-full.order-1.mb-4.justify-center(
					class="md:order-2 md:mb-0 sm:justify-start md:justify-end")
					a.w-20(
						href="/blog",
						title="more blog articles")
						BrandLeaf

			//- gallery
			.w-full.mb-6
				ArticleGallery(
					articleLimit!="{ 4 }",
					articles!="{ latestBlogArticles }")
					//- Image
					//- svelte:fragment(
					//- 	slot="image")
					//- 	.w-full.aspect-video.relative(
					//- 		class="bg-slate-300")
					//- 		picture.flex.w-100.aspect-video
					//- 			img.opacity-100.object-cover.min-h-full.min-w-full(
					//- 				alt!="{ article.image.alt }",
					//- 				draggable="false",
					//- 				height!="{ null }",
					//- 				loading="lazy",
					//- 				src!="{ article.image.src || '/images/frog.webp' }",
					//- 				width!="{ null }")
					//- Source
					//- svelte:fragment(slot="source")
					//- 	.text-15 {article.source}

					//- //- Headline
					//- svelte:fragment(
					//- 	slot="headline")
					//- 	div
					//- 		WidgetSubheading(
					//- 			classes="!mb-0",
					//- 			tag!="h2") { article.headline }

					//- //- Excerpt
					//- svelte:fragment(slot="excerpt")
					//- 	.text-15.text-neutral-100 {article.excerpt}

					//- Link
					//- svelte:fragment(
					//- 	slot="link")
					//- 	PrimaryActionLink(
					//- 		classes!="border-penn bg-transparent hover:border-transparent hover:bg-slimy-400 hover:text-white hover:shadow transition-color",
					//- 		href!="/blog/{article.slug}") Read article
			//- Footer
			div
				a.text-15(
					class="underline underline-offset-4",
					href="/blog",
					title="Browse all blog articles") All blog articles</template>

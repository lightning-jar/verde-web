<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	// components
	import WidgetTitle from "$atoms/WidgetTitle.svelte";
	import WidgetText from "$atoms/WidgetText.svelte";
	import WidgetSubtitle from "$atoms/WidgetSubtitle.svelte";
	import ArticleTile from "$molecules/ArticleTile.svelte";
	import BrandLeaf from "$atoms/BrandLeaf.svelte";
	import PrimaryActionLink from "$atoms/PrimaryActionLink.svelte";

	// stores
	import { news } from "$stores/newsStore.server";

	// settings
	import { pageXPadding } from "$stores/layoutStore";

	// utils
	import { slugify } from "lj-svelte-ui";
</script>

<template lang="pug">
	div(
		class!="{ $pageXPadding }")
		//- inner
		.h-auto(
			class="pt-16 pb-28")
			//- header
			.mb-24.grid.grid-cols-1(
				class="md:order-1 md:grid-cols-2")
				.order-2.text-center(
					class="sm:text-left")
					WidgetTitle(
						classes!="sm:text-left") News &amp; Resources
					WidgetText(
						classes="sm:text-left") Recent news from around the industry on carbon credits, carbon reduction and related topics.

				.flex.w-full.order-1.mb-4.justify-center(
					class="md:order-2 md:mb-0 sm:justify-start md:justify-end")
					.w-20
						BrandLeaf
			//- div.mb-24
				//- WidgetSubtitle(class="mb-4") News &amp; Insights
				WidgetTitle(class="mb-4") Blog & Resources
				WidgetText(class="mb-8") Thoughts and insights about carbon offset projects, carbon credits, and carbon reduction from the experts at Verde.

			//- Articles Widget
			.grid.grid-cols-1.gap-8(
				class="lg:grid-cols-2")
				.grid.grid-cols-1.gap-8(
					class="sm:grid-cols-1 md:grid-cols-2")
					+each('$news as article, index')
						+if('index == 1 || index == 0')
							.relative.w-full.h-full
								ArticleTile
									svelte:fragment(
										slot="image")
										.w-full.relative(
											class="bg-slate-300")
											//- overlay
											picture.flex.w-100
												img.opacity-100.object-cover.min-h-full.min-w-full(
													alt!="",
													draggable="false",
													height!="",
													loading="lazy",
													src!="{ article?.image?.src || '/images/frog.webp' }",
													width!="")
									svelte:fragment(
										slot="headline")
										div { article?.headline }
									svelte:fragment(
										slot!="link")
										PrimaryActionLink(
											class="absolute inset-0 z-10",
											href!="{ article?.source.url }",
											title!="{ article?.title }") Read story
					a.underline.underline-offset-4(
						href="/news") All news stories

				//- Other Resources
				div
					.grid-cols-2.grid.gap-6(
						class="sm:gap-8 min-h-[400px] lg:gap-8")
						+each('["Blog", "Contact", "Glossary", "News"] as item')
							.group.w-full.h-full.rounded-lg(
								class="bg-white/10 flex items-center justify-center hover:bg-white/20")
								a.text-center.px-8.text-18.underline-offset-4.opacity-80.transition-opacity(
									class!="group-hover:underline group-hover:opacity-100",
									href!="{ slugify(item) }") { item }
				div &nbsp;</template>

<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	// components
	import ArticleGallery from "$molecules/ArticleGallery.svelte";
	import ArticleTile from "$molecules/ArticleTile.svelte";
	import BrandLeaf from "$atoms/BrandLeaf.svelte";
	import WidgetTitle from "$atoms/WidgetHeading.svelte";
	import WidgetText from "$atoms/WidgetText.svelte";
	import WidgetSubtitle from "$atoms/WidgetSubtitle.svelte";
	import WidgetSubheading from "$atoms/WidgetSubheading.svelte";
	import PrimaryActionLink from "$atoms/PrimaryActionLink.svelte";

	// props
	let { articles, backgroundClasses, blog } = $props();
</script>

<template lang="pug">
	.text-penn(
		class!="page-x-padding {backgroundClasses}")
		//- inner
		.h-auto(
			class="pt-20 pb-28")
			//- header
			.mb-16.grid.grid-cols-1(
				class="md:order-1 md:grid-cols-2")
				.order-2.text-center(
					class="sm:text-left")
					+if('blog?.heading')
						WidgetTitle(
							classes="sm:text-left group-hover:underline underline-offset-8") { blog.heading }
					+if('blog?.subheading')
						WidgetText(
							classes="sm:text-left") { blog.subheading }
				.flex.w-full.order-1.mb-4.justify-center(
					class="md:order-2 md:mb-0 sm:justify-start md:justify-end")
					a.w-20(
						href="/blog",
						title="more blog articles")
						BrandLeaf

			//- gallery
			.w-full.mb-8
				ArticleGallery(
					articleFolder="blog/",
					articleLimit!="{ 4 }",
					articles!="{ articles }",
					headlineClasses="font-semibold mb-6",
					linkClasses="border-penn hover:shadow hover:bg-penn hover:text-white",
					tileBackgroundClasses="shadow bg-neutral-100/90")

			//- Footer
			+if('blog?.link && blog.link?.url && blog.link?.label')
				a.block.text-15(
					class="underline underline-offset-4",
					href!="{ blog.link.url }",
					title!="{ blog.link.title }") { blog.link.label }

	|</template>

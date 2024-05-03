<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	// components
	import WidgetTitle from "$atoms/WidgetHeading.svelte";
	import WidgetText from "$atoms/WidgetText.svelte";
	import WidgetSubtitle from "$atoms/WidgetSubtitle.svelte";
	import ArticleTile from "$molecules/ArticleTile.svelte";
	import BrandLeaf from "$atoms/BrandLeaf.svelte";
	import PrimaryActionLink from "$atoms/PrimaryActionLink.svelte";

	const news = [];

	let {
		latestNews,
		resources,
	}: { latestNews: Article[]; resources: ResourcesWidgetContent } = $props();
</script>

<template lang="pug">
	//- outer container
	section(
		class=`
			h-auto
			page-x-padding
			pt-20
			pb-28`)
		//- inner container
		div(
			class=`
				gap-y-4
				grid
				grid-cols-1
				place-items-center
				text-center
				mb-12
				sm:place-items-start
				sm:text-left
				md:grid-cols-2`)
			BrandLeaf(
				containerClasses!="w-20 md:order-2 md:self-start md:justify-self-end")
			div(
				class="xl:order-1")
				+if('resources?.heading')
					WidgetTitle(
						classes!="sm:text-left") { resources.heading }
				+if('resources?.subheading')
					WidgetText(
						classes="px-8 sm:text-left sm:px-0 sm:max-w-md ") { resources.subheading }

		//- Articles Widget
		.grid.grid-cols-1.gap-8(
			class="lg:grid-cols-2")
			.grid.grid-cols-1.gap-8(
				class="sm:grid-cols-1 md:grid-cols-2")
				+each('latestNews as article, index')
					+if('index == 1 || index == 0')
						+const('linkUrl = "news/" + article?.url')
						.relative.w-full.h-full
							ArticleTile(
								headline!="{ article?.headline }",
								image!="{ article?.image }",
								link!="{ {url: linkUrl, label: 'Read Story' }}",
								linkClasses!="hover:bg-penn hover:shadow")

			//- Other Resources
			div(
				class=`
					gap-6
					grid
					grid-cols-2
					min-h-[400px]
					sm:gap-8
					lg:gap-8`)
				+each('resources.links as link')
					a(
						class!=`
								bg-white/10
								block
								flex
								h-full
								items-center
								justify-center
								opacity-80
								rounded-lg
								text-18
								text-center
								transition-opacity
								underline-offset-4
								w-full
								hover:bg-white/20
								hover:underline
								hover:opacity-100`,
						href!="{ link?.url ?? null }",
						title!="{ link?.title ?? null }") { link?.label ?? "" }

			|</template>

<!--
@component
Here's some documentation for this component.
-->

<script lang='ts'>
// components
import ArticleGallery from "$molecules/ArticleGallery.svelte";
import ArticleTile from "$molecules/ArticleTile.svelte";
import BrandLeaf from "$atoms/BrandLeaf.svelte";
import WidgetTitle from "$atoms/WidgetTitle.svelte";
import WidgetText from "$atoms/WidgetText.svelte";
import WidgetSubtitle from "$atoms/WidgetSubtitle.svelte";
import WidgetSubheading from "$atoms/WidgetSubheading.svelte";
import PrimaryActionLink from "$atoms/PrimaryActionLink.svelte";

// stores
import { blog } from "$stores/blogStore";


// settings
import { pageXPadding } from "$stores/layoutStore";

// props
export let backgroundClasses = ""

</script>

<template lang='pug'>
div.text-penn(class!="{$pageXPadding} {backgroundClasses}")
	//- inner
	.h-auto(class="pt-16 pb-28")

		//- header
		div.mb-16.grid.grid-cols-1(class="md:order-1 md:grid-cols-2")
			div.order-2.text-center(class="sm:text-left")
				a(href="/blog" class="group")
					WidgetTitle(classes="sm:text-left group-hover:underline underline-offset-8") Blog
				WidgetText(classes="sm:text-left") Thoughts and insights about carbon offset projects, carbon credits, and carbon reduction from the experts at Verde.
			.flex.w-full.order-1.mb-4.justify-center(class="md:order-2 md:mb-0 sm:justify-start md:justify-end")
				a(href="/blog" title="more blog articles").w-20
					BrandLeaf

		//- gallery
		.w-full.mb-6
			ArticleGallery(articles!="{$blog}")
				div.h-full(slot="article" let:article)
					ArticleTile(
						backgroundClasses!="shadow !bg-neutral-100/90"
						newsSource!="{null}"
						headline!="{article.headline}"
						slug!="{article.slug}"
						)
						//- Image
						svelte:fragment(slot="image")
							.w-full.aspect-video.relative(class="bg-slate-300")
								picture.flex.w-100.aspect-video
									img.opacity-100.object-cover.min-h-full.min-w-full(
										src!="{article.image.src || '/images/frog.webp'}" loading="lazy" alt!="{article.image.alt}" draggable="false" width!="{null}" height!="{null}")
						//- Source
						//- svelte:fragment(slot="source")
						//- 	.text-15 {article.source}

						//- Headline
						svelte:fragment(slot="headline")
							div
								WidgetSubheading(tag!="h2" classes="!mb-0") {article.headline}

						//- //- Excerpt
						//- svelte:fragment(slot="excerpt")
						//- 	.text-15.text-neutral-100 {article.excerpt}

						//- Link
						svelte:fragment(slot="link")
							PrimaryActionLink(
								href!="/blog/{article.slug}"
								classes!="border-penn bg-transparent hover:border-transparent hover:bg-slimy-400 hover:text-white hover:shadow transition-color"
								) Read article
		// Footer
		div
			a.text-15(href="/blog" title="Browse all blog articles" class="underline underline-offset-4") All blog articles






</template>
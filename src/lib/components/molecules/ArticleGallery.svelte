<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	// components
	import ArticleTile from "$molecules/ArticleTile.svelte";

	interface Props {
		articles: Article[];
		articleLimit: number;
		tileBackgroundClasses: string;
	}

	let { articles, articleLimit, tileBackgroundClasses }: Props = $props();

	let limitedArticles = articles.slice(0, articleLimit);

	// variables
	let article: Article;
	let index: number;
	let classes: string;
</script>

<template lang="pug">
	div(
		class=`
			gap-8
			grid
			grid-cols-1
			sm:grid-cols-2
			lg:grid-cols-3
			xl:grid-cols-4`)
		+each('limitedArticles as article, index')
			.relative.w-full.h-full(
				class="lg:last:hidden xl:last:block")
				ArticleTile(
					backgroundClasses!="shadow bg-neutral-100/90",
					headline!="{ article.headline }",
					image!="{ article.image }",
					link!="{ article.url }",
					linkClasses!="border-penn hover:shadow hover:bg-penn hover:text-white")
					|</template>

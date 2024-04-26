<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	// components
	import ArticleTile from "$molecules/ArticleTile.svelte";

	interface Props {
		articles: Article[];
		articleFolder?: string;
		articleLimit: number;
		headlineClasses: string;
		linkClasses: string;
		tileBackgroundClasses: string;
	}

	let {
		articles,
		articleFolder = "",
		articleLimit = 20,
		headlineClasses = "",
		linkClasses = "",
		tileBackgroundClasses,
	}: Props = $props();

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
			+const('url = article?.slug ?? article.url')
			+const('articleUrl = articleFolder + url')
			.relative.w-full.h-full
				ArticleTile(
					backgroundClasses!="{ tileBackgroundClasses }",
					excerpt!="{ article?.excerpt ?? '' }",
					headline!="{ article.headline }",
					headlineClasses!="{ headlineClasses }",
					image!="{ article.image }",
					link!="{{url: articleUrl} }",
					linkClasses!="{ linkClasses }")
					|</template>

<!--
@component
Here's some documentation for this component.
-->
<script lang="ts">
	// components
	import ArticleGallery from "$molecules/ArticleGallery.svelte";
	import ArticleTile from "$molecules/ArticleTile.svelte";
	import PageContainer from "$atoms/PageContainer.svelte";
	import PageHeader from "$atoms/PageHeader.svelte";
	import PrimaryActionLink from "$atoms/PrimaryActionLink.svelte";
	import WidgetSubheading from "$atoms/WidgetSubheading.svelte";

	let { data } = $props();
</script>

<template lang="pug">
	//- header
	PageContainer
		PageHeader
			svelte:fragment(
				slot="pageTitle") { data.header.headline }
			svelte:fragment(
				slot="pageSubtitle") { data.header.text }
		//- body
		ArticleGallery(
			articleFolder="news/",
			articles!="{ data.articles }",
			headlineClasses="capitalize font-semibold text-lg",
			linkClasses="hover:bg-penn-750 hover:shadow-lg",
			tileBackgroundClasses="shadow-md bg-penn-700")
	|</template>

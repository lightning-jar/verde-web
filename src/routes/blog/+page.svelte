<!--
@component
Here's some documentation for this component.
-->
<script lang="ts">
	// components
	import ArticleGallery from "$molecules/ArticleGallery.svelte";
	import ArticleTile from "$molecules/ArticleTile.svelte";
	import PageContainer from "$molecules/PageContainer.svelte";
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
			articleFolder="blog/",
			articles!="{ data.articles }",
			headlineClasses="font-semibold text-lg",
			linkClasses="hover:bg-penn-750 hover:shadow-lg",
			showSource!="{ false }",
			tileBackgroundClasses="shadow-md bg-penn-700")
	|</template>

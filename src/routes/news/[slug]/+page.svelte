<!--
@component
Here's some documentation for this component.
-->
<script lang="ts">
	// components
	import PageContainer from "$molecules/PageContainer.svelte";
	import PageHeader from "$atoms/PageHeader.svelte";

	// types
	import type { PageData } from "./$types.js";
	import type { Article } from "$types/generalTypes";

	// stores

	// data
	export let data: PageData; // data coming in from page.ts LoadEvent

	// article
	let article: Article | undefined;
	$: article = data.article;

	// markup
	let markup: string;
	$: markup = article?.markup || "";

	// functions
	function parseMarkup(markup: string) {
		const addMargins = markup.replace(/<p>/gi, "<p class='mb-4'>");
		return addMargins;
	}

	// formatted markup
	let text: string;
	$: text = parseMarkup(markup);
</script>

<template lang="pug">
	PageContainer(
		classes="bg-penn")
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
					h1.text-19.font-semibold.mb-4(
						class="lg:text-24") { data.article?.headline }
					p.mb-4.text-17.italic.opacity-80.text-neutral-100 { data?.article.excerpt }

					.text-18.leading-relaxed(
						class="md:text-[18px]")
						| {  @html text  }</template>

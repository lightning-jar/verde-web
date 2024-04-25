<!--
@component
Here's some documentation for this component.
-->
<script lang="ts">
	// components
	import PageContainer from "$molecules/PageContainer.svelte";

	// types
	import type { PageData } from "./$types.js";

	// data
	let { data } = $props();
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
					h1.text-19.font-semibold.mb-4.capitalize(
						class="capitalize lg:text-24") { data.article?.headline }
					+if('data.article?.excerpt')
						p.mb-4.text-17.italic.opacity-80.text-neutral-100 { data?.article.excerpt }

					+if('data.article?.text')
						#article-text.text-18.leading-relaxed(
							class="md:text-[18px]")
							| {  @html data.article?.text?.html  }
	|</template>

<style lang="postcss">
</style>

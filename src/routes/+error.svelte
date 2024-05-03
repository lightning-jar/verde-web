<!--
@component
Contact Page
-->
<script lang="ts">
	// components
	import PageContainer from "$atoms/PageContainer.svelte";
	import WidgetText from "$atoms/WidgetText.svelte";
	import WidgetTitle from "$atoms/WidgetHeading.svelte";

	let { data } = $props();
</script>

<svelte:head>
	<title>404 Error | Verde</title>
	<meta
		content="noindex, nofollow"
		name="robots" />
</svelte:head>
<template lang="pug">
	.bg-gradient-to-b.from-penn.via-penn-725.to-penn.pt-28.page-x-padding.mb-20
		//- Header
		.text-36.max-w-md.leading-snug.mb-6 404 Error
		WidgetText(
			classes="block !text-left pb-2") Not Found. The page you requested could not be found.
		//- sec 1
	.page-x-padding.pt-8.mb-16.grid.gap-x-12.pb-24.pt-0.grid.grid-cols-1.place-content-start(
		class="lg:grid-cols-2 border-neutral-100/40")
		a.opacity-90.underline.underline-offset-4(
			class="decoration-white/40 hover:decoration-white transition-colors",
			href="/") Back to Home

	|</template>

<!--
@component
Contact Page
-->
<script lang="ts">
	// components
	import ContactForm from "$molecules/ContactForm.svelte";
	import PageContainer from "$molecules/PageContainer.svelte";
	import WidgetText from "$atoms/WidgetText.svelte";
	import WidgetTitle from "$atoms/WidgetHeading.svelte";

	let { data } = $props();
</script>

<template lang="pug">
	.bg-gradient-to-b.from-penn.via-penn-725.to-penn.pt-28.page-x-padding
		//- Header
		.text-36.max-w-md.leading-snug.mb-6 { data.header.headline }
		WidgetText(
			classes="block !text-left pb-2") { data.header.text }
		//- sec 1
		.pt-8.mb-16.grid.gap-x-12.pb-24.pt-0.grid.grid-cols-1.place-content-start(
			class="lg:grid-cols-2 border-neutral-100/40")
			div
				ContactForm

			div
				.grid(
					class="lg:grid-cols-2")
					+each('data.cards as card')
						//- card
						.rounded-md.px-6.pt-4.pb-6.text-neutral-100.h-auto(
							class="bg-white/0 border border-white/40")
							.uppercase.mb-2.text-14.tracking-widest { card.heading }
							.opacity-90
								+html('card.text')

	|</template>

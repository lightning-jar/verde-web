<!--
@component
Widget tout component to nest inside WidgetToutGrid
- heading is H3 tag by default
- icon is 16x16
- text is P tag
props:
-->

<script lang="ts">
	//- components
	import WidgetCard from "$atoms/WidgetCard.svelte";

	//- props
	let { cards }: { cards: Card[] } = $props();
	let item: Card;
</script>

<template lang="pug">
	div(
		class=`
			gap-x-6
			gap-y-8
			grid
			grid-cols-1
			mb-20
			place-items-start
			w-full
			sm:grid-cols-2
			md:gap-x-6
			md:gap-y-6
			md:p-0
			lg:gap-6
			lg:grid-cols-2
			lg:items-start
			lg:mt-0
			xl:grid-cols-4
			xl:justify-center
			2xl:grid-cols-4`)
		//- tout
		+each('cards as card, index')
			WidgetCard(
				heading!="{ card.heading }",
				image!="{ card.image }",
				styles!="{ card.styles ?? '' }",
				text!="{ card.text }")
	|</template>

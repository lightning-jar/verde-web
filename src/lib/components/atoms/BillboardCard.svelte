<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	let { card = new BillboardCard() } = $props();
</script>

<template lang="pug">
	div(
		class=`
			backdrop-blur
			bg-penn/30
			border
			border-1
			border-penn-100
			group
			h-full
			p-6
			pointer-events-auto
			px-4
			py-3
			relative
			rounded-lg
			w-full
			hover:bg-penn-400/30
			hover:border-penn-600/30
			lg:backdrop-blur-none
			lg:bg-penn/0
			lg:px-6
			lg:py-6
			xl:col-span-2
			{card.classes}`)
		//- category tag ( hidden on mobile)
		div(
			class=`
				hidden
				mb-3
				px-2
				py-1
				rounded-md
				text-center
				text-12
				text-penn
				group-hover:bg-penn-75
				bg-penn-100
				sm:inline-block
				lg:mb-5
				xl:text-[12.5px]
				2xl:text-13`) { card.category }

		//- [mobile] heading
		.block.leading-none.mb-1.py-1.rounded-md.text-white.text-24(
			class="sm:mb-3 sm:px-2 sm:hidden") { card.mobile.heading ? card.mobile.heading : card.heading }

		//- [mobile] text
		.text-17.mb-5.opacity-90.max-w-sm(
			class="sm:hidden") { card.mobile.text ? card.mobile.text : card.text }

		//- heading
		.hidden.text-20.mb-3.text-white.leading-tight(
			class="sm:block group-hover:text-white lg:text-20") { card.heading }

		//- text
		.hidden.text-15.mb-4.opacity-90(
			class="sm:block xl:max-w-sm") { card.text }

		//- card link
		+if('card.link && card.link.url')
		a.block.text-15.text-penn-100.font-medium(
			class="group-hover:text-penn-75 hover:!text-slimy-300",
			href!="{ card.link?.url ?? '' }")
			span.hidden(
				class="sm:inline-block") { card.link?.label ?? "" }

			//- mobile button
			span.inline-block.px-2.py-1.mb-2.outline.rounded(
				class="text-14 outline-[1px] sm:hidden") { card.mobile.linkLabel ? card.mobile.linkLabel : card.link?.label ?? "Learn More" }

		|</template>

<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	interface Props {
		card: Card;
	}
	let { card }: Props = $props();
</script>

<template lang="pug">
	a(
		class=`
			backdrop-blur
			bg-penn-400/20
			border
			border-1
			border-penn-600/30
			grid
			grid-cols-1
			group
			h-full
			pointer-events-auto
			px-4
			pt-3
			pb-4
			relative
			rounded-lg
			text-17
			text-penn-50
			w-full
			sm:text-16
			sm:p-6
			sm:hover:text-penn-100
			sm:hover:border-penn-100
			sm:hover:bg-penn-400/30
			lg:backdrop-blur-none
			xl:col-span-2
			{card?.classes ?? ''}`,
		href!="{ card.link?.url ?? '' }",
		title!="{ card.link?.title ?? '' }")
		//- heading
		+if('card.heading')
			div(
				class=`
					leading-tight
					mb-3
					text-[1.5em]`) { card.heading }

		//- text
		+if('card.text')
			div(
				class=`
					mb-5
					opacity-90
					sm:max-w-sm
					sm:mb-6`) { card.text }

		//- card link
		+if('card.link.label')
			div(
				class=`
					bg-penn-100
					border
					border-penn-100
					font-medium
					max-w-fit
					px-3
					py-1
					rounded-lg
					text-[.9em]
					text-penn-900
					self-end`) { card.link.label ? card.link.label : "Learn More" }

		|</template>

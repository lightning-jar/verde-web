<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	// components
	import BrandLeaf from "$atoms/BrandLeaf.svelte";
	import type { HTMLAnchorAttributes } from "svelte/elements";

	interface Props {
		[key: string]: unknown;
		text: string;
		classes: string;
		heading: string;
		link: HTMLAnchorAttributes;
		styles: string;
	}
	// props
	let { text, classes, heading, link, styles }: Props = $props();
</script>

<template lang="pug">
	div(
		class=`
		border
		border-neutral-100/60
		mb-24
		px-4
		py-8
		relative
		rounded-lg
		w-full
		sm:flex
		sm:pl-6
		sm:pr-2
		lg:mb-0
		lg:pl-8
		lg:pr-4
		xl:pl-10
		xl:pr-6
		{classes}`,
		style!="{ styles ? styles : null }")
		//- Graphic
		BrandLeaf(
			classes=`
				!w-20
				!sm:w-24
				!md:w-36
				!lg:w-20`,
			containerClasses=`
			flex
			flex-none
			justify-center
			mb-6
			w-full
			sm:mb-0
			sm:order-2
			sm:w-auto`)

		//- CTA Content
		div(
			class=`
				rounded-lg
				text-center
				text-neutral-100
				w-full
				sm:block
				sm:text-left`)
			//- heading
			h3(
				class=`
					font-medium
					max-w-xs
					mb-2
					text-18
					text-slimy-300`) { heading }

			//- text
			p(
				class=`
					max-w-xs
					mb-8
					opacity-90
					text-[0.9em]
					lg:mb-6`) { text }

			//- link
			+if('link?.url')
				a(
					class=`
						bg-slimy-300/90
						border-0
						border-1
						border-penn-600
						leading-none
						mb-4
						opacity-90
						px-3
						py-3
						rounded
						text-15
						text-slimy-900
						transition-opacity
						whitespace-nowrap
						hover:opacity-100
						sm:inline-block
						sm:mb-0
						md:text-14`,
					href!="{ link.url }",
					rel!="{ link?.rel ? link.rel : null }",
					target!="{ link?.target ? link?.target : null }",
					title!="{ link?.title ? link.title : null }")
					| { link?.label }

	|</template>

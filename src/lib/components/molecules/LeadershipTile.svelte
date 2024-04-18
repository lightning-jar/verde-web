<!--
@component
Here's some documentation for this component.
-->

<script lang='ts'>
// components
import PrimaryActionLink from "$atoms/PrimaryActionLink.svelte";
import WidgetText from "$atoms/WidgetText.svelte";

// utils
import { slugify } from "lj-svelte-ui";

// props
export let name = "";
export let title = "";
export let image =
	{
	alt: "Sean Coerver - Verde",
	avif:"https://media.graphassets.com/KRFSRJkuQ4GqzIzMVah3",
	src:"https://media.graphassets.com/isnAiLYHRz6liw6iE6b9",
	height: "400",
	webp: "https://media.graphassets.com/Szw3J36TRDmb9TK8KQbX",
	width: "400",
	type:"image/jpeg"
	};
</script>

<template lang='pug'>
//- col 1
.rounded-md.py-6.px-6(class="border-neutral-100/60 border")

	//- image and name group
	div.grid.grid-cols-1.mb-8(class="sm:grid-cols-3 sm:gap-6")
		div(class="mb-4 sm:mb-0")
			.w-full.aspect-square.rounded-md.relative.overflow-hidden(class="bg-white/10")
				picture.w-full.h-full.flex
					+if('image.avif')
						source(
							type="image/avif"
							srcset!="{image.avif}"
							)
					+if('image.webp')
						source(
							type="image/webp"
							srcset!="{image.webp}"
							)
					img.object-cover.aspect-square(
						alt!="{image.alt}"
						height!="{image.height ? image.height : null}"
						width!="{image.width ? image.width : null}"
						draggable="false"
						loading="lazy"
						src!="{image.src}"
						)
		.grid.grid-cols-1.h-full.flex.place-content-start.col-span-2(class="lg:px-4")
			h3.w-full.font-semibold.mb-2(class="text-[1.25em]") { name }
			.italic.w-full.mb-8 { title }


			// primaryCTA
			div
				PrimaryActionLink(
					classes="px-8 mt-4 text-16 lg:text-14"
					href="/about/{slugify(name)}"
					)
					+if('$$slots.linkLabel')
						slot(name="linkLabel")
	//- quote group
	div
		//- quote
		.mb-6
			blockquote.leading-8(class="text-[1.175em] opacity-90 pr-0 sm:pr-2 max-w-md")
				slot(name="quote")
		//- link
		//-div
			PrimaryActionLink(
				class="mt-4"
				href="/about/sean-coerver"
				)
				+if('$$slots.linkLabel')
					slot(name="linkLabel")
</template>
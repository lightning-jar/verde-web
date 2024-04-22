<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	// components
	import PrimaryActionLink from "$atoms/PrimaryActionLink.svelte";
	import WidgetSubheading from "$atoms/WidgetSubheading.svelte";
	import WidgetText from "$atoms/WidgetText.svelte";

	let {
		backgroundClasses,
		date,
		excerpt,
		headline,
		image,
		link,
		linkClasses,
		source,
	} = $props();
</script>

<template lang="pug">
	div(
		class=`
			{backgroundClasses}
			bg-white/5
			grid
			grid-cols-1
			h-full
			overflow-hidden
			pb-0
			place-content-stretch
			relative
			rounded-lg
			w-full`)
		//-image
		+if('image?.url')
			img(
				class=`
					aspect-[4/3]
					flex
					w-full
					object-cover
					opacity-100
					`,
				alt!="",
				draggable="false",
				height!="",
				loading="lazy",
				src!="{ image.url ?? '/images/frog.webp' }",
				width!="")

		//- text content
		div(
			class=`
				grid
				grid-cols-1
				h-full
				pt-6
				px-6
				place-content-start
				place-self-start`)
			//- date & source
			+if('date || source')
				.flex.mb-3.items-center
					//- date
					+if('date')
						.opacity-70.tracking-wider.text-13 { date.toLocaleDateString() }
					+if('date && source')
						.mx-2.opacity-20 /
					//- source
					+if('source')
						.text-14.opacity-70.font-medium.grow-0.w-full { source }

			//- headline
			+if('headline')
				.mb-6 { headline }

			//- excerpt
			+if('excerpt')
				.opacity-80.pt-6.mt-6.leading-6.border-t(
					class="border-white/10")
					p { excerpt }

		//- link
		+if('link')
			.h-full.flex-col.self-stretch.px-6.pb-4
				PrimaryActionLink(
					classes="z-10 max-w-fit px-6 {linkClasses}",
					title!="{ link?.title ?? '' }",
					url!="{ link?.url }") { link.label ?? "Read Story" }

		|</template>

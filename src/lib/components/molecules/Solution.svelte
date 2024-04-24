<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	// components
	import CTABlock from "$atoms/CTABlock.svelte";
	import WidgetText from "$atoms/WidgetText.svelte";
	import WidgetTitle from "$atoms/WidgetTitle.svelte";
	import WidgetToutsGrid from "$components/molecules/WidgetToutsGrid.svelte";
	import WidgetSubtitle from "$atoms/WidgetSubtitle.svelte";

	// props
	let { solution } = $props();
</script>

<template lang="pug">
	section(
		class!=`
			bg-[#F5F5F5]
			bg-gradient-to-br
			flex
			from-penn-800
			max-w-screen
			overflow-hidden
			page-x-padding
			py-16
			relative
			text-neutral-100
			to-penn-725
			sm:py-12
			md:py-16
			md:min-h-[600px]
			lg:py-20`,
		id!="{ solution?.id ? solution.id : null }")
		//- image background
		+if('solution?.background?.image?.url')
			img(
				class=`
					absolute
					flex
					h-full
					inset-0
					z-10
					object-cover
					w-full`,
				alt="",
				loading="lazy",
				role="presentation",
				src!="{ solution.background.image.url }")

			//- color overlay
			+if('solution?.background?.overlay?.styles')
				div(
					class=`
						absolute
						inset-0
						z-20`,
					style!="{ solution.background.overlay.styles }")

		//- content container
		.h-full.z-20
			//- headings container
			div(
				class=`
					grid
					leading-none
					mb-8
					place-items-center
					text-center
					w-full
					lg:place-items-start
					lg:text-left`)
				WidgetTitle { solution?.title ? solution.title : "" }
				+if('solution?.subtitle')
					WidgetSubtitle { solution.subtitle }

			//- text container
			div(
				class=`
					gap-8
					grid
					grid-cols-1
					mb-2
					place-items-center
					lg:grid-cols-2
					lg:mb-4
					lg:place-items-start
					xl:mb-4`)
				//- text
				WidgetText(
					classes="border-t py-8 lg:pt-6 lg:pr-8",
					textContent!="{ solution.bodyText }")

				//- cta
				+if('solution.cta')
					+const('cta = solution.cta')
					CTABlock(
						classes!="{ cta?.classes ? cta.classes : '' }",
						bodyText!="{ cta?.bodyText ? cta.bodyText : '' }",
						headingText!="{ cta?.headingText ? cta.headingText : '' }",
						link!="{ cta?.link?.url ? cta.link : '' }",
						styles!="{ cta?.styles ? cta.styles : '' }")

			//- Benefits Grid
			WidgetToutsGrid(
				toutsGrid!="{ solution.cardsGrid }")
				|</template>

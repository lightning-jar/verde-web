<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	// components
	import CTABlock from "$atoms/CTABlock.svelte";
	import WidgetText from "$atoms/WidgetText.svelte";
	import WidgetHeading from "$atoms/WidgetHeading.svelte";
	import WidgetToutsGrid from "$molecules/CardsGridWidget.svelte";
	import WidgetSubtitle from "$atoms/WidgetSubtitle.svelte";

	// utils
	import { sluggo } from "$utils/sluggo";

	// props
	let { solution }: { solution: SolutionWidgetContent } = $props();
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
		id!="{ solution?.heading ? sluggo(solution.heading) : null }")
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
				+if('solution?.heading')
					WidgetHeading { solution?.heading }
				+if('solution?.subheading')
					WidgetSubtitle { solution.subheading }

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
				+if('solution.text?.html')
					WidgetText(
						classes="border-t py-8 lg:pt-6 lg:pr-8",
						htmlContent!="{ solution.text.html }")

				//- cta
				+if('solution.cta')
					+const('cta = solution.cta')
					CTABlock(
						classes!="{ cta?.classes ? cta.classes : '' }",
						heading!="{ cta?.heading ? cta.heading : '' }",
						link!="{ cta?.link?.url ? cta.link : '' }",
						styles!="{ cta?.styles ? cta.styles : '' }",
						text!="{ cta?.text ? cta.text : '' }")

			//- Benefits Grid
			+if('solution.cards[0]')
				WidgetToutsGrid(
					cards!="{ solution.cards }")

	|</template>

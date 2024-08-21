<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	/* global MessagingWidgetContent */

	// svelte fade
	import { fade } from "svelte/transition";

	// components
	import WidgetHeading from "$atoms/WidgetHeading.svelte";
	import WidgetText from "$atoms/WidgetText.svelte";
	import ParentIsOnScreen from "$tools/ParentIsOnScreen.svelte";

	// utils
	import { sluggo } from "$utils/sluggo";

	interface Props {
		[key: string]: unknown;
		isOnScreen: boolean;
		messaging: MessagingWidgetContent;
	}

	// variables
	let { isOnScreen = false, messaging }: Props = $props();
	// content
</script>

<template lang="pug">
	section(
		class=`
			bg-[#042C72]
			grid
			grid-cols-1
			max-w-screen
			overflow-hidden
			py-16
			relative
			text-neutral-100
			sm:py-12
			md:min-h-[600px]
			md:py-16
			lg:py-20`,
		id!="{ messaging?.name ? sluggo(messaging.name) : messaging?.heading ? sluggo(messaging.heading) : null }")
		//- is on screen
		div(
			class=`
				absolute
				hidden
				inset-0
				lg:block`)
			ParentIsOnScreen(
				bind:isOnScreen,
				tolerance=0.35)

		//- background video
		+if('messaging.background?.video?.url && isOnScreen')
			div(
				class=`
					absolute
					flex
					hidden
					inset-0
					items-center
					justify-center
					overflow-hidden
					lg:block`)
				.min-h-full.aspect-video.flex.bg-penn-900(
					transition:fade)
					video(
						class=`
								min-h-full
								min-w-full
								object-cover
								opacity-90`,
						autoplay="autoplay",
						controls=null,
						loading="lazy",
						loop="loop",
						muted="muted",
						poster!="{ messaging.background.image.url }")
						source(
							src!="{ messaging.background.video.url }",
							type!="{ messaging.background.video.type }")

		//- background image - for mobile and tablet
		+if('messaging.background.image.url')
			img(
				class=`
						absolute
						flex
						inset-0
						object-cover
						opacity-95
						mix-blend-multiply
						lg:hidden
						min-h-full
						min-w-full`,
				alt="",
				loading="lazy",
				role="presentation",
				src!="{ messaging.background.image.url }")

		//- Header Group
		+if('messaging.heading || messaging.callout')
			div(
				class=`
					mb-16
					page-x-padding
					place-items-center
					z-10
					sm:mb-24
					lg:gap-8
					lg:grid
					lg:grid-cols-3
					lg:mb-0
					lg:place-items-start`)
				//- Title
				+if('messaging.heading')
					WidgetHeading(
						classes!="!mb-8 w-full px-6sm:px-24 lg:px-0 lg:!mb-0") { messaging.heading }

				//- CallOut
				+if('messaging.callout')
					div(
						class=`
							bg-penn/60
							border
							border-neutral-100
							flex
							h-auto
							items-center
							//mx-12
							mix-blend-darken
							px-4
							py-4
							rounded-md
							text-neutral-200
							lg:bg-penn/20
							lg:col-span-2
							lg:h-full
							lg:mx-0
							lg:px-6
							lg:py-8
							xl:py-2
							2xl:py-6`) { messaging.callout }
		//- Body Content Group
		div(
			class=`
				page-x-padding
				relative
				grid
				grid-cols-1
				place-items-center
				md:gap-6
				md:grid
				md:grid-cols-2
				lg:gap-8
				lg:grid-cols-3`)
			+each('messaging.cards as card, index')
				//- card
				div(
					class=`
						backdrop-blur-lg
						bg-white/10
						flex
						grid
						grid-cols-1
						items-start
						max-w-md
						mb-8
						p-4
						place-content-start
						relative
						rounded-lg
						shadow
						md:h-full
						md:mb-0
						w-full
						z-10
						relative
						lg:aspect-[2/3]}
						lg:backdrop-blur-none
						lg:bg-transparent
						lg:items-end
						lg:max-w-none
						lg:place-content-end
						lg:min-h-[460px]
						lg:p-0`)
					//- headingText
					+if('card.heading')
						h3(
							class=`
								backdrop-blur
								bg-penn-200/40
								font-medium
								leading-none
								mb-4
								py-3
								rounded-md
								text-[1.065em]
								text-center
								tracking-wider
								w-full
								lg:bg-penn-200/40
								lg:mb-0
								lg:order-2
								lg:shadow-none`) { card.heading }
					//- bodyText
					+if('card.text')
						div(
							class="mb-3 lg:order-1 lg:mb-6") { card.text }

	|</template>

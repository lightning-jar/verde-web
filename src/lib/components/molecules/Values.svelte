<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	// svelte fade
	import { fade } from "svelte/transition";

	// components
	import WidgetTitle from "$atoms/WidgetTitle.svelte";
	import WidgetSubtitle from "$atoms/WidgetSubtitle.svelte";
	import WidgetText from "$atoms/WidgetText.svelte";
	import ParentIsOnScreen from "$tools/ParentIsOnScreen.svelte";
	import type { Video } from "@playwright/test";

	interface Props {
		[key: string]: unknown;
		isOnScreen: boolean;
		values: {
			background: {
				image?: Image | null;
				video?: Video | null;
			};
			callOut?: string;
			messagingBlocks: {
				bodyText?: string | null;
				headingText?: string | null;
			}[];
			heading?: string | null;
			id?: string | null;
		};
	}

	// variables
	let { isOnScreen = false, values }: Props = $props();
	// content
	const why = [
		{
			body_text:
				"Quality is at the heart of what we do at Verde. We rigorously analyze third-party verification and validation to ensure that your carbon credits are of the highest quality. Working with us means that your organization can be confident that your carbon credits are credible and effective in the fight against climate change.",
			heading_text: "Quality",
		},
		{
			body_text:
				"Additionality is key to creating carbon credits that truly make a difference in the fight against climate change. At Verde, we prioritize projects that go beyond business as usual to truly reduce greenhouse gas emissions. By working with us, your organization can be confident that efforts to reduce emissions will have a measurable impact.",
			heading_text: "Additionality",
			icon_name: "",
		},
		{
			body_text:
				"When it comes to carbon credits, permanence is crucial. That's why we focus on projects that offer long-term, verifiable carbon sequestration or avoidance. With Verde, enterprises can rest assured that their carbon credits will be backed by sustainable, long-lasting emissions reductions.",
			heading_text: "Permanence",
		},
	];
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
			lg:py-20`)
		//- is on screen
		.absolute.inset-0.hidden(
			class="lg:block")
			ParentIsOnScreen(
				on:isOnScreenTestResults!="{ (e) => {isOnScreen = e.detail} }",
				tolerance!="{ 0.35 }")

		//- background video
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
			+if('values.background?.video?.url && isOnScreen')
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
						poster!="{ values.background.image.url }")
						source(
							src!="{ values.background.video.url }",
							type!="{ values.background.video.type }")

		//- background image - for mobile and tablet
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
			src!="{ values.background.image.url }")

		//- Header Group
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
			WidgetTitle(
				classes!="mb-4 w-full lg:!mb-0") { values.title }

			//- CallOut
			div(
				class=`
					bg-penn/20
					border
					border-neutral-100
					flex
					h-auto
					items-center
					mix-blend-darken
					px-4
					py-4
					rounded-md
					text-neutral-200
					lg:col-span-2
					lg:h-full
					lg:px-6
					lg:py-8
					xl:py-2
					2xl:py-6`) { values.callOut }
		//- Body Content Group
		div(
			class=`
				page-x-padding
				relative
				md:gap-6
				md:grid
				md:grid-cols-2
				lg:gap-8
				lg:grid-cols-3`)
			+each('values.messagingBlocks as block, index')
				//- card
				div(
					class=`
						backdrop-blur-lg
						bg-white/10
						flex
						grid
						grid-cols-1
						items-start
						mb-8
						p-4
						place-content-start
						relative
						rounded-lg
						shadow
						md:h-full
						md:mb-0
						z-10
						relative
						lg:aspect-[2/3]}
						lg:backdrop-blur-none
						lg:bg-transparent
						lg:items-end
						lg:place-content-end
						lg:min-h-[460px]
						lg:p-0`)
					//- headingText
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
							lg:mb-0
							lg:order-2
							lg:shadow-none`) { block.headingText }
					//- bodyText
					div(
						class="mb-3 lg:order-1 lg:mb-6") { block.bodyText }

	|</template>

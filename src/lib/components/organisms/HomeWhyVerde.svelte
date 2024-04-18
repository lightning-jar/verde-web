<!--
@component
Here's some documentation for this component.
-->

<script lang='ts'>
	// svelte fade
	import { fade } from 'svelte/transition';

	// media
	import turtle_video from '$assets/sea-turtle.mp4';


	// components
	import WidgetTitle from '$atoms/WidgetTitle.svelte';
	import WidgetSubtitle from '$atoms/WidgetSubtitle.svelte';
	import WidgetText from '$atoms/WidgetText.svelte';
	import ParentIsOnScreen from '$tools/ParentIsOnScreen.svelte';

	// stores
	import { pageXPadding } from '$stores/layoutStore'
	import { width } from '$stores/windowStore';
  import NavMenuItem from 'lj-svelte-ui/src/lib/components/nav/NavMenuItem.svelte';
	$:console.log($width)

	// variables
	let isOnScreen: boolean;
	$: isOnScreen = false;
	// content
	const why = [
		{
			body_text: "Quality is at the heart of what we do at Verde. We rigorously analyze third-party verification and validation to ensure that your carbon credits are of the highest quality. Working with us means that your organization can be confident that your carbon credits are credible and effective in the fight against climate change.",
			heading_text: "Quality",
		},
		{
			body_text: "Additionality is key to creating carbon credits that truly make a difference in the fight against climate change. At Verde, we prioritize projects that go beyond business as usual to truly reduce greenhouse gas emissions. By working with us, your organization can be confident that efforts to reduce emissions will have a measurable impact.",
			heading_text: "Additionality",
			icon_name: ""
		},
		{
			body_text: "When it comes to carbon credits, permanence is crucial. That's why we focus on projects that offer long-term, verifiable carbon sequestration or avoidance. With Verde, enterprises can rest assured that their carbon credits will be backed by sustainable, long-lasting emissions reductions.",
			heading_text: "Permanence",
		},

	]


</script>

<template lang='pug'>
section.py-16.relative.max-w-screen.overflow-hidden.relative.text-neutral-100.grid.grid-cols-1(
	class!="bg-[#0B3BA0] text-neutral-100 sm:py-12 md:py-16 md:min-h-[600px] lg:py-20 ")

	ParentIsOnScreen(
			on:isOnScreenTestResults!="{ (e) => {isOnScreen = e.detail} }",
			tolerance!="{ 0.35 }")

	//- Headings Group
	.z-10.place-items-center.mb-16(class="sm:mb-24 lg:mb-0 lg:grid lg:grid-cols-3 lg:gap-8 lg:place-items-start {$pageXPadding}")

		//- Heading
		.mb-4.w-full
			WidgetTitle(classes!="lg:!mb-0")
				| Unlocking the Full Potential of Carbon Markets with Verde

		//- Text
		.h-full(class="lg:col-span-2 lg:py-8 xl:py-2 2xl:py-6")
			.px-4.py-4.border-neutral-100.rounded-md.border.h-auto.flex.items-center.text-neutral-200(class="lg:h-full lg:px-6 lg:py-0 bg-penn/20 mix-blend-darken")
				| Verde is committed to making a positive impact on our planet catalyzing carbon offset projects to deliver real, measurable results. Our expertise in the carbon credit creation, validation, and marketing process ensures that your project will have the greatest possible impact.

	//- values
	.w-full
		//- background video - for desktop
		.absolute.inset-0.flex.hidden.justify-center.items-center.overflow-hidden(class="lg:block")
			+if('turtle_video && isOnScreen && $width > 1023.99')
				.min-h-full.aspect-video.flex.bg-penn-900(transition:fade)
					video.object-cover.min-w-full.min-h-full.opacity-90(
						autoplay="autoplay"
						controls=null
						loop="loop"
						loading="lazy"
						muted="muted"
						poster!="https://res.cloudinary.com/dn0pqjjbq/image/upload/f_auto,q_auto:good/v1685113971/sea-turtle_txcjbu.webp"
						)
						source(src!="{turtle_video}" type="video/mp4")
				+else
					//- background image - for mobile and tablet
					.absolute.inset-0.flex(class="lg:hidden bg-penn-900")
						.w-full.h-full.flex
							img.object-cover.min-w-full.min-h-full(loading="lazy" class="opacity-50" src!="https://res.cloudinary.com/dn0pqjjbq/image/upload/f_auto,q_auto:good/v1685113971/sea-turtle_txcjbu.webp")


		//- content layer
		.relative(class="md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8 {$pageXPadding}")
			+each('why as item, index')
				.z-10.relative(class="lg:h-full")
					.relative.flex.items-start.mb-8.py-4.px-2(class="bg-penn/70 rounded-lg md:mb-0 md:h-full lg:items-end lg:p-0 lg:bg-transparent lg:min-h-[460px] lg:aspect-[2/3]}")
						.px-2.pt-2.grid.grid-cols-1.rounded-lg
							h3.text-center.mb-4.tracking-wider.font-medium.leading-none.py-3(class="lg:mb-0 lg:order-2 bg-white/10 backgdrop-blur rounded-md text-[1.065em]") { item.heading_text }
							div.mb-3(class="lg:order-1 lg:mb-6") { item.body_text }





</template>
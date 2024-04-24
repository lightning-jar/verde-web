<!--
@component
Here's some documentation for this component.
-->
<script lang="ts">
	// components
	import BillboardCard from "$atoms/BillboardCard.svelte";
	import ParentIsOnScreen from "$tools/ParentIsOnScreen.svelte";

	// props
	let { data } = $props();

	// $inspect(data);
	let isOnScreen = $state(false);

	import mobile_background from "$assets/billboard-mobile-placeholder.webp";
</script>

<template lang="pug">
	//- billboard container
	#billboard-container(
		class=`
			h-screen
			flex
			max-h-[667px]
			h-[590px]
			overflow-hidden
			relative
			text-white
			w-full
			sm:h-screen
			sm:max-h-[800px]
			md:max-h-[900px]
			lg:h-[90vh]
			lg:max-h-[860px]
			lg:min-h-[720px]
			xl:min-h-[800px]
			xl:max-h-[1040px]`)
		//- mobile image background -- disappears at lg breakpoint
		.absolute.inset-0.bg-penn(
			class="md:hidden")
			picture.w-full.h-full.flex
				img.object-cover.min-w-full.min-h-full(
					alt="aerial view of mist rising from forest and lake",
					loading="lazy",
					src!="{ mobile_background }")

		//- video background -- appears at lg breakpoint
		//- tool: child component who job is to report whether or not the parent is on screen
		ParentIsOnScreen(
			on:isOnScreenTestResults!="{ (e) => {isOnScreen = e.detail} }",
			tolerance!="{ 0.25 }")

		//- video container outer  -- appears at md breakpoint and when on-screen
		#billboard-video-container-outer(
			class=`
				absolute
				flex
				h-full
				hidden
				inset-0
				items-center
				justify-center
				w-full
				z-0
			md:flex`)
			//- video container inner -- keeps its aspect ratio
			#billboard-video-container-inner(
				class=`
					bg-penn
					aspect-video
					min-h-full`)
				//- video
				iframe#billboard-video.min-w-full.min-h-full.object-cover.w-screen(
					allow="autoplay; fullscreen; picture-in-picture",
					allowfullscreen,
					frameborder="0",
					height="100%",
					loading="eager",
					src="https://player.vimeo.com/video/826306957?autoplay=1&background=1&muted=1#t=1.8s",
					style!="opacity: 100; transition: opacity 0.25s ease-in-out",
					width="auto")

		//- video overlay
		#billboard-video-overlay(
			class=`
				absolute
				bg-gradient-to-b
				from-penn
				inset-0
				mix-blend-darken
				pointer-events-none
				to-penn/40
				via-penn/60
				z-0
				`)

		//- heading and text
		#billboard-heading-container-outer(
			class=`
					absolute
					inset-0
					grid
					mt-2
					place-content-start
					pointer-events-none
					w-full
					z-20`)
			#billboard-heading-container-inner(
				class=`
					backdrop-blur
					bg-penn-800/0
					h-full
					justify-between
					flex
					flex-col
					mt-2
					page-x-padding
					z-20
					lg:max-w-lg
					lg:pb-4
					lg:pt-20`)
				//- heading
				h1(
					class=`
							font-medium
							leading-tight
							mb-3
							px-6
							text-32
							w-full
							sm:text-36
							lg:px-0
							lg:mb-6
							xl:text-[2.8vw]`) { data?.headline ?? "" }
				//- text
				p(
					class=`
						hidden
						text-16
						leading-relaxed
						opacity-90
						px-6
						sm:block
						sm:text-18
						sm:pr-12
						lg:px-0
						lg:text-16`) { data?.text ?? "" }

		//- cards
		div(
			class=`
				absolute
				bottom-16
				gap-y-4
				grid
				grid-cols-1
				inset-0
				place-content-end
				place-items-center
				px-4
				pointer-events-none
				sm:absolute
				sm:bottom-20
				sm:gap-6
				sm:px-8
				md:grid-cols-2
				md:mb-16
				lg:bottom-0
				lg:gap-10
				lg:mb-0
				lg:pb-24
				lg:px-40
				xl:grid-cols-4`)
			+each('data.cards as card')
				BillboardCard(
					card!="{ card }")

	|</template>

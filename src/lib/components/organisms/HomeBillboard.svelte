<!--
@component
Here's some documentation for this component.
-->
<script lang="ts">
	// svelte fade
	import { fade } from "svelte/transition";

	// components
	import BillboardCard from "$atoms/BillboardCard.svelte";
	import ParentIsOnScreen from "$tools/ParentIsOnScreen.svelte";
	import { pageXPadding } from "$stores/layoutStore";

	let isOnScreen:boolean;
	$: isOnScreen = false;

	// import video
	// import poster from "$lib/assets/billboard-placeholder.webp"
	import mobile_background from "$assets/billboard-mobile-placeholder.webp"
	// cloudinary version of poster
	const cloudinary_poster = "https://res.cloudinary.com/dn0pqjjbq/image/upload/f_auto,q_auto/v1682537360/billboard-placeholder_blscuh.webp"

	// cloudinary - forest floor


	// stores
	import { width } from "$stores/windowStore";

		// "https://res.cloudinary.com/dn0pqjjbq/video/upload/ac_none/v1681954899/pexels-kelly-2711116-2560x1440-24fps_wimoq0.mp4";




</script>

<template lang="pug">
	//- Billboard
	.relative.w-full.flex.overflow-hidden.text-white(
		class="min-h-[667px] h-screen max-h-[915px] sm:h-screen sm:max-h-[860px] md:max-h-[900px] lg:h-[90vh] lg:min-h-[720px] lg:max-h-[860px] xl:min-h-[800px] xl:max-h-[1040px]")

		//- mobile image background -- disappears at lg breakpoint
		.absolute.inset-0.bg-penn(class="md:hidden")
			//-picture.w-full.h-full.flex
				//source(srcset="/images/billboard-mobile-placeholder.avif", type="image/avif")
				//source(srcset="/images/billboard-mobile-placeholder.webp", type="image/webp")
				img.object-cover.min-w-full.min-h-full(loading="eager" src!="{mobile_background}", alt="aerial view of mist rising from forest and lake")

		//- video background -- appears at lg breakpoint
		// tool: child component who job is to report whether or not the parent is on screen
		ParentIsOnScreen(
		on:isOnScreenTestResults!="{ (e) => {isOnScreen = e.detail} }",
		tolerance!="{ 0.25 }")

		//- video background -- appears at md breakpoint and when on-screen
		+if('$width > 767.99 && isOnScreen')
			.hidden.absolute.inset-0.z-0(class="md:flex" transition:fade)
				//- video background
				.flex.w-full.h-full.justify-center.items-center
					.bg-penn.aspect-video(class="min-h-full")
						//- Vimeo Video Player
						iframe.min-w-full.min-h-full.object-cover(class="w-auto" src="https://player.vimeo.com/video/826306957?autoplay=1&background=1&muted=1#t=1.8s" width="auto" height="100%" loading="eager" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="opacity:100; transition: opacity .25s ease-in-out;")
						//-+key('videoIndex')
							video.min-w-full.min-h-full.object-cover(
								class=""
								autoplay
								loop
								controls
								name="media",
								poster!="{poster}")
								source(
									src!="{video}",
									type="video/mp4")
			//- video overlay
			.absolute.inset-0.pointer-events-none.z-0(
				class="bg-gradient-to-b from-penn via-penn/60 to-penn/40 mix-blend-darken")

		//- billboard -- headline & text
		.absolute.inset-0.flex.z-20.grid.place-content-start(class!=" { $pageXPadding } pt-20 ").pointer-events-none
			.mt-2.flex.flex-col.justify-between.h-full(class="lg:max-w-lg lg:pb-4 lg:pt-0 bg-penn-800/0 backdrop-blur")
				h1.mb-3.w-full(class="leading-tight text-32 sm:text-36 lg:mb-6 xl:text-[2.8vw] font-medium") Meet Your Climate Commitments.

				p.hidden.text-16.leading-relaxed.opacity-90(class="sm:block sm:text-18 sm:pr-12 lg:text-16")
				//| At Verde Climate Solutions, we provide carbon inventory management with high quality projects enabling organizations to meet their sustainability goals.
				| We help you take climate action to meet your corporate sustainability goals through carbon inventory management leveraging high quality carbon credits.

		//- doors
		.absolute.px-4.pb-16.inset-0.grid.grid-cols-1.gap-y-4.pointer-events-none.place-content-end.place-items-center(
			class="sm:absolute sm:px-8 mb-8 sm:gap-6 md:mb-16 md:grid-cols-2 lg:mb-0 lg:gap-10 lg:px-40 lg:pb-24 xl:grid-cols-4"
			)
			BillboardCard(href="/#purchasing-carbon-credits" classes="xl:col-span-2")
				svelte:fragment(slot="category") Carbon Credits
				svelte:fragment(slot="heading") Take action&nbsp;
				svelte:fragment(slot="text") Get help sourcing high quality credits and other offsets that meet your carbon-reduction goals
				svelte:fragment(slot="link") Learn more

				//- mobile
				svelte:fragment(slot="mobile-heading") Take Action
				svelte:fragment(slot="mobile-text") Get high quality credits &amp; other offsets that meet your carbon-reduction goals
				svelte:fragment(slot="mobile-link") Find Carbon Credits

			BillboardCard(href="/#marketing-carbon-credits" classes="xl:col-span-2")

				//- beyond mobile
				svelte:fragment(slot="category") Project Developers
				svelte:fragment(slot="heading") Get started
				svelte:fragment(slot="text") Turn your renewable energy, carbon sequestration, or other qualified projects into income via carbon credits.
				svelte:fragment(slot="link") Learn more

				//- mobile
				svelte:fragment(slot="mobile-heading") Project Owners
				svelte:fragment(slot="mobile-text") Turn your renewable energy, sequestration, or other project into carbon credits.
				svelte:fragment(slot="mobile-link") Create Carbon Credits



</template>

<style>

</style>
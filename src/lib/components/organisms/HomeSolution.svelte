<!--
@component
Here's some documentation for this component.
-->

<script lang='ts'>
// animation functions
import { fade } from "svelte/transition";

// components
import BrandLeaf from "$atoms/BrandLeaf.svelte";
import BubbleText from "$atoms/BubbleText.svelte";
import BubbleCTA from "$atoms/BubbleCTA.svelte";
import CTABlock from "$atoms/CTABlock.svelte";
import ParentIsOnScreen from "$tools/ParentIsOnScreen.svelte";
import WidgetText from "$atoms/WidgetText.svelte";
import WidgetTitle from "$atoms/WidgetTitle.svelte";
import WidgetTout from "$molecules/WidgetTout.svelte";
import WidgetToutGrid from "$molecules/WidgetToutGrid.svelte";
import WidgetSubtitle from "$atoms/WidgetSubtitle.svelte";

// stores
import { pageXPadding } from "$stores/layoutStore";

// props
export let grid: {heading:string; text:string; link?:string;}[] = [];
export let image = 'https://images.unsplash.com/photo-1538947151057-dfe933d688d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'
export let imageOverlayClasses="bg-penn-800 opacity-80"
export let cta_primary_label = "Contact Us";
export let cta_primary_href = "/contact";
export let cta_secondary_label = "Keep Reading";
export let cta_secondary_href = "/projects";
export let cta_classes = "";
export let grid_block_classes = "";
//export let color_scheme_dark = "true";

// local variables
let isOnScreen: boolean;
$:isOnScreen = false;

// derivative variables
//$: backgroundClasses = color_scheme_dark === "true" ? "bg-gradient-to-br.from-penn-800.to-penn-725" : "bg-[#F5F5F5]";
//$: textClasses = color_scheme_dark === "true" ? "text-neutral-100" : "text-penn-600";
</script>

<template lang='pug'>
section.py-16.relative.max-w-screen.overflow-hidden.relative.flex(
	class!="bg-[#F5F5F5] text-neutral-100 bg-gradient-to-br from-penn-800 to-penn-725 sm:py-12 md:py-16 lg:py-20 md:min-h-[600px] {$pageXPadding}")

		//- child component to report whether or not parent is on screen
		ParentIsOnScreen(
			on:isOnScreenTestResults!="{ (e) => {isOnScreen = e.detail} }",
			tolerance!="{ 0.35 }")

		//- image background
		+if('image')
			.absolute.inset-0.z-10
				picture.h-full.w-full.flex
					img.h-auto.min-w-full.min-h-full(
						role="presentation"
						alt=""
						class="object-cover sm:min-w-full md:translate-y-0 md:absolute md:bottom-0 md:object-fit"
						loading="lazy"
						src!="{image}")
			//- color overlay
			.absolute.inset-0.z-20(
				class!="{imageOverlayClasses}")

		//- content container
		.h-full.z-20

			//- Headings Group
			.grid.place-items-center(class="lg:grid-cols-2 lg:place-items-start")
				.mb-4(class="sm:max-w-sm")


					//- Heading
					.w-full
						.w-full.text-center.leading-none.mb-4(class="lg:text-left")

							WidgetTitle
								slot(name="heading")

							WidgetSubtitle
								span for&nbsp;
								slot(name="audience")

			//- Text Group
			.grid.grid-cols-1.place-items-center.gap-8.mb-2(class="lg:mb-4 lg:place-items-start lg:grid-cols-2 xl:mb-4")
				//- text
				WidgetText(classes="border-t pt-8 lg:pt-6")
					slot(name="text")

				//- cta
				CTABlock(
					classes!="{cta_classes}"
					primary_label!="{cta_primary_label}",
					secondary_label!="{cta_secondary_label}",
					primary_href!="{cta_primary_href}",
					secondary_href!="{cta_secondary_href}"
					)
					svelte:fragment(slot="heading")
						slot(name="cta-heading")
					svelte:fragment(slot="text")
						slot(name="cta-text")


			//- Benefits Grid
			.w-full
				WidgetToutGrid(
					body_classes="",
					heading_classes="",
					icon_classes="text-slimy-200",
					outer_classes!="{grid_block_classes}",
					grid!="{grid}",
				)










</template>
<!--
@component
Widget tout component to nest inside WidgetToutGrid
- heading is H3 tag by default
- icon is 16x16
- text is P tag
props:
-->

<script lang='ts'>
//- components
import WidgetTout from "$molecules/WidgetTout.svelte"

//- props
export let body_classes = ""
export let heading_classes = ""
export let icon_classes = ""
export let outer_classes = ""
export let grid: {[key:string]: string}[] = [{body_text: "", heading_text: "", icon_name: ""}]

// constants
const body_class = `opacity-[85%] text-[1em] leading-normal ${body_classes}`
const heading_class = `mb-2 font-medium text-[1.065em] opacity-[95%] ${heading_classes}`
const icon_class = `mb-4 w-16 h-16 text-current ${icon_classes}`
const outer_class = `w-full h-full pl-8 pr-6 pt-6 pb-4 rounded-lg shadow-sm lg:mb-6 ${outer_classes}`
</script>

<template lang='pug'>
.w-full.grid.grid-cols-1.gap-y-8.gap-x-6.place-items-start(
	class="mb-20 sm:grid-cols-2 md:p-0 md:gap-y-6 md:gap-x-6 lg:grid-cols-2 lg:items-start lg:gap-6 lg:mt-0 xl:justify-center xl:grid-cols-4 2xl:grid-cols-4"
	)
	//- tout
	+each('grid as item, index')
		WidgetTout(
			body!="{{text: item.body_text, classes: body_classes}}",
			heading!="{{text: item.heading_text, tag: 'h3', classes: heading_classes}}",
			icon!="{{name: item.icon_name, classes: icon_classes}}",
			outer!="{{classes: outer_classes}}",
			)

</template>
<!--
@component
Widget tout component to nest inside WidgetToutGrid
- heading is H3 tag by default
- icon is 16x16
- text is P tag
props:
-->

<script lang='ts'>
	// components
	import Icon from "$atoms/Icon.svelte"

	// props
	export let body:{ text: string; classes: string; } = {
		text: "",
		classes: "",
	}
	export let heading: { text: string; tag: string; classes: string; } = {
		text: "",
		tag: "h3",
		classes:"",
	}
	export let icon: { name: string; classes: string } = {
		name: "",
		classes: "",
	}
	export let outer: {[key: string]: string} = {
		classes: ""}


const body_class = `opacity-[85%] text-[1em] leading-normal ${body.classes}`
const heading_class = `mb-2 font-medium text-[1.065em] opacity-[95%] ${heading.classes}`
const icon_class = `mb-4 w-16 h-16 text-current ${icon.classes}`
const outer_class = `w-full h-full pl-8 pr-6 pt-6 pb-4 rounded-lg shadow-sm lg:mb-6 ${outer.classes}`
</script>

<template lang='pug'>
div(class!="{outer_class}")

	//- icon
	div(class!="{icon_class}")
		Icon(icon!="{icon.name}")

	//- heading
	+if('heading.tag')
		svelte:element(
			class!="{heading_class}"
			this!="{heading.tag}") { heading.text }

	//- text
	p(class!="{body_class}") {body.text}

</template>
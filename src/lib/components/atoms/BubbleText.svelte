<!--
@component
Here's some documentation for this component.
-->

<script lang='ts'>
export let circle_classes = "sm:w-48 md:w-40 lg:w-48 xl:w-48 2xl:w-56"
export let heading = ""
export let text = ""
</script>

<template lang='pug'>
.aspect-square.w-56.rounded-full.grid.grid-cols-1.place-items-center.place-content-center.backdrop-blur.border.border-neutral-200.border-opacity-20.shadow-sm(
	class!="md:border-penn-100/60 bg-penn-100/60 md:bg-transparent md:bg-gradient-to-br from-penn-800/5 to-penn-100/5 hover:md:bg-slimy-600/70 hover:border-transparent {circle_classes}")
	//- heading
	.italic.text-center.mb-4.text-17.tracking-widest.font-semibold.px-8.leading-tight(
		class="text-pen-600 sm:text-18 sm:mb-2 md:mb-0 md:text-16 md:group-hover:text-slimy-200 md:text-penn-75 lg:font-medium lg:mb-4 lg:text-17 xl:text-center xl:text-19"
		) {heading}
	//- text
	.text-center(
		class="text-14 text-penn/80 md:text-white/90 md:hidden lg:block xl:text-center px-6 leading-snug"
		) {text}
</template>
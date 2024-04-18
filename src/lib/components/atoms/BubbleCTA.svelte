<!--
@component
Here's some documentation for this component.
-->

<script lang='ts'>
export let bubbleClasses = "md:w-40 lg:w-48 xl:w-48 2xl:w-56"
export let heading = "Meet Your Climate Commitments"
export let cta_text = "Take Action"
export let cta_link = "/contact"

</script>

<template lang='pug'>
.aspect-square.w-56.rounded-full.grid.grid-cols-1.place-items-center.place-content-center.backdrop-blur-lg.pt-0.border.border-neutral-200.border-opacity-20.shadow-sm(class!="bg-white/80 { bubbleClasses } lg:bg-penn-100")
	//- heading
	.italic.text-center.mb-6.text-17.text-penn-600.tracking-widest.font-semibold.px-8(class="group-hover:text-penn-700 md:hidden lg:text-16 lg:block lg:mb-6 xl:text-center xl:text-17 xl:leading-tight") { heading }

	//- large and bigger
	a.text-15.text-penn-600.py-3.px-2.border.border-penn-600.border-1.rounded.leading-none.whitespace-nowrap(
		class="md:hidden lg:inline-block lg:text-15"
		href!="{cta_link}") {cta_text}

	//- medium
	a.text-15.text-penn-600.py-3.px-2.border.border-penn-600.border-1.rounded.leading-none.whitespace-nowrap(
		class="md:text-14 lg:hidden"
		href!="{cta_link}") Take Action
</template>
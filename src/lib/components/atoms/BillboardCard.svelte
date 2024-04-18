<!--
@component
Here's some documentation for this component.
-->

<script lang='ts'>
	export let href="/#"
	export let classes=""
</script>

<template lang='pug'>
.group.h-full.w-full.px-4.py-3.rounded-lg.pointer-events-auto.relative(
	class="border border-1 border-penn-100 p-6 bg-penn/30 hover:bg-penn-400/30 hover:border-penn-600/30 lg:px-6 lg:py-6 {classes}")

	//- category tag ( hidden on mobile)
	.hidden.mb-3.px-2.py-1.rounded-md.text-penn.text-center.text-12(class="group-hover:bg-penn-75 bg-penn-100 sm:inline-block lg:mb-5 xl:text-[12.5px] 2xl:text-13")
		slot(name="category")

	//- [mobile] heading
	.block.leading-none.mb-1.py-1.rounded-md.text-white.text-24(class="sm:mb-3 sm:px-2 sm:hidden")
		slot(name="mobile-heading")

	//- [mobile] text
	.text-17.mb-5.opacity-90.max-w-sm(class="sm:hidden")
		slot(name="mobile-text")

	//- heading
	.hidden.text-20.mb-3.text-white.leading-tight(class="sm:block group-hover:text-white lg:text-20")
		slot(name="heading")

	//- text
	.hidden.text-15.mb-4.opacity-90(class="sm:block xl:max-w-sm")
		slot(name="text")

	//- card link
	a.block.text-15.text-penn-100.font-medium(class="group-hover:text-penn-75 hover:!text-slimy-300" href!="{href}")
		span.hidden(class="sm:inline-block")
			slot(name="link")

		//- mobile button
		span.inline-block.px-2.py-1.mb-2.outline.rounded(class="text-14 outline-[1px] sm:hidden")
			slot(name="mobile-link")



</template>
<!--
@component
Here's some documentation for this component.
-->

<script lang='ts'>
	// components
	import BrandLeaf from "$atoms/BrandLeaf.svelte"
	export let primary_label = "Contact Us"
	export let primary_href = "/contact"
	export let secondary_label = "Keep Reading"
	export let secondary_href = "/projects"
	export let classes = ""
</script>

<template lang='pug'>
.relative.mb-24.w-full.border.rounded-lg.py-8.px-4(
	class="sm:flex sm:pr-2 sm:pl-6 border-neutral-100/60 lg:mb-0 lg:pl-8 lg:pr-4 xl:pr-6 xl:pl-10 {classes}")

	//- Graphic
	.flex.justify-center.w-full.flex-none(class="mb-6 sm:mb-0 sm:w-auto sm:order-2")
		.w-20(class="sm:w-24 md:w-36 lg:w-20")
			BrandLeaf

	//- CTA Content
	.rounded-lg.text-neutral-100.w-full.text-center(class="sm:block sm:text-left ")
		//- heading
		h3.mb-2.text-18.text-slimy-300.font-medium.max-w-xs
			slot(name="heading")

		//- text
		p.mb-8.opacity-90(class="lg:mb-6 text-[0.9em] max-w-xs")
			slot(name="text")

		//- links
		div(class="sm:flex sm:items-end")

			//- primary link
			a.mb-4.block.text-15.text-slimy-900.py-3.px-3.border-0.border-penn-600.border-1.rounded.leading-none.whitespace-nowrap(
				class="sm:inline-block sm:mb-0 md:text-14 bg-slimy-300/90 opacity-90 hover:opacity-100 transition-opacity"
				href!="{primary_href}"
				title!="{primary_label}"
				)
				| {primary_label}

			//- secondary link
			//-a.text-center.block.mb-2.opacity-80.underline.underline-offset-4.tracking-wider(
				title="go to {secondary_label}"
				class="sm:text-left text-[.825em] sm:ml-4 hover:text-slimy-200 hover:opacity-100"
				href!="{secondary_href}")
					| {secondary_label}
</template>
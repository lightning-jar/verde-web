<!--
@component
Here's some documentation for this component.
-->

<script lang='ts'>

// components
import WidgetSubheading from '$atoms/WidgetSubheading.svelte';
import WidgetText from '$atoms/WidgetText.svelte';

// props
export let backgroundClasses = "";
export let date: Date | null = null;
export let source = ""

</script>

<template lang='pug'>
div.w-full.h-full.relative
	//- inner
	div.w-full.h-full.rounded-lg.overflow-hidden.grid.grid-cols-1.place-content-start(class!="pb-16 bg-white/5 {backgroundClasses}")

		//-image
		slot(name="image")

		//- text content
		.px-6.pt-6.pb-6

			//- date & source
			.flex.mb-3.items-center
				//- date
				+if('date')
					.opacity-70.tracking-wider.text-13 {date.toLocaleDateString()}
				+if('date && source')
					.mx-2.opacity-20 /
				//- source
				+if('source')
					.text-14.opacity-70.font-medium.grow-0.w-full { source }

			//- headline
			+if('$$slots.headline')
				.grow-0
					slot(name="headline")

			//- excerpt
			+if('$$slots.excerpt')
				.opacity-80.pt-6.mt-6.leading-6.border-t(class="border-white/10")
					p
						slot(name="excerpt")

		//- link
		+if('$$slots.link')
			.absolute.grow-2.bottom-0.left-0.pb-8.pl-6
				slot(name="link")



</template>
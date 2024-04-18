<!--
@component
Here's some documentation for this component.
-->

<script lang='ts'>
	import { pageXPadding } from "$stores/layoutStore";
</script>

<template lang='pug'>
	.flex.w-full.h-screen(class!="{$pageXPadding}")
		div.pt-8
			.text-32.mb-4 Coming Soon
			.text-16.opacity-90 This Page is currently under construction

			//- go back
			.mt-12
				a.text-14.px-3.py-2.border.border-neutral-200.rounded-lg(href="/") Back to home
</template>
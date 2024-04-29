<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	let { classes }: { classes: string } = $props();
</script>

<template lang="pug">
	h2(
		class=`
			font-medium
			inline-block
			leading-tight
			mb-4
			text-28
			text-center
			sm:mb-4
			sm:text-34
			md:text-40
			lg:text-36
			lg:text-left
			xl:text-40
			{classes}`)
		slot

	|</template>

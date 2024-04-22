<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	let { classes } = $props();
</script>

<template lang="pug">
	div(
		class=`
			italic
			text-[.95em]
			text-slimy-400
			dark:text-slimy-200
			lg:text-[.95em] {classes}`)
		slot

	|</template>

<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	// props
	export let classes = "";
</script>

<template lang="pug">
	.w-full.py-8.relative.overflow-hidden.max-w-screen(
		class!="page-x-padding { classes }")
		slot

	|</template>

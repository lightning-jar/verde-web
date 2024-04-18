<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	// settings
	import { pageXPadding } from "$stores/layoutStore";
	// props
	export let classes = "";
</script>

<template lang="pug">
	.w-full.py-8.relative.overflow-hidden.max-w-screen(class!="{ $pageXPadding } { classes }")
		slot

</template>

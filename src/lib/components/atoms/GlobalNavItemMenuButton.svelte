<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	export let classes = "";
</script>

<template lang="pug">
	button.block(
		class!="{ classes }",
		aria-expanded="false",
		data-style="global-nav-item",
		type!="button")
		slot
</template>

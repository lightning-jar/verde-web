<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	interface Props {
		classes?: string;
		url: string;
		label: string;
		title?: string;
		rel?: string | null;
		target?: string | null;
	}
	let {
		classes = "",
		url = "/",
		label = "",
		title = "",
		rel = null,
		target = null,
	} = $props();
</script>

<template lang="pug">
	a(
		class=`
		block
		border
		border-neutral-100
		border-opacity-40
		px-2
		py-2
		rounded-md
		text-13`,
		class!="{ classes }",
		href!="{ url }",
		rel!="{ rel }",
		title!="{ title }") { label }
		slot
		|</template>

<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	import type { NavDataItem } from "$types/navTypes";

	export let navItem: NavDataItem = { label: "" };

	let label: string;
	$: label = navItem.label ? navItem.label : "";

	let href: string;
	$: href = navItem.relativePath
		? navItem.relativePath
		: navItem.externalUrl
		? navItem.externalUrl
		: "#";
</script>

<template lang="pug">
	a(
		data-style="global-nav-item",
		href!="{ href }") {  label  }
</template>

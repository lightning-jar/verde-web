<!--
@component
For adding action button to the header.
-->
<script lang="ts">
	//- import types
	import type { NavDataItem } from "$types/navTypes";

	//- props
	export let navItem: NavDataItem = {
		label: "",
		relativePath: "",
		externalUrl: "",
		type: "",
	};

	const link = navItem.relativePath || navItem.externalUrl || "#";
</script>

<template lang="pug">
	.group.block.relative
		//- container
		a.ml-10.px-3(
			class="rounded py-[0px] text-[.9em] outline outline-1 outline-white/60 outline-offset-4 hover:outline-slimy-400",
			data-style="global-nav-item",
			href!="{ link }") {  navItem.label  }
</template>

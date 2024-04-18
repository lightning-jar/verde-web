<script lang="ts">
	// components
	import { IconArrowRight } from "lj-svelte-ui";

	// store
	import { visiblePanel } from "$stores/navStore";

	// types
	import type { NavDataItem } from "lj-svelte-ui";

	// props
	export let flyout: NavDataItem;

	// local functions
	function closeFlyout() {
		// if the flyout does not have a parent menu, then set visiblePanel to "primary"
		console.log("clicked");
		$visiblePanel = flyout.parentMenu ?? "primary";
	}
</script>

<template lang="pug">
	//- back button

	button.text-17.pointer-events-auto.flex.cursor-pointer.items-center.justify-center.rounded-sm.py-2.pr-3.pl-2.outline(
		class="outline-richBlack/40 border-b border-transparent focus:border-slate-600",
		data-role="back",
		on:click!="{ closeFlyout }",
		title!="back to {flyout.parentMenu ?? 'main menu'}",
		type="button")
		//- back arrow
		.h-4.w-4.rotate-180.fill-current
			IconArrowRight
		//- button label
		//-span &nbsp;
</template>

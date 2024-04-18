<script lang="ts">
	// components
	import { IconClose } from "lj-svelte-ui";
	// store
	import { mobileMenuOpen, visiblePanel } from "$stores/navStore";

	// types
	import type { NavDataItem } from "lj-svelte-ui";

	// props
	//export let flyout: NavDataItem;

	// local functions
	function closeFlyout() {
		// if the flyout does not have a parent menu, then set visiblePanel to "primary"
		$visiblePanel = "primary";
		$mobileMenuOpen = false;
	}
</script>

<template lang="pug">
	//- back button

	button.text-16.flex.cursor-pointer.items-center.justify-center.rounded-sm.px-3.py-1.outline(
		class="outline-richBlack/60 border-b border-transparent focus:border-slate-600",
		data-role="close",
		on:click!="{ closeFlyout }",
		role="button",
		title="close nav menu",
		type="button")
		//- Icon
		.pointer-events-none.mr-2.h-3.w-3.rotate-180.fill-current
			//- icon close
			.grid.h-full.w-full.grid-cols-1.place-content-center.place-items-center
				IconClose

		//- button label
		span Close
</template>

<script lang="ts">
	// components
	//import { IconArrowRight, MobileMenuBack, MobileMenuFlyoutItem } from "ui";
	import { IconArrowRight } from "lj-svelte-ui";
	import MobileMenuBack from "$molecules/MobileMenuBack.svelte";
	import MobileMenuFlyoutItem from "$atoms/MobileMenuFlyoutItem.svelte";
	import MobileMenuItem from "$atoms/MobileMenuItem.svelte";

	// stores
	import { visiblePanel, navContent } from "$stores/navStore";

	// types
	import type { NavDataItem } from "lj-svelte-ui";

	// helper functions
	import { slugify } from "lj-svelte-ui";
	import { fly } from "svelte/transition";

	// props
	export let flyout: NavDataItem;
	// export let flyoutIndex = 0;
	// export let hierarchyLevel = 1;
	//export let menuHierarchyLevel = 0;

	const flyouts: NavDataItem[] = $navContent;
	const { label } = flyout;
	const slug = slugify(label);

	let isOpen = false;
	let open: string | null = null;
	let item: NavDataItem;

	$: {
		if ($visiblePanel == label) {
			isOpen = true;
			open = "open";
		} else {
			isOpen = false;
			open = null;
		}
	}
</script>

<template lang="pug">
	//- if nav item doesn't have a link && is the active flyout
	+if('$visiblePanel == label')
		nav.absolute.inset-0.grid.grid-cols-1.place-content-start.place-items-center.transition-transform(
			class="translate-x-full open:translate-x-0",
			id!="{ slug + '-mobile-flyout' }",
			open!="{ open }")
			//- header
			.text-20.bg-richBlack.relative.mb-4.flex.w-full.items-center.justify-between.bg-opacity-5.px-6.py-4
				//-  back button
				.text-17.pointer-event-auto
					MobileMenuBack({flyout})
				//- heading
				.pointer-events-none.absolute.inset-0.grid.grid-cols-1.place-content-center.place-items-center
					.text-22.italic.text-current.opacity-80 {  flyout.mobileLabel ?? flyout.label ?? ""  }

			//- flyout menu items
			div
				//-iterate menu items in the flyout menu
				+each('flyout.items as item')
					+if('item')
						MobileMenuItem(navMenuItem!="{ item }")
</template>

<script lang="ts">
	// components
	// import { IconChevronDown, NavMenuDivider, NavMenuItem } from "ui";
	import NavFlyoutMenu from "$molecules/NavFlyoutMenu.svelte";
	import IconChevronDown from "$atoms/IconChevronDown.svelte";
	import NavMenuDivider from "$atoms/NavMenuDivider.svelte";
	import NavMenuItem from "$atoms/NavMenuItem.svelte";

	// types
	import type { NavDataItem } from "$types/navTypes.js";

	// props
	export let buttonClasses = "";
	export let navItem: NavDataItem = {
		externalUrl: "",
		items: [],
		label: "",
		relativePath: "",
		type: "",
	};

	// variables
	$: label = navItem.label;
	$: items = navItem.items;
</script>

<template lang="pug">
	.relative(class="group/flyout")
		//- nav menu button
		button.ml-0.flex.w-full.items-center.justify-between.whitespace-nowrap.opacity-80.outline-none.transition-opacity(
			class!="{buttonClasses} underline-offset-4 focus:underline group-hover/flyout:opacity-100")
			// link label
			.peer {  navItem.label  }
			.flex.h-full.flex-grow.items-center.justify-start.pl-2(
				class="peer group-hover/flyout:opacity-100 peer-hover:opacity-100")
				.text-accent.h-4.w-4.-rotate-90
					IconChevronDown

		//nav menu flyout -- primary
		.pointer-events-none.absolute.top-0.z-10.opacity-0.transition-opacity(
			class="min-w-[14rem] group-focus-within/flyout:opacity-100 group-hover/flyout:pointer-events-auto group-hover/flyout:opacity-100 sm:px-0 lg:left-0 lg:ml-0 lg:translate-x-[95%]")
			.relative.grid.grid-cols-1.gap-2.rounded-lg.bg-white.px-2.py-2.shadow-lg.ring-1.ring-black.ring-opacity-5(
				class="sm:gap-0 sm:px-0 sm:pt-2 sm:pb-4 lg:gap-1")
				+each('navItem.items as navItem')
					+if('navItem.type == "divider"')
						NavMenuDivider
							NavFlyoutMenu(
								buttonClasses="text-midnight",
								{navItem})
						+else
							NavMenuItem(
								classes="nav-menu-item",
								{navItem})
</template>

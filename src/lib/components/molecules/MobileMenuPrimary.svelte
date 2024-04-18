<script lang="ts">
	// components
	import MobileMenuItem from "$atoms/MobileMenuItem.svelte";
	import MobileMenuClose from "$molecules/MobileMenuClose.svelte";

	// stores
	import { navContent } from "$stores/navStore";

	// types
	import type { NavDataItem } from "lj-svelte-ui";

	// props
	export let primaryMobileNav: HTMLElement | null = null;

	// variables
	let navMenuItem: NavDataItem;
</script>

<template lang="pug">
	nav.inset-0.grid.w-full.grid-cols-1.place-content-start.place-items-center.transition-transform(
		bind:this!="{ primaryMobileNav }",
		id="primaryMobileNav")
		//- header
		.text-20.bg-richBlack.relative.mb-4.flex.w-full.items-center.justify-between.bg-opacity-5.px-6.py-4
			//-  back button
			.w-full.text-center
				//div Close Menu
				.text-17.opacity-0
					MobileMenuClose
			//- heading
			.pointer-events-none.absolute.inset-0.grid.grid-cols-1.place-content-center.place-items-center
				.text-22.italic.text-current.opacity-80 Main Menu

		//- menu items
		div
			+each('$navContent as navMenuItem, index')
				MobileMenuItem(navMenuItem!="{ navMenuItem }")
</template>

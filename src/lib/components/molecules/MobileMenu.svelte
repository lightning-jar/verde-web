<!--
@component
Here's some documentation for this component.
-->
<script lang="ts">
	// transitions
	import { fade, fly, crossfade } from "svelte/transition";

	// components
	import Header from "$organisms/Header.svelte";
	import MobileMenuPrimary from "$molecules/MobileMenuPrimary.svelte";
	import MobileMenuFlyout from "$molecules/MobileMenuFlyout.svelte";

	// stores
	import { mobileMenuOpen, visiblePanel } from "$stores/navStore";
	import { navContent } from "$stores/navStore";
	import { navHeightClasses } from "$stores/navSettings";

	// refs
	let mobileNav: HTMLDivElement;
	let primaryMobileNav: HTMLDivElement;

	// types
	import type { Flyout } from "lj-svelte-ui";
	import type { NavDataItem } from "lj-svelte-ui";

	// variables
	let flyout: Flyout;
	let flyouts: Record<string, Flyout>;
	let item: NavDataItem;
	let subItem: NavDataItem;
</script>

<template lang="pug">
	//- Header
	#mobile-nav.text-24.group.pointer-events-none.fixed.inset-0.h-screen.origin-top-right.transform.opacity-0.transition.transition-opacity(
		class="open:opacity-100 lg:hidden",
		bind:this!="{ mobileNav }",
		open!="{ ($mobileMenuOpen) ? true : null }")
		//- spacer element to keep room for header
		.pointer-events-none.w-full.bg-transparent(class!="{ $navHeightClasses }")

		//- inner
		.relative.h-full.w-full.bg-neutral-200.pt-0.pb-6(
			class="group-open:pointer-events-auto")
			//- primary menu
			+if('$visiblePanel == "primary"')
				div
					MobileMenuPrimary(bind:primaryMobileNav!="{ primaryMobileNav }")
					//MobileMenuFlyout(flyout!="{ {label: "Main Menu", items: $navContent }}")

			//- flyouts
			+each('$navContent as item, index')
				// hierarchy 1 flyouts
				+if('item && item.type == "menu" && $visiblePanel == item.label')
					div
						MobileMenuFlyout(flyout!="{ item }")
					// hierarchy 2 flyouts
					+elseif('item.items && item.items.length > 0')
						+each('item.items as subItem, subIndex')
							+if('subItem && subItem.type == "flyout" && $visiblePanel == subItem.label')
								div
									MobileMenuFlyout(flyout!="{ subItem }")
</template>

<script lang="ts">
	// components
	import { IconArrowRight } from "lj-svelte-ui";

	// stores
	import { navContent, visiblePanel } from "$stores/navStore";

	// types
	import type { NavDataItem } from "lj-svelte-ui";

	// helper functions
	import { slugify } from "lj-svelte-ui";

	// dispatcher
	import { createEventDispatcher } from "svelte";
	const dispatch = createEventDispatcher();

	// props
	export let navMenuItem: NavDataItem;

	let link = "";
	if (navMenuItem.relativePath) link = "/" + navMenuItem.relativePath;
	else if (navMenuItem.externalUrl) link = "/" + navMenuItem.externalUrl;
	else link = "/#";

	// local functions
	const navItemClick = () => {
		// if item opens a flyout
		if (navMenuItem.type == "menu" || navMenuItem.type == "flyout") {
			$visiblePanel = navMenuItem.label;
		}
		// if item is a link
		else if (link) {
			//$visiblePanel = "";
			// go to link
		}
	};

	$: slug =
		navMenuItem.mobileLink ||
		navMenuItem.externalUrl ||
		navMenuItem.relativePath ||
		"";
</script>

<template lang="pug">
	.mb-0.flex.items-center.justify-center
		//- hidden
		+if('navMenuItem.mobileHide')
			//- do nothing

			//- divider
			+elseif('navMenuItem.type == "divider"')
				.h-0.opacity-40(class="my-4 w-[80vw] bg-slate-800 pt-[1px]")

			//- is a link
			+elseif('((navMenuItem.externalUrl || navMenuItem.relativePath) && (navMenuItem.type != "flyout")) || navMenuItem.mobileLink ')
				a.flex.items-center.justify-center(
					class="border-b border-transparent !outline-none focus:border-slate-600",
					data-sveltekit-reload,
					href!="{ slug }",
					title!="{ navMenuItem.title }")
					.pointer-events-none.p-3.text-center {  (navMenuItem.mobileLabel) ? navMenuItem.mobileLabel : navMenuItem.label  }
					//- arrow
					.pointer-events-none.ml-3.h-4.w-4
						IconArrowRight
			//- is a menu
			+elseif('navMenuItem.type == "menu" || navMenuItem.type == "flyout"')
				button.flex.items-center.justify-center(
					class="border-b border-transparent !outline-none focus:border-slate-600",
					on:click!="{ navItemClick }",
					type="button")
					.pointer-events-none.p-3.text-center {  (navMenuItem.mobileLabel) ? navMenuItem.mobileLabel : navMenuItem.label  }

					// if item opens a flyout menu
					.pointer-events-none.ml-3.h-4.w-4
						IconArrowRight
</template>

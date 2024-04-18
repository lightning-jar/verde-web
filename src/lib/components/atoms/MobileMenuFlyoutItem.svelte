<script lang="ts">
	// components
	import MobileMenuFlyout from "$molecules/MobileMenuFlyout.svelte";

	// types
	import type { NavDataItem } from "lj-svelte-ui";

	// helper function
	import { slugify } from "lj-svelte-ui";

	// props
	export let item: NavDataItem;

	// variables
	const link = item.externalUrl || item.relativePath;

	// $: {
	// 	if (slugify(item.label) == "voice-security-threats") {
	// 	}
	// }
</script>

<template lang="pug">
	//- heading
	+if('item.type == "heading"')
		.text-spanishRed.mb-2.mt-4.text-center.text-3xl
			| {  item.label.replace(/(→|←)/g, '')  }

		//- spacer
		+elseif('item.type == "spacer"')
			.pointer-events-none.mt-4.w-full

		//- link item
		+elseif('item.type != "divider" && item.type != "spacer" && item.type != "flyout"')
			.mb-0.flex.items-center.justify-center
				a.p-3.text-center.text-3xl(
					class="border-b border-transparent !outline-none focus:border-slate-600",
					href!="{ link }")
					| {  item.label  }

		//- flyout
		+elseif('item.type == "flyout"')
			MobileMenuFlyout(flyout!="{ item }")
</template>

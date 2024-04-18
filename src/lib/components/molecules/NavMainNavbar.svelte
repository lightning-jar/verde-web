<script lang="ts">
	// components
	import GlobalNavButton from "$atoms/GlobalNavButton.svelte";
	import GlobalNavItemLink from "$atoms/GlobalNavItemLink.svelte";
	import GlobalNavPullDownMenu from "$molecules/GlobalNavPullDownMenu.svelte";

	// types
	import type { NavDataItem } from "$types/navTypes";

	// props
	export let navContent: NavDataItem[] = [];
	export let mainNav: HTMLElement;
	export let classes = "";

	// variables
	let navItem: NavDataItem;
</script>

<template lang="pug">
	nav#mainNav.hidden(
		class!="text-16 xl:text-16 items-center whitespace-nowrap lg:flex xl:min-h-[3.5rem] gap-x-8 {classes}",
		bind:this!="{ mainNav }")
		+each('navContent as navItem')
			+if('navItem.type.toLowerCase() == "menu"')
				GlobalNavPullDownMenu({navItem})
				+elseif('navItem.type.toLowerCase() == "button"')
					GlobalNavButton({navItem})
				+else
					GlobalNavItemLink({navItem})
</template>

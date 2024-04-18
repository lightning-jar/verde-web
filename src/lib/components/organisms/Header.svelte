<!--
@component
Here's some documentation for this component.
-->
<script lang="ts">
	// add event listener onLoad

	// components and types from lj-svelte-ui
	import { type NavDataItem } from "$types/navTypes";
	import HamburgerButton from "$atoms/HamburgerButton.svelte";
	import NavMainNavbar from "$molecules/NavMainNavbar.svelte";

	//- stores
	import { pageXPadding } from "$stores/layoutStore";

	//- components from verde-ui
	import { LogoVerde } from "verde-ui";

	//- local components
	import MobileMenu from "$molecules/MobileMenu.svelte";


	// stores
	import { mobileMenuOpen, navContent, visiblePanel } from "$stores/navStore";
	import { navHeightClasses } from "$stores/navSettings";

	// import functions
	import { inertElements, unInertElements } from "lj-svelte-ui";

	// refs
	let hamburger: HTMLButtonElement;
	let mobileNav: HTMLDivElement;
	let globalNav: HTMLHeadElement;
	let allMobileNavLinks: HTMLAnchorElement[] = [];
	let allMainNavLinks: HTMLAnchorElement[] = [];

	// local functions
	function closeMobileMenu() {
		const svelteDiv: HTMLDivElement | null = document.querySelector("#svelte");
		$mobileMenuOpen = false;
		$visiblePanel = "primary";
		document.body.style.overflowY = "scroll";
		document.documentElement.style.overflowY = "scroll";
		if (svelteDiv) svelteDiv.style.overflowY = "scroll";
		if (svelteDiv) svelteDiv.style.position = "relative";
		//inertElements(allMobileNavLinks);
	}
	function openMobileMenu() {
		const svelteDiv: HTMLDivElement | null = document.querySelector("#svelte");
		$mobileMenuOpen = true;
		$visiblePanel = "primary";
		document.body.style.overflowY = "hidden";
		document.documentElement.style.overflowY = "hidden";
		if (svelteDiv) svelteDiv.style.overflowY = "hidden";
		if (svelteDiv) svelteDiv.style.position = "fixed";
		//unInertElements(allMobileNavLinks);
	}
	function hamburgerClick(e: MouseEvent) {
		$mobileMenuOpen != true ? openMobileMenu() : closeMobileMenu();
	}
</script>

<template lang="pug">
	.z-20.text-white.border-b.pb-2(class="lg:pb-4 border-white/40")
		//- Desktop
		div(class!="{ $pageXPadding }")
			.flex.items-end.justify-between.relative(
				class!="{$navHeightClasses} md:space-x-10 -translate-y-1")
				//- Logo Block
				a.flex.items-center.h-auto(
					class="w-24 sm:w-[100px] md:w-[110px] lg:w-[100px]",
					href="/")
					LogoVerde

				//- //- Main Nav
				.mb-0
					NavMainNavbar(
						classes!="!items-end",
						navContent!="{ $navContent }")

				//- Hamburger
				//-HamburgerButton(
					bind:hamburger!="{ hamburger }",
					mobileMenuOpen!="{ $mobileMenuOpen }",
					on:hamburgerClick!="{ hamburgerClick }")

	//- Mobile Menu
	MobileMenu
</template>

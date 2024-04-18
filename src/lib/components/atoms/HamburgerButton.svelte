<script lang="ts">
	// svelte functions
	import { createEventDispatcher } from "svelte";

	// props
	export let mobileMenuOpen = false;
	let hamburger: HTMLButtonElement;

	// variables
	const dispatch = createEventDispatcher();

	// change selected value
	function hamburgerClick() {
		dispatch("hamburgerClick", {}, {});
	}
</script>

<template lang="pug">
	.flex.items-center(class="lg:hidden")
		button#hamburger.group.my-1.inline-flex.items-center.justify-center.rounded-md.bg-transparent.p-2.text-neutral-100(
			active!="{ mobileMenuOpen }",
			aria-expanded!="{ (mobileMenuOpen == true) ? true : false }",
			bind:this!="{ hamburger }",
			class="bg-transparent !outline-none hover:bg-white hover:bg-opacity-5 hover:text-white focus:bg-white focus:bg-opacity-0",
			on:click!="{ hamburgerClick }",
			type="button")
			span.sr-only Open menu
			.pointer-events-none
				.mb-2.h-0.w-8.origin-center.border-b.border-white.transition-transform(
					class!=["{(mobileMenuOpen) ? 'rotate-45 translate-y-1' : ''}","group-focus:border-accent"])
				.h-0.w-8.origin-center.border-b.border-white.transition-transform(
					class!=["{(mobileMenuOpen) ? '-rotate-45 -translate-y-1' : ''}","group-focus:border-accent"])
</template>

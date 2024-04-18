<!--
@component
This sweet little component is used to tell if it's parent component is on screen.
* prop tolerance: number (0-1) - how much of the parent element must be on screen to trigger the event
* It doesn't add anything visible to the page
* Component uses the intersectionObserver API (fast and lightweight)
-->
<script lang="ts">
	// props
	export let tolerance = 1; // 1 == 100% of the target element must be visible

	// dispatch
	import { createEventDispatcher } from "svelte";
	const dispatch = createEventDispatcher();

	// imports from svelte
	import { onMount } from "svelte";

	// refs
	let container: HTMLDivElement;
	let parentElement: HTMLElement | null;

	// variables
	let parentIsOnScreen = false;
	let parentWasOnScreen = false;

	// observer options
	const options = {
		root: null,
		rootMargin: "0px",
		threshold: tolerance,
	};

	// observer callback function
	function callback(entries: IntersectionObserverEntry[]) {
		// if there is a change in value, and it does not match current parentIsOnScreen value
		// then update parentIsOnScreen and send results to parent
		let result: boolean;
		entries[0].isIntersecting ? (result = true) : (result = false);
		1;
		if (parentIsOnScreen != result) {
			parentWasOnScreen = parentIsOnScreen;
			parentIsOnScreen = result;
			sendOnScreenTestResults();
		}
	}
	// function to sent test results to parent
	function sendOnScreenTestResults() {
		dispatch("isOnScreenTestResults", parentIsOnScreen);
	}

	onMount(() => {
		// identify parent element
		parentElement = container && container.parentElement ? container.parentElement : null;
		// create observer
		let observer = new IntersectionObserver(callback, options);
		// observe parent
		if (parentElement) observer.observe(parentElement);
	});
</script>

<template lang="pug">
	.pointer-events-none.h-0.w-0(
		bind:this!="{ container }",
		data-tool="onScreenTest"
	)
</template>

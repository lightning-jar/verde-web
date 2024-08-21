<!--
@component
This sweet little component is used to tell if it's parent component is on screen.
* prop tolerance: number (0-1) - how much of the parent element must be on screen to trigger the event
* It doesn't add anything visible to the page
* Component uses the intersectionObserver API (fast and lightweight)
* parent component must bind to the isOnScreen prop to get the results of the test e.g bind:isOnScreen="{isOnScreen}"
-->
<script lang="ts">
	// import onMount from Svelte
	import { onMount } from "svelte";

	// props
	let { classes = "", tolerance = 1, isOnScreen = $bindable(false) } = $props();

	// refs
	let container: HTMLDivElement;

	function watchForOnScreenStateChange(container: HTMLDivElement) {
		// get the parent element
		const parent = container.parentElement as HTMLElement | null;
		if (!parent) return;

		// observer callback function
		function handleIntersect(
			entries: IntersectionObserverEntry[],
			observer: IntersectionObserver,
		) {
			const status = entries[0].isIntersecting;
			if (isOnScreen !== status) {
				isOnScreen = status;
			}
		}
		// observer
		const observer = new IntersectionObserver(handleIntersect, {
			threshold: tolerance,
		});

		observer.observe(parent);
	}

	onMount(() => {
		if (container) watchForOnScreenStateChange(container);
	});
</script>

<div
	class="absolute pointer-events-none h-0 w-0 top-0 bottom-0 {classes}"
	bind:this={container}></div>

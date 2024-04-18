<script lang="ts">
	//- stores
	import { width } from "$stores/windowStore";

	//- prop
	export let w = 0;

	//- reactive expressions
	$: {
		$width = w;
		// console.log($width);
	}
</script>

<svelte:window bind:innerWidth="{w}" />

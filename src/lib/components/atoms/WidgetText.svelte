<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	// type
	interface Props {
		classes: string;
		textContent: string[];
	}

	// props
	let { classes = "", textContent = [] }: Props = $props();

	// variables
	let p: string;
</script>

<template lang="pug">
	div(
		class=`
			leading-7
			opacity-90
			text-center
			text-[1.125em]
			sm:text-[1.0625em]
			sm:max-w-lg
			md:max-w-xl
			lg:text-left
			{classes ?? ''}`)
		//- iterate text
		+each('textContent as p')
			p(
				class="mb-4 last:mb-0")
				+html('p')

		slot
	|</template>

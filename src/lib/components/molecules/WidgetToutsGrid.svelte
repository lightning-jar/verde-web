<!--
@component
Widget tout component to nest inside WidgetToutGrid
- heading is H3 tag by default
- icon is 16x16
- text is P tag
props:
-->

<script lang="ts">
	//- components
	import WidgetTout from "$molecules/WidgetTout.svelte";

	interface GridContentItem {
		[key: string]: unknown;
		bodyText: string;
		headingText: string;
		icon: string;
	}
	interface Grid {
		[key: string]: unknown;
		grid: GridContentItem[];
	}

	//- props
	let { toutsGrid }: { toutsGrid: Grid } = $props();
	let item: (typeof toutsGrid.grid)[0];
</script>

<template lang="pug">
	div(
		class=`
			gap-x-6
			gap-y-8
			grid
			grid-cols-1
			mb-20
			place-items-start
			w-full
			sm:grid-cols-2
			md:gap-x-6
			md:gap-y-6
			md:p-0
			lg:gap-6
			lg:grid-cols-2
			lg:items-start
			lg:mt-0
			xl:grid-cols-4
			xl:justify-center
			2xl:grid-cols-4`)
		//- tout
		+each('toutsGrid?.content as item, index')
			WidgetTout(
				bodyText!="{ item.bodyText }",
				cardStyles!="{ toutsGrid?.cardStyles ?? '' }",
				headingText!="{ item.headingText }",
				icon!="{ item.icon }")
	|</template>

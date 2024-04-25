<script lang="ts">
	//-components
	import { slugify } from "$utils/slugify";

	//- stores
	let { data } = $props();
	let filter = $state("");
</script>

<template lang="pug">
	.w-full.pt-12
		.grid.grid-cols-1.place-content-center.border-b.mb-8.w-full(
			class!="border-neutral-100/0 page-x-padding")
			.mb-8
				h1.text-36.leading-none.mb-4 { data.page?.header?.headline ?? "" }
				h2.w-96.text-15.leading-snug { data.page?.header?.text ?? "" }

			//- search box
			.grid.grid-cols-1.max-w-lg
				input.block.cursor-text.text-penn.mb-0.rounded.w-full.appearance-none.px-3.py-2.border(
					bind:value!="{ filter }",
					name="filter",
					placeholder="search for terms",
					type="text")

		//-results
		.grid.grid-cols-1(
			class!="xl:grid-cols-2 page-x-padding mb-24")
			div(
				class="")
				+each('data.entries as entry, index')
					+const('term = entry.term ? entry.term.toLowerCase() : ""')
					+const('definition = entry.definition ? entry.definition.toLowerCase() : ""')
					+const('text = term + " " + definition')
					+const('f = filter ? filter.toLowerCase() : ""')
					+if('f && text && text.includes(f) || !f')
						.mt-8.pt-8(
							class="{(index == data.entries.length - 1) ? '' : 'border-t'} border-neutral-100/30",
							id!="{ slugify(entry.term).replace(/\-$/,'') }")
							div(
								class="md:max-w-lg")
								h3.mb-1.text-17(
									class="font-medium") { entry.term }
								p.text-15(
									class="text-slate-50/80") { entry.definition }
		|</template>

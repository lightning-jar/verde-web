<!--
@component
Widget tout component to nest inside WidgetCardGrid
- heading is H3 tag by default
- icon is 16x16
- text is P tag
props:
-->

<script lang="ts">
	// prettier-disable
	interface Props {
		bodyClasses: string;
		text: string;
		headingClasses: string;
		headingTag: string;
		heading: string;
		image: Image;
		cardClasses: string;
		styles: string;
	}

	// props
	let {
		bodyClasses,
		text = "",
		headingClasses,
		headingTag = "h3",
		heading = "",
		image,
		cardClasses,
		styles,
	}: Props = $props();

	const body_classes = `opacity-[85%] text-[1em] leading-normal ${bodyClasses}`;
	const heading_classes = `mb-2 font-medium text-[1.065em] opacity-[95%] ${headingClasses}`;
	const card_classes = `w-full h-full pl-8 pr-6 pt-6 pb-4 rounded-lg shadow-sm lg:mb-6 ${cardClasses}`;
</script>

<template lang="pug">
	div(
		class!="{ card_classes }",
		style!="{ styles ? styles : null }")
		//- image
		img(
			class=`
				aspect-square
				block
				h-16
				mb-4
				w-16
				`,
			alt!="{ image?.alt ?? '' }",
			role="presentation",
			src!="{ image?.url ?? null }")

		//- heading
		+if('heading')
			svelte:element(
				class!="{ heading_classes }",
				this!="{ headingTag }") { heading }

		//- text
		p(
			class!="{ body_classes }") { text }

		|</template>

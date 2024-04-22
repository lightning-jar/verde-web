<!--
@component
Widget tout component to nest inside WidgetToutGrid
- heading is H3 tag by default
- icon is 16x16
- text is P tag
props:
-->

<script lang="ts">
	// prettier-disable
	interface Props {
		bodyClasses: string;
		bodyText: string;
		headingClasses: string;
		headingTag: string;
		headingText: string;
		icon: Image;
		cardClasses: string;
		cardStyles: string;
	}

	// props
	let {
		bodyClasses,
		bodyText = "",
		headingClasses,
		headingTag = "h3",
		headingText = "",
		icon,
		cardClasses,
		cardStyles,
	}: Props = $props();

	const body_classes = `opacity-[85%] text-[1em] leading-normal ${bodyClasses}`;
	const heading_classes = `mb-2 font-medium text-[1.065em] opacity-[95%] ${headingClasses}`;
	const card_classes = `w-full h-full pl-8 pr-6 pt-6 pb-4 rounded-lg shadow-sm lg:mb-6 ${cardClasses}`;
</script>

<template lang="pug">
	div(
		class!="{ card_classes }",
		style!="{ cardStyles ? cardStyles : null }")
		//- image
		img(
			class=`
				aspect-square
				block
				h-16
				mb-4
				w-16
				`,
			alt!="{ icon?.alt ?? '' }",
			role="presentation",
			src!="{ icon?.url ?? null }")

		//- heading
		+if('headingText')
			svelte:element(
				class!="{ heading_classes }",
				this!="{ headingTag }") { headingText }

		//- text
		p(
			class!="{ body_classes }") { bodyText }

		|</template>

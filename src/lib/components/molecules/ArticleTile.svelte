<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	// components
	import PrimaryActionLink from "$atoms/PrimaryActionLink.svelte";
	import WidgetSubheading from "$atoms/WidgetSubheading.svelte";
	import WidgetText from "$atoms/WidgetText.svelte";

	interface Props {
		backgroundClasses: string;
		headlineClasses: string;
		date: string;
		excerpt: string;
		headline: string;
		image: Image;
		link: Link;
		linkClasses: string;
		source: { name?: string | null; url?: string | null };
		showSource: boolean;
		showDate: boolean;
	}
	let {
		backgroundClasses = "",
		headlineClasses = "",
		date = "",
		excerpt = "",
		headline = "",
		image = {},
		link = {},
		linkClasses = "",
		showSource = true,
		showDate = true,
		source,
	} = $props();
</script>

<template lang="pug">
	div(
		class=`
			bg-white/5
			grid
			grid-cols-1
			grid-rows-[auto,1fr,auto]
			place-content-start
			place-items-start
			h-full
			overflow-hidden
			pb-0
			relative
			rounded-lg
			w-full
			{backgroundClasses}`)
		//-image
		+if('image?.url')
			img(
				class=`
					aspect-[4/3]
					flex
					w-full
					object-cover
					opacity-100
					`,
				alt!="",
				draggable="false",
				height!="",
				loading="lazy",
				src!="{ image.url ?? '/images/frog.webp' }",
				width!="")

		//- text content
		div(
			class=`
				grid
				grid-cols-1
				h-full
				pt-6
				px-6
				place-content-start
				place-self-start`)
			//- date & source
			+if('date && showDate || source?.name && showSource')
				.flex.mb-3.items-center
					//- date
					+if('date && showDate')
						.opacity-70.tracking-wider.text-13 { new Date(date)?.toLocaleDateString() ?? "" }
					+if('date && showDate && source?.name && showSource')
						.mx-2.opacity-20 /
					//- source
					+if('source && showSource')
						+const('tag = source?.url ? "a": "div"')
						svelte:element.text-14.opacity-70.font-medium.grow-0.w-full.line-clamp-1(
							class!="{ source?.url ? 'hover:underline hover:opacity-90 underline-offset-4 decoration-current/60' : null }",
							href="{ source?.url ?? null }",
							rel="{ source?.url ? 'external noopener noreferrer' : null }",
							this!="{ tag }",
							title!="{ source?.url && source?.name ? 'go to ' + source.name : null }") { source?.name ?? "source" }

			//- headline
			+if('headline')
				a.line-clamp-2(
					class!="hover:underline underline-offset-4 decoration-current/60 { headlineClasses } {excerpt ? '' : 'mb-6' }",
					href!="{ link?.url ?? null }",
					title!="{ headline }") { headline }

			//- excerpt
			+if('excerpt')
				.opacity-80.pt-6.mt-6.mb-8.leading-6.border-t(
					class="border-white/10")
					p { excerpt }

		//- link
		+if('link && link.url')
			.h-full.px-6.pb-4.mt-4.self-end
				PrimaryActionLink(
					classes="z-10 max-w-fit px-6 {linkClasses}",
					label!="{ link?.label ?? 'Read Story' }",
					rel!="{ link?.rel }",
					target!="{ link?.target }",
					title!="{ link?.title }",
					url!="{ link?.url }")

		|</template>

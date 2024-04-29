<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	// for tailwindcss
	import "../app.css";

	// types
	import type { LayoutData } from "./$types";

	// import child page data
	import { page } from "$app/stores";

	// unpack child page data
	const meta = ($page.data?.meta as PageMeta) ?? {};

	// catch data from +layout.server.ts
	let { data } = $props() as { data: LayoutData };
</script>

<template lang="pug">
	svelte:head
		//- web component preloads
		+each('[data.headerWC, data.footerWC] as wc')
			link(
				href!="{ wc.url }",
				rel="modulepreload")
			script(
				async,
				src!="{ wc.url }",
				type="module")

		//- title
		+if('meta?.title')
			title { meta.title }

		//- description
		+if('meta?.description')
			meta(
				content!="{ meta.description }",
				name="description")

		//- canonical
		+if('data?.siteDomain && data?.pathname')
			link(
				href!="https://{data.siteDomain}{data.pathname}",
				rel="canonical")

		//- plausible analytics
		+if('!data.dev && meta?.analyticsOn')
			script(
				data-domain="verdeclimatesolutions.com",
				defer,
				src="https://plausible.io/js/plausible.js")

		//- robots
		+if('meta?.robotsFollow')
			meta(
				content="index, follow max-image-preview:large, max-snippet:-1, max-video-preview:-1 ",
				name="robots")
			+else
				meta(
					content="noindex, nofollow",
					name="robots")

		//- zoom info tracker
		+if('!data.dev')
			script(
				async,
				id="zoominfo-tracker",
				src="/zoomInfo.js")
	|</template>

<div
	class="grid grid-cols-1 justify-start min-h-screen place-items-start place-content-start grid-rows-[auto,1fr,auto] mx-auto text-white w-full">
	<!-- header -->
	<div class="w-full">
		{#if data.headerWC}
			{@html data.headerWC.component}
		{/if}
	</div>

	<!--main container -->
	<div class="w-full">
		<slot></slot>
	</div>

	<!---footer container -->
	<div class="align-self-end w-full">
		{#if data.footerWC}
			{@html data.footerWC.component}
		{/if}
	</div>
</div>

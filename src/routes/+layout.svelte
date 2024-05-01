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

	// catch data from +layout.server.ts
	let { data } = $props() as { data: LayoutData };

	const webComponents = [data.headerWC, data.footerWC];
</script>

<svelte:head>
	<!-- web components -->
	{#each webComponents as wc}
		<link
			href="{wc.url}"
			rel="modulepreload" />
		<script
			async
			src="{wc.url}"
			type="module"></script>
	{/each}
	{#if $page?.data?.meta?.title}
		<title>{$page.data.meta.title}</title>
	{/if}

	<!-- description -->
	{#if $page?.data?.meta?.description}
		<meta
			content="{$page.data.meta.description}"
			name="description" />
	{/if}

	<!-- canonical -->
	{#if data.siteDomain && data.pathname}
		<link
			href="https://{data.siteDomain}{data.pathname}"
			rel="canonical" />
	{/if}

	<!-- analytics -->
	{#if !data.dev && $page?.data.meta?.analyticsOn}
		<script
			data-domain="verdeclimatesolutions.com"
			defer
			src="https://plausible.io/js/script.js"></script>
	{/if}

	<!-- robots -->
	{#if !data.dev && $page?.data?.meta?.robotsFollow}
		<meta
			content="index, follow max-image-preview:large, max-snippet:-1, max-video-preview:-1 "
			name="robots" />
	{:else}
		<meta
			content="noindex, nofollow"
			name="robots" />
	{/if}

	<!-- zoomInfo -->
	{#if !data.dev}
		<script
			async
			id="zoominfo-tracker"
			src="/zoomInfo.js"></script>
	{/if}
</svelte:head>

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

<!-- svelte-ignore unused-export-let -->
<script lang="ts">
	// environment & utils
	import { dev, version } from "$app/environment";

	// stores
	import { siteSettings } from "$stores/siteSettings";

	// constants
	const { siteName, siteAuthor, siteCanonicalUrl } = $siteSettings;

	// props
	export let googleAnalyticsOn = true;
	export let ogImage = "";
	export let ogImageUrl = "";
	export let ogImageWidth: string | number = 0;
	export let ogImageHeight: string | number = 0;
	export let ogImageMimeType = "image/jpg";
	export let pageDescription = "lorem ipsum";
	export let pageKeywords: string[] = [];
	export let pageSlug = "";
	export let pageTitleFull: string | undefined = "";
	export let pageTitleShort = "";
	export let robotsFollow = true;

	const titleTagContent: string = pageTitleFull ? pageTitleFull : pageKeywords.join(" | ");

	// process version into date
	//const parsed = JSON.parse(version);
	//const versionDate = new Date(JSON.parse(version));
</script>

<template lang="pug">
	svelte:head
		//- title
		title { titleTagContent }
		//- description
		meta(
			content!="{ pageDescription }",
			name="description")

		//- canonical
		link(
			href!="{ (pageSlug) ? siteCanonicalUrl + '/' + pageSlug : siteCanonicalUrl }",
			rel="canonical")

		//- robots
		+if('robotsFollow')
			meta(
				content="index, follow max-image-preview:large, max-snippet:-1, max-video-preview:-1 ",
				name="robots")

		+if('ogImage')
			//- open graph
			meta(
				content="en_US",
				property="og:locale")
			meta(
				content="article",
				property="og:type")
			meta(
				content!="{ pageTitleShort }",
				property="og:title")
			meta(
				content!="{siteCanonicalUrl}/{pageSlug}",
				property="og:url")
			meta(
				content!="{ siteName }",
				property="og:site_name")
			//-meta(
				content!="{ version }",
				property="article:modified_time")

		+if('ogImageUrl')
			//- open graph image
			meta(
				content!="{ ogImageUrl }",
				property="og:image")
			+if('ogImageWidth')
				meta(
					content!="{ ogImageWidth.toString() }",
					property="og:image:width")
			+if('ogImageHeight')
				meta(
					content!="{ ogImageHeight.toString() }",
					property="og:image:height")
				meta(
					content!="{ ogImageMimeType }",
					property="og:image:type")

		//- version
		//- meta#version(
		//- 	content!="{ version }",
		//- 	name="version")
		meta(
			content!="Lightning Jar",
			name="creator")

		//-+if('!dev && googleAnalyticsOn')
			//- google tag manager
			script(
				async="",
				src="//www.googletagmanager.com/gtag/js?id=UA-70079803-1",
				type="text/javascript")
</template>

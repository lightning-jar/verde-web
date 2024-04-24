<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	let { headingTag = "h1", layout } = $props();
</script>

<template lang="pug">
	+if('layout="fullBleed"')
		.inset-0
			svelte:element.text-42.mb-4(
				this!="{ headingTag }")
				slot(
					name="pageTitle")
			div(
				class="mb-8 lg:max-w-sm")
				slot(
					name="pageSubtitle")
		+else
			.mb-4
				svelte:element.text-42.mb-4(
					this!="{ headingTag }")
					slot(
						name="pageTitle")
				div(
					class="mb-8 lg:max-w-sm")
					slot(
						name="pageIntro")</template>

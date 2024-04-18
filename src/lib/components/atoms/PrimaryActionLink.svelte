<!--
@component
Here's some documentation for this component.
-->

<script lang='ts'>
	export let classes=""
	export let href="/"
	export let title=""
	export let rel: string | null = null
	export let target: string | null = null
</script>

<template lang='pug'>
a.text-13.px-3.py-2.border.border-neutral-100.border-opacity-40.rounded-md(
	class!="{classes}"
	href!="{href}"
	title!="{title}"
	rel!="{rel}"
	)
	slot
</template>
<!--
@component
Here's some documentation for this component.
-->

<script lang='ts'>
export let headingTag = "h1"
export let layout = "default"
</script>

<template lang='pug'>
+if('layout="fullBleed"')
	div.inset-0
		svelte:element(this!="{headingTag}").text-42.mb-4
			slot(name="pageTitle")
		div(class="mb-8 lg:max-w-sm")
			slot(name="pageIntro")
	+else
		div.mb-4
			svelte:element(this!="{headingTag}").text-42.mb-4
				slot(name="pageTitle")
			div(class="mb-8 lg:max-w-sm")
				slot(name="pageIntro")
</template>
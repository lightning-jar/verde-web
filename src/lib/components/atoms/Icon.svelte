<!--
@component
Here's some documentation for this component.
-->

<script lang='ts'>

// store
import { iconStore } from '$stores/iconStore'

// props
export let icon = "lightning"
export let alt = ""
export let role = "presentation"



</script>

<template lang='pug'>
+if('$iconStore[icon]')
	svg.w-full.h-auto.fill-current(
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 1200 1200"
		height="1200"
		width="1200"
		)
		+each('$iconStore[icon] as el, index')
			+if('el.tag == "path" && el.d')
				path(d!="{el.d}")
	+else
		div icon not found
</template>
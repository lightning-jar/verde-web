<!--
@component
Here's some documentation for this component.
-->

<script lang='ts'>
  export let classes = ""

</script>

<template lang='pug'>
h2.font-medium.inline-block.text-28.text-center.mb-4(class="leading-tight sm:mb-4 sm:text-34 md:text-40 lg:text-left lg:text-36 xl:text-40 {classes}")
	slot
</template>
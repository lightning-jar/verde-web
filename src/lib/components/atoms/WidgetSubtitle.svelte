<!--
@component
Here's some documentation for this component.
-->

<script lang='ts'>
  export let classes = ""
</script>

<template lang='pug'>
.italic(
  class!="dark:text-slimy-200 text-slimy-400 text-[.95em] lg:text-[.95em] {classes}")
  slot
</template>
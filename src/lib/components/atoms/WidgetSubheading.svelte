<!--
@component
Use for adding a heading above a subsection of text.
-->

<script lang='ts'>
  export let classes = ""
  export let tag = "h3"
</script>

<template lang='pug'>
svelte:element(
  this!="{tag}"
  class!="text-[1.065em] opacity-[95%] mb-2 tracking-wider font-medium {classes}"
  )
  slot
</template>
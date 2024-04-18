<!--
@component
Here's some documentation for this component.
-->

<script lang='ts'>
export let classes=""
</script>

<template lang='pug'>
div(class="sm:max-w-lg md:max-w-xl lg:pr-8")
  .leading-7.opacity-90.text-center(
    class!="text-[1.125em] sm:text-[1.0625em] lg:text-left {classes}"
    )
    slot
</template>
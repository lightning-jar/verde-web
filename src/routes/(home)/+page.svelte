<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	import Billboard from "$components/molecules/Billboard.svelte";
	import Blog from "$components/molecules/Blog.svelte";
	import Resources from "$components/molecules/Resources.svelte";
	import Solution from "$components/molecules/Solution.svelte";
	import Messaging from "$components/molecules/Messaging.svelte";

	let { data } = $props();
</script>

<template lang="pug">
	//- Billboard
	Billboard(
		data!="{ data.billboard }")

	//- Carbon Credits
	+each('data.solutions as solution')
		Solution(
			solution!="{ solution }")

	//- Values Messaging
	+each('data.messaging as widget')
		Messaging(
			messaging!="{ widget }")

	+if('data.latestNews && data.resources')
		Resources(
			classes!="border-b border-white",
			latestNews!="{ data.latestNews }",
			resources!="{ data.resources }")

	+if('data.blog && data.latestBlog')
		Blog(
			articles!="{ data.latestBlog }",
			backgroundClasses!="bg-slate-200",
			blog!="{ data.blog }")

	|</template>

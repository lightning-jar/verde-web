<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	interface Props {
		classes: string;
		url: string;
		label: string;
		title: string;
		rel: string;
		target: string;
	}
	let {
		classes = "",
		url = "/",
		label = "",
		title = "",
		rel = "",
		target = "",
	} = $props();
</script>

<a
	class="block border border-neutral-100 border-opacity-40 px-2 py-2 rounded-md text-13 {classes}"
	href="{url}"
	rel="{rel ? rel : null}"
	target="{target ? target : null}"
	title="{title ? title : null}">{label}</a>

<script lang="ts">
	// types
	interface Embed {
		title: string;
		description: string;
		code: string;
	}

	// props
	// export let form: Embed;

	const form: Embed = {
		title: "Contact",
		description: "",
		code: `<iframe id="JotFormIFrame-202045345562146" title="verde-contact-form" onload="window.parent.scrollTo(0,0)" allowtransparency="true" allowfullscreen="true" allow="geolocation; microphone; camera" src="https://form.jotform.com/231455983427161" frameborder="0" style="min-width: 100%; height: 953px; border: none;" scrolling="no"></iframe>`,
	};

	// variables
	const title = form.title;
	const description = form.description;
	const code = form.code;
</script>

<template lang="pug">
	.mb-8
		//- description
		+if('description')
			div { description }

		//- embed
		div
			+html('code')</template>

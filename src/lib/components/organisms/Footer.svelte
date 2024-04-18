<!--
@component
Here's some documentation for this component.
-->
<script lang="ts">
</script>

<template lang="pug">
footer.text-white.pt-16.relative.justify-self-end.mt-auto.px-6(class="sm:px-10 lg:px-16 xl:px-18")
	div
		.grid.grid-cols-1.mb-12(class="sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5")
			.mb-8
				.font-medium.text-md.mb-4.text-white(class="xl:text-sub") Solutions
				ul.list-none
					//- li.mb-2(class="xl:mb-1")
					//- 	a.bg-opacity-100.cursor-pointer.text-white.text-opacity-70.transition-all.underline-offset-4.outline-none(
					//- 		title="go to Projects page"
					//- 		href="/#marketing-carbon-credits"
					//- 		class="hover:text-opacity-100 hover:underline focus:underline xl:text-sm"
					//- 		) Creating Carbon Credits
					li.mb-2(class="xl:mb-1")
						a.bg-opacity-100.cursor-pointer.text-white.text-opacity-70.transition-all.underline-offset-4.outline-none(
							title="go to Projects page"
							href="/#marketing-carbon-credits"
							class="hover:text-opacity-100 hover:underline focus:underline xl:text-sm"
							) Marketing Carbon Credits
					li.mb-2(class="xl:mb-1")
						a.bg-opacity-100.cursor-pointer.text-white.text-opacity-70.transition-all.underline-offset-4.outline-none(
							title="go to Carbon Credits page"
							href="/#purchasing-carbon-credits"
							class="hover:text-opacity-100 hover:underline focus:underline xl:text-sm"
							) Purchasing Carbon Credits
					//- li.mb-2(class="xl:mb-1")
					//- 	a.bg-opacity-100.cursor-pointer.text-white.text-opacity-70.transition-all.underline-offset-4.outline-none(
					//- 		title="go to Projects page"
					//- 		href="/portfolio"
					//- 		class="hover:text-opacity-100 hover:underline focus:underline xl:text-sm"
					//- 		) Our Portfolio
			//- .mb-8
			//- 	.font-medium.text-md.mb-4.text-white(class="xl:text-sub") About
			//- 	ul.list-none
			//- 		li.mb-2(class="xl:mb-1")
			//- 			a.bg-opacity-100.cursor-pointer.text-white.text-opacity-70.transition-all.underline-offset-4.outline-none(
			//- 				title="Learn more about Verde Climate Solutions"
			//- 				href="/about"
			//- 				class="hover:text-opacity-100 hover:underline focus:underline xl:text-sm"
			//- 				) About Us
			//- 		li.mb-2(class="xl:mb-1")
			//- 			a.bg-opacity-100.cursor-pointer.text-white.text-opacity-70.transition-all.underline-offset-4.outline-none(
			//- 				title="Go to Leadership"
			//- 				href="/about"
			//- 				class="hover:text-opacity-100 hover:underline focus:underline xl:text-sm"
			//- 				) Leadership
			//- 		li.mb-2(class="xl:mb-1")
			//- 			a.bg-opacity-100.cursor-pointer.text-white.text-opacity-70.transition-all.underline-offset-4.outline-none(
			//- 				href="/about"
			//- 				class="hover:text-opacity-100 hover:underline focus:underline xl:text-sm"
			//- 				) CEO Message
			.mb-8
				.font-medium.text-md.mb-4.text-white(class="xl:text-sub") Resources
				ul.list-none
					li.mb-2(class="xl:mb-1")
						a.bg-opacity-100.cursor-pointer.text-white.text-opacity-70.transition-all.underline-offset-4.outline-none(
							title="go to Verde Blog"
							href="/blog"
							class="hover:text-opacity-100 hover:underline focus:underline xl:text-sm"
							) Blog
					li.mb-2(class="xl:mb-1")
						a.bg-opacity-100.cursor-pointer.text-white.text-opacity-70.transition-all.underline-offset-4.outline-none(
							href="/contact"
							class="hover:text-opacity-100 hover:underline focus:underline xl:text-sm"
							) Contact Us
					//- li.mb-2(class="xl:mb-1")
					//- 	a.bg-opacity-100.cursor-pointer.text-white.text-opacity-70.transition-all.underline-offset-4.outline-none(
					//- 		title="go to Verde Blog"
					//- 		href="/faqs"
					//- 		class="hover:text-opacity-100 hover:underline focus:underline xl:text-sm"
					//- 		) FAQs
					li.mb-2(class="xl:mb-1")
						a.bg-opacity-100.cursor-pointer.text-white.text-opacity-70.transition-all.underline-offset-4.outline-none(
							title="go to Verde Blog"
							href="/glossary"
							class="hover:text-opacity-100 hover:underline focus:underline xl:text-sm"
							) Glossary
					li.mb-2(class="xl:mb-1")
						a.bg-opacity-100.cursor-pointer.text-white.text-opacity-70.transition-all.underline-offset-4.outline-none(
							title="browse News Stories"
							href="/news"
							class="hover:text-opacity-100 hover:underline focus:underline xl:text-sm"
							) News
					//- li.mb-2(class="xl:mb-1")
					//- 	a.bg-opacity-100.cursor-pointer.text-white.text-opacity-70.transition-all.underline-offset-4.outline-none(
					//- 		title="UN Sustainable Development Goals"
					//- 		href="/un-sustainable-development-goals"
					//- 		class="hover:text-opacity-100 hover:underline focus:underline xl:text-sm"
					//- 		) UN SDG
	.py-12.border-t.border-t-white.border-opacity-40
		.mb-4.flex
			a.text-sm.mr-4.text-white.text-opacity-70.cursor-pointer.underline-offset-4.transition-all.underline.outline-none.transition-colors(
				title="Go to terms & conditions"
				href="/legal/terms"
				class="decoration-[#fff]/10 hover:text-opacity-100 hover:decoration-white focus:decoration-white xl:text-xs"
				) Terms &amp; Conditions
			a.text-sm.mr-4.text-white.text-opacity-70.cursor-pointer.underline-offset-4.transition-all.underline.outline-none.transition-colors(
				title="Go to privacy policy"
				href="/legal/privacy"
				class="decoration-[#fff]/10 hover:text-opacity-100 hover:decoration-white focus:decoration-white xl:text-xs"
				) Privacy
		.justify-between(class="sm:flex")
			.mb-12.mr-2.text-xs.text-white.text-opacity-60(class="sm:mb-4 xl:text-xxs")
				span.inline-block.mr-2 Copyright © 2023 Verde Climate Solutions LLC
				span All Rights Reserved.
			//-a.text-xs.text-white.text-opacity-60.transition-colors.outline-none.underline-offset-4(
				title="checkout Lightning Jar digital studio"
				href="https://lightningjar.com"
				class="hover:text-accent hover:text-opacity-100 focus:underline focus:text-accent xl:text-xxs"
				) website by ⚡️ Lightning Jar:
</template>

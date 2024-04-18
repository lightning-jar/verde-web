<!--
@component
Here's some documentation for this component.
-->

<script lang='ts'>
// components
import ArticleTile from "$molecules/ArticleTile.svelte";
import PrimaryActionLink from "$atoms/PrimaryActionLink.svelte";

// types
import type { Article, Articles } from "$types/generalTypes";

// props
export let articles:Articles = []
export let articleLimit	= 20;
export let tileBackgroundClasses = "bg-slate-100"

// variables
let article: Article;
let index: number;
let classes: string;

// functions
function show(index:number) {
	return index < articleLimit;
}
</script>

<template lang='pug'>
		.grid.grid-cols-1.gap-8(class="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4")
			+each('articles as article, index')
				+const('classes = index === 4 ? "hidden md:block xl:hidden 2xl:block" : "" ')
				+if('show(index)')
					.relative.w-full.h-full(class!="{classes}")
						slot( name="article" article!="{article}" )





</template>
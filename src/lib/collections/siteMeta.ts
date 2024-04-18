import { siteMeta as siteMetaData } from "$logic/siteMeta.svelte";
export const siteMeta = siteMetaData;
export default siteMeta as SiteMeta;
export type SiteMeta = typeof siteMeta;

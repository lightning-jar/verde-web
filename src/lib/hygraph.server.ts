// hygraph singleton
import { GraphQLClient } from "graphql-request";
import { settings } from "$collections/settings";

export const hygraphHighSpeed = new GraphQLClient(
	settings.hygraphEndpointHighSpeed,
	{
		headers: {},
	},
);
export const hygraphContent = new GraphQLClient(
	settings.hygraphEndpointContent,
	{
		headers: {},
	},
);

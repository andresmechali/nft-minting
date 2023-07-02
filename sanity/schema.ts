import { type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      name: "creator",
      title: "Creator",
      type: "document",
      fields: [
        {
          name: "name",
          title: "Name",
          type: "string",
        },
        {
          name: "address",
          title: "Address",
          type: "string",
        },
        {
          name: "slug",
          title: "Slug",
          type: "slug",
          options: {
            source: "name",
            maxLength: 96,
          },
        },
        {
          name: "image",
          title: "Image",
          type: "image",
          options: {
            hotspot: true,
          },
        },
        {
          name: "bio",
          title: "Bio",
          type: "string",
        },
      ],
    },
    {
      name: "collection",
      title: "Collection",
      type: "document",
      fields: [
        {
          name: "title",
          title: "Title",
          description: "Enter the title of the NFT drop",
          type: "string",
        },
        {
          name: "description",
          title: "Description",
          type: "string",
        },
        {
          name: "nftCollectionName",
          title: "Name of NFT collection",
          type: "string",
        },
        {
          name: "address",
          title: "Address",
          type: "string",
        },
        {
          name: "slug",
          title: "Slug",
          type: "slug",
          options: {
            source: "name",
            maxLength: 96,
          },
        },
        {
          name: "creator",
          title: "Creator",
          type: "reference",
          to: { type: "creator" },
        },
        {
          name: "mainImage",
          title: "Main image",
          type: "image",
          options: {
            hotspot: true,
          },
        },
        {
          name: "previewImage",
          title: "Preview image",
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
};

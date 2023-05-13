import type { TinaField } from "tinacms";
export function bio_postFields() {
  return [
    {
      type: "string",
      name: "bio",
      label: "bio",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "hero_image",
      label: "hero_image",
    },
    {
      type: "string",
      name: "content_type",
      label: "Content Type",
    },
  ] as TinaField[];
}
export function blog_postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "image",
      name: "hero_image",
      label: "hero image",
    },
    {
      type: "image",
      name: "gallery",
      label: "gallery",
      list: true,
    },
    {
      type: "string",
      name: "content_type",
      label: "Content Type",
    },
    {
      type: "string",
      name: "tags",
      label: "tags",
      list: true,
      ui: {
        component: "tags",
      },
    },
  ] as TinaField[];
}
export function info_pageFields() {
  return [
    {
      type: "string",
      name: "description",
      label: "description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "cta",
      label: "cta",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "contact",
      label: "contact",
      fields: [
        {
          type: "string",
          name: "email",
          label: "email",
        },
        {
          type: "string",
          name: "twitter_handle",
          label: "twitter_handle",
        },
        {
          type: "string",
          name: "github_handle",
          label: "github_handle",
        },
      ],
    },
    {
      type: "string",
      name: "background_color",
      label: "background_color",
      ui: {
        component: "color",
      },
    },
  ] as TinaField[];
}
export function site_configFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "string",
      name: "repository_url",
      label: "repository_url",
    },
  ] as TinaField[];
}

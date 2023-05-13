import { defineConfig } from "tinacms";
import { bio_postFields } from "./templates";
import { blog_postFields } from "./templates";
import { info_pageFields } from "./templates";
import { site_configFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

export default defineConfig({
  branch,
  clientId: "62319418-1684-4c42-afb3-ce5b17afb8ee", // Get this from tina.io
  token: "356d8c0479bcb0aa44717b245f3f692ec89c6786", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Blog Posts",
        name: "blog_posts",
        path: "content/posts",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...blog_postFields(),
        ],
      },
      {
        format: "yaml",
        label: "Author List",
        name: "author_list",
        path: "content/data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "authors",
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description:
              "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info",
          },
        ],
      },
      {
        format: "json",
        label: "Info Page",
        name: "info_page",
        path: "content/data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "info",
        },
        fields: [
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
        ],
      },
      {
        format: "md",
        label: "Author Bio",
        name: "author_bio",
        path: "content/data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "author-bio",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "md",
        label: "Mission",
        name: "mission",
        path: "content/data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "mission",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "json",
        label: "Site Info",
        name: "site_info",
        path: "/",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "config",
        },
        fields: [
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
        ],
      },
    ],
  },
});

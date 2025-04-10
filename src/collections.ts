import { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: 'projects',
  labels: {
    singular: 'Project',
    plural: 'Projects',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'author', 'createdAt'],
    group: 'Content',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Project Title',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Project Description',
    },
    {
      name: 'skillTags',
      type: 'array',
      label: 'Skill Tags',
      minRows: 1,
      fields: [
        {
          name: 'tag',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'author',
      type: 'text',
      required: true,
      label: 'Author Name',
    },
  ]
}

export const Achievements: CollectionConfig = {
  slug: 'achievements',
  admin: {
    useAsTitle: 'title',
    group: 'Content',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Achievement Title',
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      label: 'Date',
    },
    {
      name: 'organization',
      type: 'text',
      required: true,
      label: 'Organization',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Description',
    },
    {
      name: 'tags',
      type: 'array',
      label: 'Tags',
      fields: [
        {
          name: 'tag',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'link',
      type: 'text',
      label: 'Proof/Link',
    },
  ]
}

export const Blog: CollectionConfig = {
  slug: 'blog-section',
  admin: {
    useAsTitle: 'title',
    group: 'Content',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Blog Title',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'Slug',
    },
    {
      name: 'author',
      type: 'text',
      required: true,
      label: 'Author',
    },
    {
      name: 'content',
      type: 'textarea',
      required: true,
      label: 'Content',
    },
  ],
};
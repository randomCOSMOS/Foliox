import { GlobalConfig } from 'payload';

export const PersonalInfo: GlobalConfig = {
  slug: 'personal-info',
  label: 'Personal Info',
  admin: {
    description: 'Manage your information to be displayed on the portfolio.',
    group: 'Portfolio Settings',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Name',
    },
    {
      name: 'tagline',
      type: 'text',
      required: true,
      label: 'Tagline',
    },
    {
      name: 'currentPosition',
      type: 'text',
      required: false,
      label: 'Current Position',
    },
    {
      name: 'contactInfo',
      type: 'group',
      label: 'Contact Information',
      fields: [
        {
          name: 'email',
          type: 'email',
          required: true,
          label: 'Email Address',
        },
        {
          name: 'phone',
          type: 'text',
          label: 'Phone Number',
        },
      ],
    },
    {
      name: 'socialLinks',
      type: 'group',
      label: 'Social Links',
      fields: [
        {
          name: 'linkedin',
          type: 'text',
          label: 'LinkedIn URL',
        },
        {
          name: 'github',
          type: 'text',
          label: 'GitHub URL',
        },
        {
          name: 'instagram',
          type: 'text',
          label: 'Instagram URL',
        },
      ],
    },
  ],
};

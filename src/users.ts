import type { CollectionConfig } from 'payload';

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    loginWithUsername: {
      allowEmailLogin: true,
      requireEmail: true,
    },
  },
  admin: {
    useAsTitle: 'email',
    hidden: true,
  },
  access: {
    read: ({ req: { user } }) => Boolean(user),
    create: async ({ req }) => {
      const payload = req.payload;
      const { totalDocs } = await payload.find({
        collection: 'users',
        limit: 0,
      });
      return totalDocs === 0;
    },
    update: ({ req: { user }, id }) => {
      if (user && user.id === id) return true;
      return false;
    },
    delete: () => false,
  },
  fields: [
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
    },
    {
      name: 'username',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'name',
      type: 'text',
    },
  ]
};

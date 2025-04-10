import type { CollectionConfig, CollectionBeforeLoginHook } from 'payload';

const beforeLoginHook: CollectionBeforeLoginHook = async ({ user }) => {
  // Check if user is verified before allowing login
  if (user && !user._verified) {
    throw new Error('Please verify your email before logging in.');
  }
  return user;
};

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    loginWithUsername: {
      allowEmailLogin: true,
      requireEmail: true,
    },
    verify: {
      generateEmailHTML: ({ token, user }) => {
        // Create verification URL
        const url = `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/users/verify/${token}`;
        
        return `
          <h1>Verify your email address</h1>
          <p>Click the link below to verify your email address for Foliox:</p>
          <p><a href="${url}">Verify Email</a></p>
        `;
      },
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
  ],
  hooks: {
    beforeLogin: [beforeLoginHook],
  },
};

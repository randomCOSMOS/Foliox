import { CollectionConfig } from "payload";

// export const Users: CollectionConfig = {
//     slug: 'users',
//   auth: true,
//   admin: {
//     useAsTitle: 'email',
//     group: 'Admin',
//   },
//   access: {
//     // Allow reading users when logged in
//     read: ({ req: { user } }) => Boolean(user),
    
//     // Only allow creating users if no users exist
//     create: async ({ req }) => {
//       const payload = req.payload
//       const { totalDocs } = await payload.find({
//         collection: 'users',
//         limit: 0,
//       })
      
//       // Only allow creation if no users exist
//       return totalDocs === 0
//     },
    
//     // Allow updating own user
//     update: ({ req: { user }, id }) => {
//       if (user && user.id === id) return true
//       return false
//     },
    
//     // Prevent deleting users
//     delete: () => false,
//   },
//   fields: [
//     // Add email field (required for auth)
//     {
//       name: 'email',
//       type: 'email',
//       required: true,
//     },
//     // Add your custom fields here
//     {
//       name: 'name',
//       type: 'text',
//     },
//     // You can add more fields as needed
//   ]
// }

// src/collections/Users.ts

// export const Users: CollectionConfig = {
//   slug: 'users',
//   auth: true,
//   admin: {
//     useAsTitle: 'email',
//     group: 'Admin',
//   },
//   access: {
//     // Anyone can read users (or restrict to authenticated users)
//     read: ({ req: { user } }) => Boolean(user),
    
//     // Allow creating new users
//     // Option 1: Allow anyone to create a user (self-registration)
//     create: () => true,
    
//     // Option 2: Only allow existing users to create new users
//     // create: ({ req: { user } }) => Boolean(user),
    
//     // Users can only update their own profile
//     update: ({ req: { user }, id }) => {
//       // Allow admins to update any user
//       if (user?.role === 'admin') return true
      
//       // Allow users to update their own profile
//       if (user && user.id === id) return true
      
//       return false
//     },
    
//     // Only admins can delete users
//     delete: ({ req: { user } }) => {
//       return user?.role === 'admin'
//     },
//   },
//   fields: [
//     // Email field (required for auth)
//     {
//       name: 'email',
//       type: 'email',
//       required: true,
//       unique: true,
//     },
//     // Add a role field to distinguish between regular users and admins
//     {
//       name: 'role',
//       type: 'select',
//       options: [
//         {
//           label: 'Admin',
//           value: 'admin',
//         },
//         {
//           label: 'User',
//           value: 'user',
//         },
//       ],
//       defaultValue: 'user',
//       required: true,
//       // Only admins can change roles
//       access: {
//         update: ({ req: { user } }) => user?.role === 'admin',
//       },
//     },
//     // Name field
//     {
//       name: 'name',
//       type: 'text',
//     },
//     // Add more user fields as needed
//   ],
// }


export const Projects: CollectionConfig = {
    slug: 'projects',
  labels: {
    singular: 'Project',
    plural: 'Projects',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'author', 'createdAt'],
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
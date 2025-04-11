import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { buildConfig } from 'payload'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import nodemailer from 'nodemailer'

import { Users } from './users'
import { Projects, Achievements, Blog } from './collections';
import { PersonalInfo } from './globals'

export default buildConfig({
  admin: {
    meta: {
      title: 'Foliox - Admin panel',
      titleSuffix: "",
      description: "CMS dashboard for Foliox",
      icons: [{
        rel: 'icon',
        type: 'image/png',
        url: '/favicon.png',
      }]
    },
    components: {
      graphics: {
        Logo: '/components/Logo',
        Icon: '/components/Icon',
      },
      beforeNavLinks: ['/components/BeforeNavLinks'],
    },
    theme: 'dark'
  },

  email: nodemailerAdapter({
    defaultFromAddress: 'foliox-portfolio@gmail.com',
    defaultFromName: 'Foliox',
    transport: nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      },
    }),
  }),

  editor: lexicalEditor(),

  collections: [Users, Projects, Achievements, Blog],  
  globals: [PersonalInfo],

  secret: process.env.PAYLOAD_SECRET || '',
  db: postgresAdapter({
    pool: {
        connectionString: process.env.DATABASE_URI,
    }
  }),
})
import sharp from 'sharp'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { buildConfig } from 'payload'

import { Projects, Achievements, Blog } from './collections'
import { Logo, Icon } from './graphics'

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
        Logo,
        Icon
      }
    }
  },

  editor: lexicalEditor(),

  collections: [Projects, Achievements, Blog],  

  secret: process.env.PAYLOAD_SECRET || 'supersecretdevkeyhehehaha',
  db: postgresAdapter({
    pool: {
        connectionString: process.env.DATABASE_URI || 'postgres://postgres:o@localhost:5432/test',
    }
  }),
})
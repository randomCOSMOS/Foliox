import sharp from 'sharp'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { buildConfig } from 'payload'

import { Projects } from './collections'

export default buildConfig({
  editor: lexicalEditor(),

  collections: [
    Projects,
  ],

  secret: process.env.PAYLOAD_SECRET || 'supersecretdevkeyhehehaha',
  db: postgresAdapter({
    pool: {
        connectionString: process.env.DATABASE_URI || 'postgres://postgres:o@localhost:5432/test',
    }
  }),
})
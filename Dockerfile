# syntax=docker/dockerfile:1

# 1. Base image
FROM node:20-alpine AS base
WORKDIR /app

# 2. Install all dependencies (including dev)
FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN npm install

# 3. Build the Next.js app
FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# 4. Final production image (clean, no dev deps)
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
USER node

# Copy only prod dependencies
COPY package.json pnpm-lock.yaml ./
RUN npm install

# Copy built app & public assets
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "start"]

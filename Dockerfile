ARG NODE_IMAGE=public.ecr.aws/docker/library/node
ARG NODE_VERSION=18.12.1
FROM ${NODE_IMAGE}:${NODE_VERSION}-alpine as deps

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM ${NODE_IMAGE}:${NODE_VERSION}-alpine as builder
WORKDIR /app

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN yarn build

FROM ${NODE_IMAGE}:${NODE_VERSION}-alpine as runner
WORKDIR /app

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

ENV PORT 3000
ENV NODE_ENV production

COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/build ./build
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

COPY run.sh /app
COPY server.js /app

USER node

EXPOSE 3000
CMD ["/app/run.sh"]

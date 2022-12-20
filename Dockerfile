# Build the app
FROM node:14-alpine as build
WORKDIR /app

COPY . .
RUN npm ci
RUN npm run build
COPY ./.next ./.next


# Run app
FROM node:14-alpine

# Only copy files required to run the app
COPY --from=build /app/.next ./
COPY --from=build /app/package.json ./
COPY --from=build /app/package-lock.json ./

EXPOSE 3000

# Required for healthcheck defined in docker-compose.yml
# If you don't have a healthcheck that uses curl, don't install it
RUN apk --no-cache add curl

# By adding --production npm's devDependencies are not installed
RUN npm ci --production
RUN ./node_modules/.bin/next telemetry disable

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

USER nextjs
CMD ["npm", "start"]
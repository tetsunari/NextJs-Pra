FROM node:21-slim
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    git \
    tini \
    && rm -rf /var/lib/apt/lists/* \
    && apt-get clean
WORKDIR /my-app

ENV NODE_ENV=development
ENV PATH=$HOME/my-app/node_modules/.bin:$PATH

COPY ./package*.json ./
RUN npm i \
    && npm cache clean -f

EXPOSE 3000

# ENTRYPOINT ["npx", "-y", "create-next-app@14", "."]
# CMD ["--typescript"]

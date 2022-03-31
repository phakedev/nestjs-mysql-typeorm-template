# @phakedev/nestjs-mysql-typeorm-template

This template should help get you started developing with NestJS.

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/phakedev/nestjs-mysql-typeorm-template/generate)

### Clone to local

```bash
npx degit phakedev/nestjs-mysql-typeorm-template my-app
cd my-app
```

#### Install dependencies

```bash
yarn
```

## Run

Start a local server with the following terminal commands:

```bash
yarn start:dev
```

## Migration Guide

### Usage

#### For run current migration state

1. Check your migration queries in `src/migrations`
2. `yarn run typeorm:run`

#### For create new migration

1. `yarn typeorm:migrate <entity-migration>`
2. Check your migration queries in `src/migrations`
3. `yarn run typeorm:run`

If everything went well, you have up to date entities and a `migrations` table listing applied migrations.

### Reference links

- [typeorm/migrations](https://github.com/typeorm/typeorm/blob/master/docs/migrations.md)
- [typeorm/using-cli](https://github.com/typeorm/typeorm/blob/master/docs/using-cli.md#notes-on-entity-files-written-in-typescript)

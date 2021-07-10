# @phakedev/nestjs-template

This template should help get you starter developing with NestJS.

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

import { MigrationInterface, QueryRunner } from 'typeorm'

export class InitialMigration1626366593859 implements MigrationInterface {
  name = 'InitialMigration1626366593859'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `user` (`id` varchar(36) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `firstName` varchar(255) NULL, `lastName` varchar(255) NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB',
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'DROP INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` ON `user`',
    )
    await queryRunner.query('DROP TABLE `user`')
  }
}

import { MigrationInterface, QueryRunner } from "typeorm";

export class updatePostTable1661160083966 implements MigrationInterface {
    name = 'updatePostTable1661160083966'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`migration_author\` DROP COLUMN \`lastName\``);
        await queryRunner.query(`ALTER TABLE \`migration_author\` ADD \`lastName\` varchar(10) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`migration_author\` DROP COLUMN \`lastName\``);
        await queryRunner.query(`ALTER TABLE \`migration_author\` ADD \`lastName\` varchar(255) NOT NULL`);
    }

}

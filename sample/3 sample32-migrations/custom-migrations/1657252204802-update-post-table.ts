import { MigrationInterface, QueryRunner } from "typeorm";

export class updatePostTable1657252204802 implements MigrationInterface {
    name = 'updatePostTable1657252204802'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`migration_author\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`migration_post\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(100) NOT NULL, \`authorId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`migration_post\` ADD CONSTRAINT \`FK_0df51661b8f6f1bfb8dc2656cef\` FOREIGN KEY (\`authorId\`) REFERENCES \`migration_author\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`migration_post\` DROP FOREIGN KEY \`FK_0df51661b8f6f1bfb8dc2656cef\``);
        await queryRunner.query(`DROP TABLE \`migration_post\``);
        await queryRunner.query(`DROP TABLE \`migration_author\``);
    }

}

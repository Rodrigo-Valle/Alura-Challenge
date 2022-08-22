import { MigrationInterface, QueryRunner } from "typeorm";

export class FirstMigration1661185049995 implements MigrationInterface {
    name = 'FirstMigration1661185049995'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`income\` (\`id\` varchar(255) NOT NULL, \`descricao\` varchar(255) NOT NULL, \`valor\` int NOT NULL, \`data\` datetime NOT NULL, \`userId\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` varchar(255) NOT NULL, \`cpf\` varchar(255) NOT NULL, \`nome\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`senha\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_a6235b5ef0939d8deaad755fc8\` (\`cpf\`), UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`expense\` (\`id\` varchar(255) NOT NULL, \`descricao\` varchar(255) NOT NULL, \`valor\` int NOT NULL, \`data\` datetime NOT NULL, \`userId\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`income\` ADD CONSTRAINT \`FK_0965fe0d5faa3b2e7518d7bb244\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`expense\` ADD CONSTRAINT \`FK_06e076479515578ab1933ab4375\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`expense\` DROP FOREIGN KEY \`FK_06e076479515578ab1933ab4375\``);
        await queryRunner.query(`ALTER TABLE \`income\` DROP FOREIGN KEY \`FK_0965fe0d5faa3b2e7518d7bb244\``);
        await queryRunner.query(`DROP TABLE \`expense\``);
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_a6235b5ef0939d8deaad755fc8\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`income\``);
    }

}

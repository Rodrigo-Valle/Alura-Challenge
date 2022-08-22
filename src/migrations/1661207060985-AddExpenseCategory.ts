import { MigrationInterface, QueryRunner } from "typeorm";

export class AddExpenseCategory1661207060985 implements MigrationInterface {
    name = 'AddExpenseCategory1661207060985'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`expense\` CHANGE \`category\` \`category\` enum ('alimentacao', 'saude', 'moradia', 'transporte', 'educacao', 'lazer', 'imprevistos', 'outras') NOT NULL DEFAULT 'outras'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`expense\` CHANGE \`category\` \`category\` enum ('1', '2', '3', '4', '5', '6', '7', '0') NOT NULL DEFAULT '0'`);
    }

}

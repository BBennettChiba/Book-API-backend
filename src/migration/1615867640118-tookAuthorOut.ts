import {MigrationInterface, QueryRunner} from "typeorm";

export class tookAuthorOut1615867640118 implements MigrationInterface {
    name = 'tookAuthorOut1615867640118'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "Author"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "book" ADD "Author" character varying NOT NULL`);
    }

}

import {MigrationInterface, QueryRunner} from "typeorm";

export class firstMigrationHopeThisWorks1615867390488 implements MigrationInterface {
    name = 'firstMigrationHopeThisWorks1615867390488'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "author" ("id" SERIAL NOT NULL, "fullName" character varying NOT NULL, CONSTRAINT "PK_5a0e79799d372fe56f2f3fa6871" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "book" ADD "authorId" integer`);
        await queryRunner.query(`ALTER TABLE "book" ADD CONSTRAINT "FK_66a4f0f47943a0d99c16ecf90b2" FOREIGN KEY ("authorId") REFERENCES "author"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "book" DROP CONSTRAINT "FK_66a4f0f47943a0d99c16ecf90b2"`);
        await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "authorId"`);
        await queryRunner.query(`DROP TABLE "author"`);
    }

}

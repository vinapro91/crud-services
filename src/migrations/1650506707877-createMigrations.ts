import {MigrationInterface, QueryRunner} from "typeorm";

export class createMigrations1650506707877 implements MigrationInterface {
    name = 'createMigrations1650506707877'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "fullName" character varying NOT NULL, "cpf" character varying NOT NULL, "alias" character varying NOT NULL, "gender" character varying NOT NULL, "phone" character varying NOT NULL, "comments" character varying, "profilePicture" character varying, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}

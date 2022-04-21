import { MigrationInterface, QueryRunner } from "typeorm";

export class firstCommit1650397345908 implements MigrationInterface {
  name = "firstCommit1650397345908";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "firstName"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "lastName"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "age"`);
    await queryRunner.query(
      `ALTER TABLE "user" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "fullName" character varying NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "cpf" character varying NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "alias" character varying NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "gender" character varying NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "phone" character varying NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "comments" character varying NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "profilePicture" character varying NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760"`
    );
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "id"`);
    await queryRunner.query(
      `ALTER TABLE "user" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760"`
    );
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "user" ADD "id" SERIAL NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")`
    );
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "profilePicture"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "comments"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phone"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "gender"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "alias"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "cpf"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "fullName"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updatedAt"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "createdAt"`);
    await queryRunner.query(`ALTER TABLE "user" ADD "age" integer NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "user" ADD "lastName" character varying NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "firstName" character varying NOT NULL`
    );
  }
}

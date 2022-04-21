import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  fullName: string;

  @Column()
  cpf: string;

  @Column()
  alias: string;

  @Column()
  gender: string;

  @Column()
  phone: string;

  @Column({ nullable: true })
  comments: string;

  @Column({ nullable: true })
  profilePicture: string;
}

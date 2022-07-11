import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Index,
} from "typeorm";

@Entity("Account")
export class Account {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", nullable: false, length: 20 })
  username: string;

  @Column({ type: "varchar", nullable: false, length: 150 })
  password: string;

  @CreateDateColumn()
  created_at: Date;
}

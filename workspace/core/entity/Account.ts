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

  @Column({ type: "text", nullable: false })
  username: string;

  @Column({ type: "text", nullable: false })
  password: string;

  @CreateDateColumn()
  created_at: Date;
}

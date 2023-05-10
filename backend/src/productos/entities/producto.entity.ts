import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProductoEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  productId?: number;

  @Column()
  price?: number;
  @Column()
  url?: string;
  @Column()
  codi?: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdDate: Date;
}
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Products } from './product.entity';

@Entity()
export class ProductImage {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id: number;

  @Column({ type: 'varchar', nullable: true })
  url: string;

  @ManyToOne(() => Products, (product) => product.images,{
    onDelete:'CASCADE'
  })
  product: Products;

}
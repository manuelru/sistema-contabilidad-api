import { Category } from "src/categoria/entities/category.entity";
import { Fabricante } from "src/fabricante/entities/fabricante.entity";
import { Inventario } from "src/inventario/entities/inventario.entity";
import { Proveedor } from "src/proveedores/entities/proveedor.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductImage } from "./product-image.entity";

@Entity()
export class Products {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id?: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  marca: string;

  @Column({ type: 'varchar', length: 300, nullable: false })
  description: string;

  @Column({ type: 'int4', nullable: false })
  price: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  //RELATIONS

  @ManyToOne(()=> User)
  @JoinColumn({
    name:'user_id',
    referencedColumnName:'id'
  })
  autor:User;

  @ManyToOne(()=> Category)
  @JoinColumn({
    name:'category_id',
    referencedColumnName:'id'
  })
  categoria:Category;

  @ManyToOne(()=> Proveedor)
  @JoinColumn({
    name:'proveedor_id',
    referencedColumnName:'id'
  })
  proveedor:Proveedor;

  @ManyToOne(()=> Inventario)
  @JoinColumn({
    name:'inventario_id',
    referencedColumnName:'id'
  })
  inventario:Inventario;


  @ManyToOne(()=> Fabricante)
  @JoinColumn({
    name:'fabricante_id',
    referencedColumnName:'id'
  })
  fabricante:Fabricante;

  @OneToMany(() => ProductImage, (productImage) => productImage.product, {
    cascade : true
  })
  images?:ProductImage[];

 
}
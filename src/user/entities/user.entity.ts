import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserImage } from "./user-image.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id?: number;

  @Column({ type: 'varchar', nullable: false })
  email: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  password: string;


  //Relaciones

  @OneToMany(() => UserImage, (userImage) => userImage.user, {
    cascade : true
  })
  images?:UserImage[];


}
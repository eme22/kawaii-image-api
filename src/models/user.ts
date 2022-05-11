import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, UpdateDateColumn, PrimaryColumn} from "typeorm";
import { Image } from "./image";

@Entity()
export class User {

    @PrimaryColumn()
    id!: string;

    @Column()
    name!: string;

    @Column({
        nullable: true
    })
    avatar!: string;

    @OneToMany(_type => Image, (image: Image) => image.userId)
    images!: Array<Image>

    @Column({
        type: 'boolean',
        default: false
    })
    admin!: boolean;
    
    @CreateDateColumn()
    createdAt!: Date;

}
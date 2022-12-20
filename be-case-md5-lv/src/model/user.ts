import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name:'users'})
export class User{
    @PrimaryGeneratedColumn({type:'int'})
    public readonly id: number;
    @Column({type:'varchar'})
    public name: string;
    @Column({type: 'varchar'})
    public password: string;
    @Column({type: 'int', default: 1}) // 1: user; 2: admin
    public role: string;
    @Column({type: 'int', default: 1}) // 1: mở; 2: lock
    public status: string;
}
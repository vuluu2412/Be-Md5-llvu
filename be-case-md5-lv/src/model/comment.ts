import {Column, Entity, PrimaryGeneratedColumn,} from "typeorm";
@Entity({name:'comments'})
export class Comment {
    @PrimaryGeneratedColumn({type: 'int'})
    public readonly id: number;
    @Column({type: 'int'})
    public idU: number;
    @Column({type: 'int'})
    public idP: number;
    @Column({type: 'varchar'})
    public content: string;
    @Column({type: 'varchar'})
    public time: string;
}
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    title: string;
    @Column()
    author: string;
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    publishedDate: Date;
}

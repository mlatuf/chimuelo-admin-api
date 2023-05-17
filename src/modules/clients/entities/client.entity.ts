import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IsInt, Min, Max } from 'class-validator';
import { Order } from 'src/modules/orders/entities/order.entity';

@Entity('client')
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  firstName: string;

  @Column('text')
  lastName: string;

  @Column('int', { nullable: true })
  @IsInt()
  @Min(0)
  @Max(15)
  phone: string;

  @Column('text', { nullable: true })
  instagram: string;

  @Column({ type: 'jsonb' })
  address: object;

  @OneToMany(() => Order, (order) => order.client)
  orders: Order[];
}

import { Order } from 'src/modules/orders/entities/order.entity';
import { Variant } from 'src/modules/variants/entities/variant.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('item')
export class Item {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('float')
  price: number;

  @OneToOne(() => Variant, (variant) => variant.item)
  variant: Variant;

  @ManyToOne(() => Order, (order) => order.items)
  order: Order;
}

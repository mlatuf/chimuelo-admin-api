import { Client } from 'src/modules/clients/entities/client.entity';
import { Item } from 'src/modules/items/entities/item.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

enum Status {
  PREPARED = 'prepared',
  NOT_PAYED = 'not payed',
  PAYED = 'payed',
  DELIVERED = 'delivered',
  CANCELED = 'canceled',
}

@Entity('order')
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'enum', enum: Status, default: Status.PREPARED })
  status: Status;

  @ManyToOne(() => Client, (client) => client.orders)
  client: Client;

  @OneToMany(() => Item, (item) => item.order, { cascade: true })
  items: Item[];

  @CreateDateColumn()
  createdAt: Date;
}

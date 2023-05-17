import { Item } from 'src/modules/items/entities/item.entity';
import { Product } from 'src/modules/products/entities/product.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('variant')
export class Variant {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  sku: string;

  @Column('float')
  price: number;

  @Column('int')
  stock: number;

  @ManyToOne(() => Product, (product) => product.variants)
  product: Product;

  @OneToOne(() => Item, (item) => item.variant)
  item: Item;

  @Column('text')
  size: string;

  @Column('text', { nullable: true })
  color: string;

  @Column('text', { nullable: true })
  design: string;

  @Column('text', { nullable: true })
  stamp: string;

  @Column('bool', { nullable: true })
  elastic: boolean;
}

import { Variant } from 'src/modules/variants/entities/variant.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column('float')
  costPrice: number;

  @OneToMany(() => Variant, (variant) => variant.product)
  variants: Variant[];
}

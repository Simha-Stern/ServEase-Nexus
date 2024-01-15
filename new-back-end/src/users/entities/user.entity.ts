import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import ImageDTO, { MyImage } from '../dto/image.dto';
import NameDTO, { MyName } from '../dto/name.dto';

@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: 'jsonb', nullable: true })
  name: MyName;

  @Column()
  phone: string;

  @Column()
  phone_password: string;

  @Column({ type: 'jsonb', nullable: true })
  image?: MyImage;

  @Column({ default: true })
  active: boolean;

  @Column({ default: false })
  isAdmin: boolean;
}

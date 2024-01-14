import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import ImageDTO from '../dto/image.dto';
import NameDTO from '../dto/name.dto';

@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  name: NameDTO;

  @Column()
  phone: string;

  @Column()
  phone_password: string;

  @Column()
  image?: ImageDTO;

  @Column({ default: true })
  active: boolean;

  @Column({ default: false })
  isAdmin: boolean;
}

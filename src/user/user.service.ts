import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const data = {
      email: createUserDto.email,
      name: createUserDto.name,
      password: await bcrypt.hash(createUserDto.password, 10),
    };

    // check if email is unique
    const existingUser = await this.findByEmail(createUserDto.email);
    if (existingUser) {
      throw new Error('Email already in use');
    }

    const createdUser = await this.prisma.user.create({ data });

    return { ...createdUser, password: undefined };
  }

  findByEmail(email: string) {
    const user = this.prisma.user.findUnique({ where: { email } });
    return user;
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}

import {
  ForbiddenException,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { configService } from 'src/config/config.service';
import * as bcrypt from 'bcrypt';
import errors from 'src/common/constants/errors';

@Injectable()
export class UsersService {
  salt: string;

  constructor(@InjectRepository(User) private readonly repo: Repository<User>) {
    this.salt = configService.getCryptSalt();
  }

  async create(createUserDto: CreateUserDto) {
    if (await this.emailExists(createUserDto.email)) {
      throw new UnprocessableEntityException(errors.USERS.EMAIL_ALREADY_EXISTS);
    }
    createUserDto.password = await bcrypt.hash(
      createUserDto.password,
      this.salt,
    );

    try {
      const response = this.repo
        .createQueryBuilder()
        .insert()
        .into(User)
        .values([createUserDto])
        .execute();

      return response;
    } catch (error) {
      console.log('error: ', error);
    }
  }

  private async emailExists(email: string): Promise<boolean> {
    const count = await this.repo.count({ email: email });
    console.log(count >= 1);
    return count >= 1;
  }

  findAll() {
    return `This action returns all users`;
  }

  private async findByEmail(email: string): Promise<User> {
    return this.repo
      .createQueryBuilder()
      .select('user')
      .from(User, 'user')
      .where('user.email = :email', { email: email })
      .getOne();
  }

  async findOne(id: number): Promise<User> {
    return this.repo
      .createQueryBuilder()
      .select('user')
      .from(User, 'user')
      .where('user.id = :id', { id: id })
      .getOne();
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async login(email: string, password: string) {
    const userDB = await this.findByEmail(email);
    const isMatch = await bcrypt.compare(password, userDB.password);

    if (!isMatch) {
      throw new ForbiddenException(errors.USERS.PASSWORD_EMAIL_DO_NOT_MATCH);
    }
    return userDB;
  }
}

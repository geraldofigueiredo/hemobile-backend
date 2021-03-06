import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserResponseDto } from './dto/user.response.dto';
import { LoginDto } from './dto/login.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/')
  async create(@Body() createUserDto: CreateUserDto) {
    const createResult = await this.usersService.create(createUserDto);
    const user = await this.usersService.findByID(
      createResult.identifiers[0].id,
    );
    return { uuid: user.uuid };
  }

  @Get(':uuid')
  async findOne(@Param('uuid') id: string): Promise<UserResponseDto> {
    const user = await this.usersService.findByUUID(id);
    return new UserResponseDto(user);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @Post('/login')
  async login(@Body() loginDto: LoginDto) {
    const user = await this.usersService.login(
      loginDto.email,
      loginDto.password,
    );

    console.log(user);
    return new UserResponseDto(user);
  }
}

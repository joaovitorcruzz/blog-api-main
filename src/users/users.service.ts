
import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'eli',
      email: 'joao@teste.com',
    },
    {
      userId: 2,
      username: 'joao',
      email: 'joao@teste.com',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}

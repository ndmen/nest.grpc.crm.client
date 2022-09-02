import { Controller, Logger, Get, Param } from '@nestjs/common';
import { Observable } from 'rxjs';
import { User, UserById } from 'src/_shared/interfaces';
import { UsersNestService } from './users.service';

@Controller('users')
export class UsersController {
  private logger = new Logger('UsersController');
  constructor(private usersNestService: UsersNestService, ) {}

  @Get(':id/all')
  getUsers(@Param('id') id: Observable<UserById>): Observable<User> {
    this.logger.log('Call HTTP method getUsers with id: ' + id);
    return this.usersNestService.getUsers(id);
  }

  @Get(':id')
  getUserById(@Param('id') id: UserById): Observable<User> {
    this.logger.log('Call HTTP method getUserById with id: ' + id);
    return this.usersNestService.getUser(+id);
  }

}

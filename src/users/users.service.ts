import { Logger, OnModuleInit, Injectable } from '@nestjs/common';
import { Client, ClientGrpc, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { Observable } from 'rxjs';
import { User, UserById, UsersService } from 'src/_shared/interfaces';

@Injectable()
export class UsersNestService implements OnModuleInit {
  @Client({
    transport: Transport.GRPC,
    options: {
      package: 'app',
      protoPath: join(__dirname, '../app.proto'),
    },
  })
  client: ClientGrpc;

  private logger = new Logger('UsersNestService');
  private usersService: UsersService;

  onModuleInit() {
    this.usersService = this.client.getService<UsersService>('UsersService');
  }

  getUser(id: number): Observable<User> {
    this.logger.log('Call gRPC method FindOne with id: ' + id);
    return this.usersService.FindOne({ id: id });
  }
}

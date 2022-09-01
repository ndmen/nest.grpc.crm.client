import { Observable } from 'rxjs';

export interface UserById {
  id: number;
}

export interface User {
  id: number;
  name: string;
}

export interface UsersService {
  FindOne(data: { id: number }): Observable<any>;
}

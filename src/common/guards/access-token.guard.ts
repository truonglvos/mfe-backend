import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class AccessTokenGuard extends AuthGuard('jwt') {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleRequest(err, user, _info, _context: ExecutionContext) {
    if (err || !user) {
      throw new UnauthorizedException('JWT_INVALID');
    }
    return user;
  }
}

import { CanActivate, ExecutionContext, Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Socket } from 'socket.io';

@Injectable()
export class WsJwtGuard implements CanActivate {
  private readonly logger = new Logger(WsJwtGuard.name);

  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const client: Socket = context.switchToWs().getClient<Socket>();
    const token = this.extractTokenFromSocket(client);

    if (!token) {
      this.logger.warn('No token provided');
      return false;
    }

    try {
      const payload = this.jwtService.verify(token);
      client['user'] = payload;
      return true;
    } catch (error) {
      this.logger.error('Token verification failed', error.stack);
      return false;
    }
  }

  private extractTokenFromSocket(client: Socket): string | null {
    const authHeader = client.handshake.headers.authorization;
    if (!authHeader) {
      return null;
    }

    const [bearer, token] = authHeader.split(' ');
    return bearer === 'Bearer' && token ? token : null;
  }
}

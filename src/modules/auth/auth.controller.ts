import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto, AuthRes } from './dto/auth.dto';
import { AccessTokenGuard } from '@guards/access-token.guard';
import { RefreshTokenGuard } from '@guards/refresh-token.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async create(@Body() createAuthDto: AuthDto): Promise<AuthRes> {
    return this.authService.login(createAuthDto);
  }

  @UseGuards(AccessTokenGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @UseGuards(AccessTokenGuard)
  @Post('logout')
  logout(@Request() req) {
    this.authService.logout(req.user['sub']);
  }

  @UseGuards(RefreshTokenGuard)
  @Get('refresh')
  async refreshTokens(@Request() req): Promise<any> {
    const userId = req.user['sub'];
    const refreshToken = req.user['refreshToken'];
    console.log('@@@userId', userId);
    console.log('@@@refreshToken', refreshToken);
    return await this.authService.refreshTokens(userId, refreshToken);
  }
}

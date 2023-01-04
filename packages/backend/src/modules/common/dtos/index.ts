import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class TokenDTO {
  @ApiProperty()
  token: string;
}

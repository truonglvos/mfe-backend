import { ApiProperty } from '@nestjs/swagger';

export class BaseBuilder {
  @ApiProperty()
  id?: string;
  @ApiProperty()
  indexElement?: number;
  @ApiProperty()
  source?: string;
  @ApiProperty()
  builderSource?: string;
}

import { ApiProperty } from '@nestjs/swagger';

export class RouterConfigDto {
  @ApiProperty()
  id?: string;
  @ApiProperty()
  type?: string;
  @ApiProperty()
  remoteEntry: string;
  @ApiProperty()
  exposedModule: string;
  @ApiProperty()
  path?: string;
  @ApiProperty()
  menu?: string;
  @ApiProperty()
  guard?: boolean;
}

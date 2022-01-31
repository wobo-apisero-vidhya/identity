import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class OkResponse {
  @ApiModelPropertyOptional() accessToken: string;
}

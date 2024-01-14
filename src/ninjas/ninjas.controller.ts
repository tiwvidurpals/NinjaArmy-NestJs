import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {
  //GET /ninjas?type=fast --> []
  @Get()
  getNinjas(@Query('type') type: string) {
    return [{ type }];
  }

  //GET /ninjas/:id --> {...}
  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return { id };
  }

  //POST /ninjas
  @Post()
  createNinja() {
    return {};
  }

  //PUT /ninjas/:id ---->{...}
  @Put(':id')
  updateNinja(@Param('id') id: string) {
    return {};
  }

  //DELETE /ninjas/:id
  @Delete(':id')
  removeNinja(@Param('id') id: string) {
    return {};
  }
}

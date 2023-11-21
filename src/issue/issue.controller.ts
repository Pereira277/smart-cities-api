import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
} from '@nestjs/common';
import { IssueService } from './issue.service';
import { CreateIssueDto } from './dto/create-issue.dto';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@Controller('issue')
export class IssueController {
  constructor(private readonly issueService: IssueService) {}

  @Post()
  create(@Body() createIssueDto: CreateIssueDto, @Request() req) {
    return this.issueService.create(createIssueDto, req.user.id);
  }

  @Get()
  findAll() {
    return this.issueService.findAll();
  }

  @Get('user')
  findByAuthorId(@Request() req) {
    return this.issueService.findByAuthorId(req.user.id);
  }

  // not implemented

  @Get(':id')
  findOne() {
    return this.issueService.findOne();
  }
  @Get(':city')
  findByCity() {
    return this.issueService.findByCity();
  }
  @Patch(':id')
  update() {
    return this.issueService.update();
  }
  @Delete(':id')
  remove() {
    return this.issueService.remove();
  }
}

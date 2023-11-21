import { Injectable } from '@nestjs/common';
import { CreateIssueDto } from './dto/create-issue.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class IssueService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createIssueDto: CreateIssueDto, authorId: number) {
    const data = {
      title: createIssueDto.title,
      description: createIssueDto.description,
      city: createIssueDto.city,
      state: createIssueDto.state,
      status: createIssueDto.status,
      authorId: authorId,
    };
    console.log(data);

    const createdIssue = await this.prisma.issue.create({ data });
    return createdIssue;
  }

  async findAll() {
    const issues = await this.prisma.issue.findMany();
    return issues;
  }

  findByAuthorId(authorId: number) {
    const issues = this.prisma.issue.findMany({
      where: {
        authorId: authorId,
      },
    });
    return issues;
  }

  //   not implemented
  remove() {
    throw new Error('Method not implemented.');
  }
  update() {
    throw new Error('Method not implemented.');
  }
  findByCity() {
    throw new Error('Method not implemented.');
  }
  findOne() {
    throw new Error('Method not implemented.');
  }
}

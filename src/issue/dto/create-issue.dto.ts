import { IsIn, IsString, MaxLength, MinLength } from 'class-validator';
import { Issue } from '../entities/issue.entity';

const statusOptions = ['open', 'closed', 'in-progress'];

export class CreateIssueDto extends Issue {
  @IsString()
  @MinLength(4)
  @MaxLength(50)
  title: string;

  @IsString()
  description: string;

  @IsIn(statusOptions)
  status: string;

  @IsString()
  city: string;

  @IsString()
  state: string;
}

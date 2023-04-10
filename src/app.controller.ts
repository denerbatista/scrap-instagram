import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { InstagramCommentScraperService } from './app.service';

@ApiTags('Comments') // Adicione as tags que você desejar
@Controller('comments')
export class InstagramCommentController {
  constructor(
    private readonly commentScraperService: InstagramCommentScraperService,
  ) {}

  @ApiOperation({ summary: 'Obter comentários do Instagram' }) // Adicione descrições e sumários às suas rotas
  @Get(':url')
  async getComments(@Param('url') url: string): Promise<any[]> {
    const comments = await this.commentScraperService.scrapeComments(url);
    return comments;
  }
}

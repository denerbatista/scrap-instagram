import { Module } from '@nestjs/common';
import { InstagramCommentController } from './app.controller';
import { InstagramCommentScraperService } from './app.service';

@Module({
  controllers: [InstagramCommentController],
  providers: [InstagramCommentScraperService],
})
export class AppModule {}

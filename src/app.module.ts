import { Module } from '@nestjs/common';
import { InstagramCommentController } from './app.controller';
import { InstagramCommentScraperService } from './app.service';
import { StatusController } from './status.controller';

@Module({
  controllers: [InstagramCommentController, StatusController],
  providers: [InstagramCommentScraperService],
})
export class AppModule {}

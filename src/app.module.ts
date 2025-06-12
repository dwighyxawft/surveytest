import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './resources/movies/movies.module';
import { QrModule } from './resources/qr/qr.module';

@Module({
  imports: [MoviesModule, QrModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

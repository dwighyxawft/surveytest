import { Controller, Get } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from '../types/movie.type';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get('random')
  async getRandomMovies(): Promise<Movie[]> {
    return this.moviesService.getRandomMovies();
  }
}

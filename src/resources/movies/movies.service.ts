// src/movies/movies.service.ts
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { Movie } from '../types/movie.type';

@Injectable()
export class MoviesService {
  private readonly moviesUrl =
    'https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/';

  constructor(private readonly httpService: HttpService) {}

  async getRandomMovies(): Promise<Movie[]> {
    try {
      const response = await firstValueFrom(
        this.httpService.get<Movie[]>(this.moviesUrl),
      );
      const allMovies: Movie[] = response.data as Movie[];

      if (!Array.isArray(allMovies)) {
        throw new InternalServerErrorException('Invalid movie data format.');
      }

      const shuffled = allMovies.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 10);
    } catch (error) {
      if (error && typeof error === 'object' && 'message' in error) {
        console.error('Error fetching movies:', error.message);
      } else {
        console.error('Error fetching movies:', error);
      }
      throw new InternalServerErrorException('Could not fetch movies.');
    }
  }
}

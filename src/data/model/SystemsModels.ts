export interface RequestMovieDetail {
  movieID: string;
  language?: string;
  include_image_language?: string | 'en';
}

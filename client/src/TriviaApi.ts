import * as moment from 'moment';
import { GameDescription } from 'trivia-common/GameDescription';

export default class TriviaApi {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public getUpcomingGames = async () => [
    {
      id: 'B26354',
      name: 'Blade Runner Trivia',
      posterImageUrl: 'http://localhost:3000/images/blade-runner.jpg',
      description: '<p>Blade Runner trivia questions</p><p>Wake up. Time to die.</p>',
      openingTime: moment().add(25, 'minute').toISOString(),
      startingTime: moment().add(55, 'minute').toISOString(),
      durationInMin: 10,
    } as GameDescription,
    {
      id: 'MNKTBC100',
      name: 'MN Kink Theory Book Club Trivia',
      posterImageUrl: 'http://localhost:3000/images/book-club.jpg',
      description: '<p>Test your Kink Theory.</p>',
      openingTime: moment().add(75, 'minute').toISOString(),
      startingTime: moment().add(105, 'minute').toISOString(),
      durationInMin: 20,
    } as GameDescription,
  ];
}

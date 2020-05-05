import { GameDescription } from 'trivia-common/GameDescription';

export default class TriviaApi {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public getUpcomingGames = async () => [
    {
      name: 'Blade Runner Trivia',
      posterImageUrl: 'http://localhost:3000/images/blade-runner.jpg',
      description: '<p>Blade Runner trivia questions</p><p>Wake up. Time to die.</p>',
      openingTime: new Date().toISOString(),
      startingTime: new Date().toISOString(),
      durationInMin: 10,
      joinUrl: 'http://localhost:3000/game/B26354/join',
    } as GameDescription,
    {
      name: 'MN Kink Theory Book Club Trivia',
      posterImageUrl: 'http://localhost:3000/images/book-club.jpg',
      description: '<p>Test your Kink Theory.</p>',
      openingTime: new Date().toISOString(),
      startingTime: new Date().toISOString(),
      durationInMin: 20,
      joinUrl: 'http://localhost:3000/game/MNKTBC100/join',
    } as GameDescription,
  ];
}

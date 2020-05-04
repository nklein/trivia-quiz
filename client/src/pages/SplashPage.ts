import $ from 'jquery';

import Page from './Page';

import { GameDescription } from 'trivia-common/GameDescription';

import style from './splash-page.css';

const styles = [style];

export default class SplashPage extends Page {
  private descriptions: Array<GameDescription> = [
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
      name: 'MN Kink Theory Book Club Triva',
      posterImageUrl: 'http://localhost:3000/images/book-club.jpg',
      description: '<p>Test your Kink Theory.</p>',
      openingTime: new Date().toISOString(),
      startingTime: new Date().toISOString(),
      durationInMin: 20,
      joinUrl: 'http://localhost:3000/game/MNKTBC100/join',
    } as GameDescription,
  ];

  constructor() {
    super('#splash');

    const body = $(this.contents).find('.body');
    body.empty();

    this.descriptions.map((desc: GameDescription) => {
      body.append(this.makeGameSummaryCard(desc));
    });
  }

  private makeGameSummaryCard = (desc: GameDescription) => {
    const fragment = $('#splash-card').prop('content').cloneNode(true);
    const card = $(fragment).find('.card');
    card.find('.game-poster').attr('src', desc.posterImageUrl);
    card.find('.game-poster').attr('alt', `poster image for ${desc.name}`);
    card.find('.game-name').text(desc.name);
    card.find('.game-description').html(desc.description);
    card.find('.game-opening-time').text(desc.openingTime);
    card.find('.game-starting-time').text(desc.startingTime);
    card.find('.game-duration').text(desc.durationInMin);
    card.attr('data-join-url', desc.joinUrl);
    return card;
  };
}

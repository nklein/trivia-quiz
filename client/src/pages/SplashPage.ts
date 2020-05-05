import * as $ from 'jquery';
import * as moment from 'moment';

import { GameDescription } from 'trivia-common/GameDescription';
import TriviaApi from '../TriviaApi';
import Page from './Page';

import style from './splash-page.css';
const styles = [style];

export default class SplashPage extends Page {
  constructor(api: TriviaApi) {
    super('#splash');

    const body = $(this.contents).find('.body');
    body.empty();

    api.getUpcomingGames().then((descriptions) =>
      descriptions.map((desc: GameDescription) => {
        body.append(this.makeGameSummaryCard(desc));
      }),
    );
  }

  private makeGameSummaryCard = (desc: GameDescription) => {
    const card = $($('#splash-card').prop('content').cloneNode(true).querySelector('.card'));
    card.find('.game-poster').attr('src', desc.posterImageUrl);
    card.find('.game-poster').attr('alt', `poster image for ${desc.name}`);
    card.find('.game-name').text(desc.name);
    card.find('.game-description').html(desc.description);
    card.find('.game-opening-time').text(this.formatTime(desc.openingTime));
    card.find('.game-starting-time').text(this.formatTime(desc.startingTime));
    card.find('.game-duration').text(this.formatDuration(desc.durationInMin));
    card.attr('data-join-url', desc.joinUrl);
    return card;
  };

  private formatTime = (date: string) => `${moment(date).format('lll')} (${moment(date).fromNow()})`;

  private formatDuration = (durationInMin: number) => `${moment.duration(durationInMin, 'minute').humanize()}`;
}

import * as $ from 'jquery';
import * as moment from 'moment';

import IPager from './IPager';
import Page from './Page';
import JoinPage from './JoinPage';
import TriviaApi from '../TriviaApi';
import { GameDescription } from 'trivia-common/GameDescription';

import style from './splash-page.css';
const styles = [style];

export default class SplashPage extends Page {
  private _isLoaded: Promise<boolean>;

  constructor(pager: IPager, api: TriviaApi) {
    super('#splash');

    const body = $(this.contents).find('.body');
    body.empty();

    this._isLoaded = new Promise((resolve) =>
      api
        .getUpcomingGames()
        .then((descriptions) =>
          descriptions.map((desc: GameDescription) => {
            body.append(this.makeGameSummaryCard(desc, pager, api));
          }),
        )
        .then(() => resolve(true)),
    );
  }

  public get isLoaded() {
    return this._isLoaded;
  }

  private makeGameSummaryCard = (desc: GameDescription, pager: IPager, api: TriviaApi) => {
    const card = $($('#splash-card').prop('content').cloneNode(true).querySelector('.card'));
    card.find('.game-poster').attr('src', desc.posterImageUrl);
    card.find('.game-poster').attr('alt', `poster image for ${desc.name}`);
    card.find('.game-name').text(desc.name);
    card.find('.game-description').html(desc.description);
    card.find('.game-opening-time').text(this.formatTime(desc.openingTime));
    card.find('.game-starting-time').text(this.formatTime(desc.startingTime));
    card.find('.game-duration').text(this.formatDuration(desc.durationInMin));
    card.find('.join-button').click(() => pager.showPage(new JoinPage(pager, api, desc.id, desc.name)));
    return card;
  };

  private formatTime = (date: string) => `${moment(date).format('lll')} (${moment(date).fromNow()})`;

  private formatDuration = (durationInMin: number) => `${moment.duration(durationInMin, 'minute').humanize()}`;
}

import * as $ from 'jquery';

import TriviaApi from '../TriviaApi';
import IPager from './IPager';
import Page from './Page';

import style from './join-page.css';
const styles = [style];

export default class JoinPage extends Page {
  constructor(pager: IPager, api: TriviaApi, gameId: string, gameName: string) {
    super('#join');

    $(this.contents).find('.game-name').text(gameName);
  }
}

import * as $ from 'jquery';

import TriviaApi from '../TriviaApi';
import IPager from './IPager';
import Page from './Page';

import style from './join-page.css';
const styles = [style];

export default class JoinPage extends Page {
  constructor(pager: IPager, api: TriviaApi, gameId: string, gameName: string) {
    super('#join');

    const base = $(this.contents);
    base.find('.game-name').text(gameName);
    base.find('.team-option-panel').hide();

    base.find('#team-type').change(() => {
      base.find('.team-option-panel').hide();
      const selector = base.find('#team-type').val().toString();
      base.find(selector).show();
    });
  }

  public show() {
    super.show();
    $(this.contents).find('#team-type').change();
  }
}

import $ from 'jquery';

import Page from './Page';

import style from './splash-page.css';

const styles = [
    style
];

export default class SplashPage extends Page {

  constructor() {
    super('#splash');

    $(this.contents)
      .find('.body')
      .text('Splash page initialized.');
  }
}

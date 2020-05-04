import $ from 'jquery';

import style from './style.css';

const styles = [
    style
];

export default class TriviaApp {

  public restartApp = () => {
    this.showPage('#splash');
  };

  public showPage = (selector: string) => {
    $('section.page').addClass('hidden');
    $(selector).removeClass('hidden');
  };
}

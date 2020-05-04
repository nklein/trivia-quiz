import $ from 'jquery';

import style from './style.css';

import Page from './pages/Page';
import SplashPage from './pages/SplashPage';

const styles = [
    style
];

export default class TriviaApp {

  private curPage : Page

  public restartApp = () => {
    this.showPage(new SplashPage());
  };

  public showPage = (page: Page) => {
    const main = $('#main');
    main.empty().append(page.contents);
  };
}

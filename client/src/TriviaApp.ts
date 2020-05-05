import $ from 'jquery';

import custom from './custom.css';
import bootstrapStyle from 'bootstrap/dist/css/bootstrap.min.css';

import TriviaApi from './TriviaApi';
import Page from './pages/Page';
import SplashPage from './pages/SplashPage';

const depends = [custom, bootstrapStyle];

export default class TriviaApp {
  private api: TriviaApi;

  constructor(api: TriviaApi) {
    this.api = api;
  }

  public restartApp = () => {
    this.showPage(new SplashPage(this.api));
  };

  public showPage = (page: Page) => {
    const main = $('#main');
    main.empty().append(page.contents);
  };
}

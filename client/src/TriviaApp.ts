import * as $ from 'jquery';

import custom from './custom.css';
import bootstrapStyle from 'bootstrap/dist/css/bootstrap.min.css';

import TriviaApi from './TriviaApi';
import IPager from './pages/IPager';
import Page from './pages/Page';
import SplashPage from './pages/SplashPage';

const depends = [custom, bootstrapStyle];

export default class TriviaApp implements IPager {
  private api: TriviaApi;

  constructor(api: TriviaApi) {
    this.api = api;
  }

  public restartApp = () => {
    this.showPage(new SplashPage(this, this.api));
  };

  public showPage = (page: Page) => {
    const main = $('#main');
    main.empty().append(page.contents);
    page.show();
  };
}

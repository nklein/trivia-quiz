import $ from 'jquery';

import custom from './custom.css';
import bootstrap from 'bootstrap';
import bootstrapStyle from 'bootstrap/dist/css/bootstrap.min.css';

import Page from './pages/Page';
import SplashPage from './pages/SplashPage';

const depends = [custom, bootstrap, bootstrapStyle];

export default class TriviaApp {
  private curPage: Page;

  public restartApp = () => {
    this.showPage(new SplashPage());
  };

  public showPage = (page: Page) => {
    const main = $('#main');
    main.empty().append(page.contents);
  };
}

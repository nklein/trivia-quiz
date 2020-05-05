import $ = require('jquery');
import * as moment from 'moment';
import { mock } from 'jest-mock-extended';

import TriviaApi from '@/TriviaApi';
import SplashPage from '@/pages/SplashPage';

const _global = global as any;

describe('SplashPage tests', () => {
  const api = mock<TriviaApi>();
  const pageTemplate = () =>
    $(`
        <template id="splash">
          <section class="page splash-page">
            <div class="body">
              <p>Splash page is loading...</p>
            </div>
          </section>
        </template>
`);
  const cardTemplate = () =>
    $(`
        <template id="splash-card">
          <div class="card col-12 col-sm-6 col-md-4">
            <img class="game-poster card-image-top" />
            <div class="card-body">
              <h3 class="game-name"></h3>
              <div class="game-description card-text"></div>
              <a href="#" class="btn btn-primary">Join</a>
            </div>
          </div>
        </template>
`);

  beforeEach(() => {
    $('body').empty().append(pageTemplate()).append(cardTemplate());

    api.getUpcomingGames.mockClear();
    api.getUpcomingGames.mockImplementation(async () => [
      {
        id: 'id',
        name: 'game name',
        posterImageUrl: 'poster-url',
        description: 'description',
        openingTime: moment().add(25, 'minute').toISOString(),
        startingTime: moment().add(55, 'minute').toISOString(),
        durationInMin: 10,
      },
    ]);
  });

  test('Can construct', () => {
    expect(new SplashPage(api)).toBeTruthy();
  });

  test('Require page template to construct', () => {
    $('body').empty().append(cardTemplate());
    expect(() => new SplashPage(api)).toThrow();
  });
});

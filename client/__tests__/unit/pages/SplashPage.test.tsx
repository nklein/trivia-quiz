import $ = require('jquery');
import * as moment from 'moment';
import { mock } from 'jest-mock-extended';

import * as originalJoinPage from '@/pages/JoinPage';
jest.mock('@/pages/JoinPage');
const mockedJoinPage = originalJoinPage as jest.Mocked<typeof originalJoinPage>;
const JoinPage = mockedJoinPage.default;

import TriviaApi from '@/TriviaApi';
import IPager from '@/pages/IPager';
import SplashPage from '@/pages/SplashPage';

const _global = global as any;

describe('SplashPage tests', () => {
  const pager = mock<IPager>();
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
              <a href="#" class="join-button btn btn-primary">Join</a>
            </div>
          </div>
        </template>
`);

  beforeEach(() => {
    $('body').empty().append(pageTemplate()).append(cardTemplate());

    pager.showPage.mockClear();
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
    expect(new SplashPage(pager, api)).toBeTruthy();
  });

  test('Require page template to construct', () => {
    $('body').empty().append(cardTemplate());
    expect(() => new SplashPage(pager, api)).toThrow();
  });

  test('Require card template to load', async () => {
    $('body').empty().append(cardTemplate());
    await expect(async () => {
      const splash = new SplashPage(pager, api);
      await splash.isLoaded;
    }).rejects.toThrow();
  });

  test('Join button shows Join pagex', async () => {
    const splash = new SplashPage(pager, api);
    await splash.isLoaded;
    $(splash.contents).find('.join-button').click();
    expect(pager.showPage).toBeCalled();
  });
});

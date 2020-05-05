import * as $ from 'jquery';

import * as original from '@/pages/SplashPage';
jest.mock('@/pages/SplashPage');

const mocked = original as jest.Mocked<typeof original>;
const SplashPage = mocked.default;

import TriviaApi from '@/TriviaApi';
import TriviaApp from '@/TriviaApp';

describe('TriviaApp tests', () => {
  const api = ({} as any) as TriviaApi;
  let app: TriviaApp;

  beforeEach(() => {
    app = new TriviaApp(api);
    SplashPage.mockClear();
    $('body').empty().append($('<div>').prop('id', 'main'));
  });

  test('Can construct', () => {
    expect(app).toBeTruthy();
  });

  test('Reset creates a SplashPage', () => {
    app.restartApp();
    expect(SplashPage).toHaveBeenCalled();
  });
});

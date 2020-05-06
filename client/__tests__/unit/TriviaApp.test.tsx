import * as $ from 'jquery';

import SplashPage from '@/pages/SplashPage';
const splash = ({
  show: jest.fn(),
} as any) as SplashPage;

jest.mock('@/pages/SplashPage', () => {
  return {
    default: () => splash,
  };
});

import TriviaApi from '@/TriviaApi';
import TriviaApp from '@/TriviaApp';

describe('TriviaApp tests', () => {
  const api = ({} as any) as TriviaApi;
  let app: TriviaApp;

  beforeEach(() => {
    app = new TriviaApp(api);
    $('body').empty().append($('<div>').prop('id', 'main'));
  });

  test('Can construct', () => {
    expect(app).toBeTruthy();
  });

  test('Reset creates a SplashPage and shows it', () => {
    app.restartApp();
    expect(splash.show).toHaveBeenCalled();
  });
});

import * as original from '@/pages/SplashPage';
jest.mock('@/pages/SplashPage');

const mocked = original as jest.Mocked<typeof original>;
const SplashPage = mocked.default;

import TriviaApp from '@/TriviaApp';

describe('TriviaApp tests', () => {
  let app: TriviaApp;

  beforeEach(() => {
    app = new TriviaApp();
    SplashPage.mockClear();
  });

  test('Can construct', () => {
    expect(app).toBeTruthy();
  });

  test('Reset creates a SplashPage', () => {
    app.restartApp();
    expect(SplashPage).toHaveBeenCalled();
  });
});

import TriviaApp from '@/TriviaApp';

describe('TriviaApp tests', () => {
  let app: TriviaApp;

  beforeEach(() => {
    app = new TriviaApp();
  });

  test('Can construct', () => {
    expect(app).toBeTruthy();
  });
  test('Can reset', () => {
    expect(() => app.restartApp()).not.toThrow();
  });
});

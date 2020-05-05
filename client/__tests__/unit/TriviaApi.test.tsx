import TriviaApi from '@/TriviaApi';

describe('TriviaApi tests', () => {
  const api = new TriviaApi('base-url');

  test('Can construct', () => {
    expect(api).toBeTruthy();
  });
  test('Can fetch upcoming games', async () => {
    expect(await api.getUpcomingGames()).toBeTruthy();
  });
});

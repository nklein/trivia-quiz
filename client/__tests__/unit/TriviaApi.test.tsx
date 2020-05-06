import TriviaApi, { UnknownGameError, UnknownTeamError } from '@/TriviaApi';

import { GameDescription } from 'trivia-common/GameDescription';
import { JoinRequest } from 'trivia-common/JoinRequest';

describe('TriviaApi tests', () => {
  const api = new TriviaApi('base-url');
  const gameId = 'B26354';
  const name = 'me';
  const teamName = 'team';
  const joinCode = 't1';

  describe('Upcoming games tests', () => {
    test('Can construct', () => {
      expect(api).toBeTruthy();
    });

    test('Can fetch upcoming games', async () => {
      const results = await api.getUpcomingGames();
      expect(results.find((gd: GameDescription) => gd.id == gameId)).toBeTruthy();
    });
  });

  describe('Enter game tests', () => {
    test('Can enter game with name but no team', async () => {
      const results = await api.enterGame(gameId, { name } as JoinRequest);
      expect(results).toBeTruthy();
    });

    test('Can enter game with team', async () => {
      const results = await api.enterGame(gameId, { name, teamName } as JoinRequest);
      expect(results).toBeTruthy();
    });

    test('Can enter game with join code', async () => {
      const results = await api.enterGame(gameId, { name, joinCode } as JoinRequest);
      expect(results).toBeTruthy();
    });

    test('Fail entering game with bad game id', async () => {
      await expect(() => api.enterGame('-', { name } as JoinRequest)).rejects.toThrow(UnknownGameError);
    });

    test('Fail entering game with bad join code', async () => {
      await expect(() => api.enterGame(gameId, { name, joinCode: '-' } as JoinRequest)).rejects.toThrow(
        UnknownTeamError,
      );
    });
  });
});

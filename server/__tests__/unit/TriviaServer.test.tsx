import TriviaServer from '@/TriviaServer';

import express from 'express';

describe('Trivia Server tests', () => {
  const srvr = {
    close: jest.fn(),
  };
  const app = {
    use: jest.fn(),
    listen: jest.fn((p: number, cb: () => any) => {
      cb();
      return srvr;
    }),
  };
  let trivia: TriviaServer;

  beforeEach(() => {
    app.use.mockClear();
    app.listen.mockClear();
    srvr.close.mockClear();

    trivia = new TriviaServer(app as any as express.Application);
  });

  test('Can construct', () => {
    expect(trivia).toBeTruthy();
    expect(app.use).toBeCalled();
    expect(app.listen).not.toBeCalled();
    expect(srvr.close).not.toBeCalled();
  });

  test('Listen on server calls listen on express app', async () => {
    await trivia.listen(80);
    expect(trivia).toBeTruthy();
    expect(app.use).toBeCalled();
    expect(app.listen).toBeCalled();
    expect(srvr.close).not.toBeCalled();
  });

  test('Close on server calls close on express server', async () => {
    await trivia.listen(80);
    await trivia.close();
    expect(srvr.close).toBeCalled();
  });
});

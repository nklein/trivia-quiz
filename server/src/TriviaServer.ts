import * as express from 'express';
import { Server } from 'http';

export default class TriviaServer {
  private readonly app: express.Application;
  private server: Server | undefined;

  constructor(app: express.Application) {
    this.app = app;
    this.server = undefined;

    this.app.use(express.static('public'));
  }

  public listen = async (port: number) =>
    (this.server = this.app.listen(port, () => {
      console.log(`Server started on ${port}`);
    }));

  public close = async () => {
    const srvr = this.server!;
    this.server = undefined;
    return srvr.close();
  };
}

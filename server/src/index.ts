import * as express from 'express';
import TriviaServer from './TriviaServer';

const app = express();
const server = new TriviaServer(app);
server.listen(3000);

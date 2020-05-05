import TriviaApi from './TriviaApi';
import TriviaApp from './TriviaApp';

const _global = window as any;
_global.trivia = new TriviaApp(new TriviaApi('http://localhost:3000/'));

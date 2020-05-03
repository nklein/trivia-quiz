import $ from 'jquery';

import config from './config.json';
import style from './style.css';

const _global = window as any;

_global.initTriviaApp = (blah: string) => {
  style;
  $('body')
    .append($('<h1>').text(`initTriviaApp(${blah})`))
    .append($('<pre>').text(JSON.stringify(config)));
};

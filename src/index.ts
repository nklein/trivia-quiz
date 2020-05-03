import $ from 'jquery';

const _global = window as any;

_global.initTriviaApp = (blah: string) => {
  $('body').append($('<h1>').text(`initTriviaApp(${blah})`));
};

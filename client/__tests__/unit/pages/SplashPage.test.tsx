import $ from 'jquery';
import SplashPage from '@/pages/SplashPage';

const _global = global as any;

describe('SplashPage tests', () => {
  const pageTemplate = () =>
    $(`
        <template id="splash">
          <section class="page splash-page">
            <div class="body">
              <p>Splash page is loading...</p>
            </div>
          </section>
        </template>
`);
  const cardTemplate = () =>
    $(`
        <template id="splash-card">
          <div class="card col-12 col-sm-6 col-md-4">
            <img class="game-poster card-image-top" />
            <div class="card-body">
              <h3 class="game-name"></h3>
              <div class="game-description card-text"></div>
              <a href="#" class="btn btn-primary">Join</a>
            </div>
          </div>
        </template>
`);

  beforeEach(() => {
    $('body').empty().append(pageTemplate()).append(cardTemplate());
  });

  test('Can construct', () => {
    expect(new SplashPage()).toBeTruthy();
  });

  test('Require page template to construct', () => {
    $('body').empty().append(cardTemplate());
    expect(() => new SplashPage()).toThrow();
  });

  test('Requires card template to construct', () => {
    $('body').empty().append(pageTemplate());
    expect(() => new SplashPage()).toThrow();
  });
});

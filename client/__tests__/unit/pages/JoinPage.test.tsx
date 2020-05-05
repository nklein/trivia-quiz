import $ = require('jquery');
import * as moment from 'moment';
import { mock } from 'jest-mock-extended';

import TriviaApi from '@/TriviaApi';
import IPager from '@/pages/IPager';
import JoinPage from '@/pages/JoinPage';

const _global = global as any;

describe('JoinPage tests', () => {
  const pager = mock<IPager>();
  const api = mock<TriviaApi>();
  const pageTemplate = () =>
    $(`
        <template id="join">
          <section class="page join-page">
            <div class="container">
              <h1>Join: <span class="game-name"></span></h1>
              <div class="body">
                <form id="join-form">
                  <div class="row">
                    <label class="col-3">Name</label>
                    <input id="name-field" type="text" class="col-8">
                  </div>
                </form>
              </div>
            </div>
          </section>
        </template>
`);

  let join: JoinPage;

  beforeEach(() => {
    $('body').empty().append(pageTemplate());

    pager.showPage.mockClear();
    join = new JoinPage(pager, api, 'id', 'name');
  });

  test('Require page template to construct', () => {
    $('body').empty();
    expect(() => new JoinPage(pager, api, 'id', 'name')).toThrow();
  });
});

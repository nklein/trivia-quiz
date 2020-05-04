import '@testing-library/jest-dom';
import { JSDOM } from 'jsdom';

const jsdom = new JSDOM(`<DOCTYPE html>
<html>
<head></head>
<body>
<section style="display: none;">
  <template id="splash">
    <div class="page splash-page">
      <div class="body">fun</div>
    </div>
  </template>
  <template id="splash-card">
    <div class="card">
      <div class="body">fun</div>
    </div>
  </template>
</section>
</body>
</html>
`);

const { window } = jsdom;
const { document } = window;

const _global = (global as any);
_global.window = window;
_global.document = document;

import $ from 'jquery';
_global.jQuery = $;

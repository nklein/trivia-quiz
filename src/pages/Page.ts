import $ from 'jquery';

import style from './page.css';

const styles = [
    style
];

export default class Page {

  protected readonly _contents: DocumentFragment;

  constructor(templateSelector: string) {
    this._contents = $(templateSelector).prop('content').cloneNode(true);
  }

  public get contents() { return this._contents; }
}

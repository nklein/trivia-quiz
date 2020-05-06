import * as $ from 'jquery';

import style from './page.css';

const styles = [style];

export default class Page {
  private readonly _contents: DocumentFragment;

  constructor(templateSelector: string) {
    this._contents = $(templateSelector).prop('content').cloneNode(true).querySelector('.page');
  }

  public get contents() {
    return this._contents;
  }

  public show(): any {}
}

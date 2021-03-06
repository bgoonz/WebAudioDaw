/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
import { TemplateResult } from "../lit-html.js";
export { html, svg, TemplateResult } from "../lit-html.js";
declare global {
  interface Window {
    ShadyCSS: any;
  }
  class ShadowRoot {}
}
export declare function render(
  result: TemplateResult,
  container: Element | DocumentFragment,
  scopeName: string
): void;

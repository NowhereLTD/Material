/**
 * This is the parent Material Design Component
 */
export class MDC extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({mode: "open"});
  }
}
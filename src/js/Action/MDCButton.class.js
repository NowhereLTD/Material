import {MDC} from "../MDC.class.js";

/**
 * The basic Material button component
 */
export class MDCButton extends MDC {
  constructor() {
    super();
    if(this.hasAttribute("icon")) {
      this.icon = document.createElement("span");
      this.appendChild(this.icon);
    }

    this.label = document.createElement("span");
    this.label.innerText = this.hasAttribute("label") ? this.getAttribute("label") : "Placeholder";
    this.appendChild(this.label);
  }
}
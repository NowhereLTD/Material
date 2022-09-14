import {MDC} from "../MDC.class.js";

/**
 * The basic Material button component
 */
export class MDCButton extends MDC {
  constructor() {
    super();

    this.label = document.createElement("span");
    if(this.hasAttribute("label")) {
      this.label.innerText = this.getAttribute("label");
      this.removeAttribute("label");
    }else if(this.innerText != undefined) {
      this.label.innerText = this.innerText;
      this.innerText = "";
    }else {
      this.label.innerText = "Placeholder";
    }

    if(this.hasAttribute("icon")) {
      this.icon = document.createElement("span");
      this.appendChild(this.icon);
    }

    this.appendChild(this.label);
  }
}
import { html, TemplateResult } from "lit";
import { LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "@spectrum-web-components/action-button/sp-action-button.js";
import "@spectrum-web-components/popover/sp-popover.js";
import "@spectrum-web-components/overlay/overlay-trigger.js";

@customElement("nav-button")
export class NavButton extends LitElement {
  override render(): TemplateResult {
    return html`
      <overlay-trigger>
        <sp-action-button slot="trigger">
          <slot slot="icon" name="icon"></slot>
          <slot></slot>
        </sp-action-button>
        <sp-popover slot="click-content" dialog placement="right" open>
          where's inner?
          <slot name="inner"></slot>
        </sp-popover>
      </overlay-trigger>
    `;
  }
}
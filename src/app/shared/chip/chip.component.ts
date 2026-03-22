import { Component, input } from '@angular/core';

@Component({
  selector: 'app-chip',
  standalone: true,
  template: `<span class="pill">{{ label() }}</span>`,
  styles: [`.pill{display:inline-flex;padding:.35rem .6rem;border-radius:999px;border:1px solid var(--border);background:rgba(15,23,42,.55);color:var(--muted);font-size:.85rem;}`]
})
export class ChipComponent {
  label = input.required<string>();
}

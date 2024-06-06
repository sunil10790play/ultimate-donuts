import { Component, Input } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-card',
  template: `
    <div class="donut-card">
      <img
        class="donut-card-image"
        src="/assets/img/{{ donut.icon }}.svg"
        [alt]="donut.name"
      />
      <div>
        <p>{{ donut.name }}</p>
        <p>{{ donut.price }}</p>
      </div>
    </div>
  `,
  styles: [],
})
export class DonutCardComponent {
  @Input() donut!: Donut;
}

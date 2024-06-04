import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <h1>{{ message }}</h1>
      <input
        [value]="message"
        (input)="handleInputChange($event)"
        #messageInput
      />
      <p>{{ messageInput.value }}</p>
    </div>
  `,
  styles: [
    `
      .app {
        margin-top: 50px;
        font-size: 22px;
        color: #fff;
        text-align: center;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  message!: string;

  ngOnInit() {
    this.message = 'Hello World again!';
  }

  handleInputChange(event: Event) {
    const { value } = event.target as HTMLInputElement;
    this.message = value;
  }
}

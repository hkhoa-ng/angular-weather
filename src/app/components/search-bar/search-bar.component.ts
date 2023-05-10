import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  @Output() onSearchCity: EventEmitter<any> = new EventEmitter();
  city!: string;

  onSubmit(): void {
    if (!this.city) {
      alert('Please provide a city name!');
      return;
    }

    console.log(`Search for city: ${this.city}`);

    this.onSearchCity.emit(this.city);
  }
}

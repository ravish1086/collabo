import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Brijbhog';

  products = [
    {
      id: 1,
      name: 'Kaju Katli',
      price: 800,
      image: 'assets/kaju_katli.png',
      badge: 'Bestseller'
    },
    {
      id: 2,
      name: 'Gulab Jamun',
      price: 450,
      image: 'assets/gulab_jamun.png',
      badge: 'Fresh'
    },
    {
      id: 3,
      name: 'Motichoor Laddu',
      price: 400,
      image: 'assets/motichoor_laddu.png',
      badge: ''
    },
    {
      id: 4,
      name: 'Rasgulla',
      price: 350,
      image: 'assets/rasgulla.png',
      badge: 'Sale'
    },
     {
      id: 5,
      name: 'Besan Laddu',
      price: 380,
      image: 'assets/motichoor_laddu.png',
      badge: ''
    },
    {
      id: 6,
      name: 'Milk Cake',
      price: 550,
      image: 'assets/kaju_katli.png',
      badge: 'Premium'
    }
  ];
}

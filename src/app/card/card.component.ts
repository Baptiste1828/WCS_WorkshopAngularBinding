import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface User {
  name: string;
  age: number;
  image: string;
  citation: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  user: User = {name: "John", age: 25, image: "https://via.placeholder.com/150", citation: ""};

  sayHello():void {
    alert("Hello " + this.user.name);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admintemplate';

  menuItems = ['home','dashboard', 'contactos', 'controles','soporte'];
}

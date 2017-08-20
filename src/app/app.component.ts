import { Component } from '@angular/core';
import M2M from 'minutes-to-midnight';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
	  new M2M().get()
		  .then(console.log)
		  .catch(console.error);
  }
}

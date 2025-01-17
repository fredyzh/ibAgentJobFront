import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IBRequetFormComponent } from "./ibrequet-form/ibrequet-form.component";
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './service/app.service.dataservice';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IBRequetFormComponent, HttpClientModule],
  providers: [DataService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}

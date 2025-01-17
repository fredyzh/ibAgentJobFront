import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../service/app.service.dataservice';

@Component({
  selector: 'app-ibrequet-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ibrequet-form.component.html',
  styleUrl: './ibrequet-form.component.css',
})
export class IBRequetFormComponent {
  ibRequestForm: FormGroup;
  responseMessage: string | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient, private dataService: DataService) {
    this.ibRequestForm = this.fb.group({
      symbols: [['All'], Validators.required],
      
      //populate the form with the today's date string
      
      endDateTime: [getTodayString()+' 16:00:00', Validators.required],
      duration: ['1 D', Validators.required],
      barSize: ['1 day', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.ibRequestForm.value);

    if (this.ibRequestForm.valid) {
      const formDataJson = JSON.stringify(this.ibRequestForm.value);
      this.dataService.postJobRequest(formDataJson).subscribe(
          (response) => {
            console.log('Response from backend:', response);
            this.responseMessage = 'Response from backend: ' + JSON.stringify(response.message);
          },
          (error) => {
            this.responseMessage = 'Error: ' + JSON.stringify(error.message);
          }
        );
    } else {
      console.log('Form is invalid');
    }
  }
}

function getTodayString(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}${month}${day}`;
}

// contact-us.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  contactForm!: FormGroup; // Add definite assignment assertion

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailOrPhone: ['', Validators.required],
      issueDescription: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.contactForm.valid) {
      // Implement your form submission logic here
      console.log('Form submitted:', this.contactForm.value);
    }
  }
}

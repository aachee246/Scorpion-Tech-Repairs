// contact-us.component.ts

import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from 'emailjs-com'; // Update import

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  contactForm!: FormGroup;
  successMessageVisible = false;

  constructor(private fb: FormBuilder, private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.contactForm = this.fb.group({
      from_name: "Corban",
      to_name: "Corban",
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailOrPhone: ['', Validators.required],
      issueDescription: ['', Validators.required],
      message: "You have a tech repair request!",
      reply_to: "info@scorpiontechrepairs.com",
    });
  }

  submitForm() {
    if (this.contactForm.valid) {
      // Call the function to send the email here
      this.sendEmail();

            // Scroll to the top of the page
            this.renderer.setProperty(this.el.nativeElement.ownerDocument.body, 'scrollTop', 0);
    }
  }

  async sendEmail() {
    try {
      emailjs.init('NUiMy6ZxacxoRMpRO');
      await emailjs.send("service_aeqyhig", "template_avn1k2o", {
        from_name: this.contactForm.value.firstName + ' ' + this.contactForm.value.lastName,
        to_name: 'Corban',
        firstName: this.contactForm.value.firstName,
        lastName: this.contactForm.value.lastName,
        emailOrPhone: this.contactForm.value.emailOrPhone,
        issueDescription: this.contactForm.value.issueDescription,
        message: 'You have a tech repair request!',
        reply_to: 'info@scorpiontechrepairs.com',
      });

      // Reset the form and show success message
      this.contactForm.reset();
      this.successMessageVisible = true;

    } catch (error) {
      console.error('Error sending email:', error);
    }
  }
}

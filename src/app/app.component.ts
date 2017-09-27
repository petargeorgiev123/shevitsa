import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    form: FormGroup;
    constructor(private translate: TranslateService, private fb: FormBuilder, private af: AngularFireDatabase) {
        translate.setDefaultLang('bg');
        this.createForm();
    }

    switchLanguage(language: string) {
        this.translate.use(language);
    }

    createForm() {
        this.form = this.fb.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            message: ['', Validators.required],
        });
    }
    onSubmit() {
        const {name, email, message} = this.form.value;
        const date = Date();
        const html = `
      <div>From: ${name}</div>
      <div>Email: <a href="mailto:${email}">${email}</a></div>
      <div>Date: ${date}</div>
      <div>Message: ${message}</div>
    `;
        let formRequest = { name, email, message, date, html };
        this.af.list('/messages').push(formRequest);
        this.form.reset();
    }
}

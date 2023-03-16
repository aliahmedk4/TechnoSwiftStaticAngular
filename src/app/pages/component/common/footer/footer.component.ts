import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';
import { AppState } from 'src/app/_helpers/AppState';

@Component({
  selector: 'footersection',
  templateUrl: 'footer.template.html'
})
export class FooterComponent {
  createSendEmailForm: FormGroup;
  submitted=false;
  displaySuccess = "none";

  constructor (
    private formBuilder: FormBuilder,
    private companyService:CompanyService){
      this.BuildSendEmailForm();
  }

  BuildSendEmailForm(){
    this.createSendEmailForm = this.formBuilder.group({
      Name: ['', Validators.required],
      MobileNo: ['', Validators.required],
      EmailId: ['', Validators.required],
      Subject: ['', Validators.required],
      Body: ['', Validators.required]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.createSendEmailForm.controls;
  }
  
  openSuccessModal() {
    this.displaySuccess = "block";
  }
  onCloseHandled() {
    this.displaySuccess = "none";
  }

  onSuccessCloseHandled() {
    this.BuildSendEmailForm();
    this.displaySuccess = "none";
    window.open('https://salesbook.technoswiftsolution.com');
  }



  SendEmail(){
    this.companyService.ShowHideSpinner(true);
    let data = this.createSendEmailForm.value;

    this.submitted = true;
    if (this.createSendEmailForm.invalid) {
      this.companyService.ShowHideSpinner(false);
      return; 
    }
    data.From = AppState.config.From
    data.To = AppState.config.To
    data.EmailLogDescription = AppState.config.EmailLogDescription
    data.EmailType = AppState.config.EmailType

    this.companyService.SendEmail(data).subscribe(response=>{
      this.companyService.ShowHideSpinner(false);
      this.openSuccessModal()
    })
  }
 }

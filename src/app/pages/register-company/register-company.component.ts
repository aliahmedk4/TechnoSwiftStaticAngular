import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalParameterType } from 'src/app/_helpers/dbenum';
import { CompanyDetail } from 'src/app/_models/company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.scss']
})
export class RegisterCompanyComponent implements OnInit {
  companyDetail: CompanyDetail = <CompanyDetail>{};
  createRegisterForm: FormGroup;
  submitted = false;
  OTP = '';
  state: any[] = new Array<any>();
  firmtype: any[] = new Array<any>();
  businesstype: any[] = new Array<any>();
  errormessage = '';
  showerror: boolean = false;
  display = "none";
  displaySuccess = "none";
  typeSelected = 'ball-spin';
  buttonText = '';

  constructor(
    private companyService: CompanyService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.BuildCreateSalesForm();
    this.SetButtonText();
  }

  async ngOnInit() {
    await this.GetState();
    await this.LoadDropDownForRegistration();
  }

  RedirectDomain() {
    const currentDomain = window.location.hostname;
    console.log(currentDomain);
    if (currentDomain === 'www.technoswiftsolution.com') {
      window.location.href = 'https://staging.technoswiftsolution.com/registercompany';
    } else if (currentDomain === 'technoswiftsolution.com') {
      window.location.href = 'https://staging.technoswiftsolution.com/registercompany';
    } else if (currentDomain === 'staging.technoswiftsolution.com') {
      window.location.href = 'https://www.technoswiftsolution.com/registercompany';
    }
  }

  SetButtonText() {
    const currentDomain = window.location.hostname;
    if (currentDomain === 'www.technoswiftsolution.com') {
      this.buttonText = 'Testing/Sandbox';
    } else if (currentDomain === 'technoswiftsolution.com') {
      this.buttonText = 'Testing/Sandbox';
    } else if (currentDomain === 'staging.technoswiftsolution.com') {
      this.buttonText = 'Live';
    }
  }

  BuildCreateSalesForm() {
    this.createRegisterForm = this.formBuilder.group({
      CompName: ['', Validators.required],
      FirstName: ['', Validators.required],
      Phone: ['', Validators.required],
      AlternateMobile: ['', Validators.nullValidator],
      Username: ['', Validators.required],
      Email: ['', Validators.required],
      Password: ['', Validators.required],
      ConfirmPassword: ['', Validators.required],
      ReferalReferCode: ['', Validators.nullValidator],
      StateCode: ['027', Validators.required],
      City: ['', Validators.required],
      FirmTypeId: ['1', Validators.required],
      BusinessTypeId: ['1', Validators.required],
      Address: ['', Validators.required],

    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.createRegisterForm.controls;
  }

  openModal() {
    this.display = "block";
  }
  openSuccessModal() {
    this.displaySuccess = "block";
  }
  onCloseHandled() {
    this.display = "none";
    this.OTP = '';
    this.companyDetail.Company.RequestId = '';
  }

  onSuccessCloseHandled() {
    this.BuildCreateSalesForm();
    this.displaySuccess = "none";
    window.open('https://salesbook.technoswiftsolution.com');
  }


  LoadDropDownForRegistration = (): Promise<any> => {
    return new Promise((resolve, reject) => {
      this.companyService.LoadDropDownForRegistration().subscribe(response => {
        this.firmtype = this.LoadGlobalDropDown(response.result, [GlobalParameterType.Firm_Type]);
        this.businesstype = this.LoadGlobalDropDown(response.result, [GlobalParameterType.Business_Type]);
        resolve(true);
      })
    })
  }

  GetState = (): Promise<any> => {
    return new Promise((resolve, reject) => {

      this.companyService.GetAllState().subscribe(result => {
        this.state = result;
        resolve(true);
      })
    })
  }

  LoadGlobalDropDown(result: any[], ids: any[]) {
    var filteredArray = result.filter(array_el => {
      return ids.filter(ids_el => {
        return ids_el == array_el.typeid;
      }).length == 1
    });
    return filteredArray;
  }

  ClearValues() {
    this.submitted = false;
    this.BuildCreateSalesForm();
  }

  SaveCompany() {
    this.showerror = false; this.errormessage = '';

    this.companyService.ShowHideSpinner(true);
    this.companyDetail.Company = this.createRegisterForm.value;
    this.companyDetail.Company.PrintName = this.companyDetail.Company.CompName;
    if (this.OTP)
      this.companyDetail.Company.RegisteredOTP = this.OTP;

    this.submitted = true;
    if (this.createRegisterForm.invalid) {
      this.companyService.ShowHideSpinner(false);
      return;
    }

    this.companyService.RegisterCompany(this.companyDetail).subscribe(response => {
      this.companyService.ShowHideSpinner(false);

      if (response.RequestId != undefined) {
        this.companyDetail.Company.RequestId = response.RequestId;
        this.openModal();
      } else {
        this.display = "none";
        this.openSuccessModal();
      }

    }, err => {
      this.ShowError(err.error);
      this.companyService.ShowHideSpinner(false);
    })
  }

  ShowError(err: any) {
    if (err.Errors) {
      for (let index = 0; index < err.Errors.length; index++) {
        this.errormessage += err.Errors[index].Message;
      }
    }
    this.showerror = true;
  }

}

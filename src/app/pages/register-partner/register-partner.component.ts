import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalParameterType } from 'src/app/_helpers/dbenum';
import { Router } from '@angular/router';
import { PartnerDetail, PartnerModel } from 'src/app/_models/partner';

@Component({
  selector: 'app-register-partner',
  templateUrl: './register-partner.component.html',
  styleUrls: ['./register-partner.component.scss']
})
export class RegisterPartnerComponent implements OnInit {
  partnerDetail: PartnerModel = <PartnerModel>{};
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
  gender: string[] = ['Male', 'Female'];

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
      window.location.href = 'https://staging.technoswiftsolution.com/registerpartner';
    } else if (currentDomain === 'technoswiftsolution.com') {
      window.location.href = 'https://staging.technoswiftsolution.com/registerpartner';
    } else if (currentDomain === 'staging.technoswiftsolution.com') {
      window.location.href = 'https://www.technoswiftsolution.com/registerpartner';
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
      FirstName: ['', Validators.required],
      MiddleName: ['', Validators.required],
      LastName: ['', Validators.required],
      MobileNumber: ['', Validators.required],
      Gender: ['1', Validators.required],
      Username: ['', Validators.required],
      Email: ['', Validators.required],
      UserPwd: ['', Validators.required],
      ConfirmPassword: ['', Validators.required],
      UserReferCode: ['', Validators.nullValidator],
      StateCode: ['', Validators.required],
      City: ['', Validators.required],

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
    this.partnerDetail.RequestId = '';
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

  SavPartner() {
    this.showerror = false; this.errormessage = '';

    this.companyService.ShowHideSpinner(true);
    this.partnerDetail = this.createRegisterForm.value;
    this.partnerDetail.FirstName = this.partnerDetail.FirstName;
    if (this.OTP)
      this.partnerDetail.RegisteredOTP = this.OTP;

    this.submitted = true;
    if (this.createRegisterForm.invalid) {
      this.companyService.ShowHideSpinner(false);
      return;
    }

    var data = '{"Users": ' + JSON.stringify(this.partnerDetail) + ',UsersEmergencyContactDetail:' + JSON.stringify({}) + '}';

    this.companyService.RegisterUser(data).subscribe(response => {
      this.companyService.ShowHideSpinner(false);
      console.log(response);
      if (response.RequestId != undefined) {
        this.partnerDetail.RequestId = response.RequestId;
        console.log('openmodal');
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

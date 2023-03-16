import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalParameterType } from 'src/app/_helpers/dbenum';
import { CompanyDetail } from 'src/app/_models/company';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.scss']
})
export class RegisterCompanyComponent implements OnInit{
  companyDetail: CompanyDetail=<CompanyDetail>{};
  createRegisterForm: FormGroup;
  submitted=false;
  OTP='';
  state:any[]=new Array<any>();
  firmtype:any[]=new Array<any>();
  businesstype:any[]=new Array<any>();
  errormessage='';
  showerror:boolean = false;
  display = "none";
  displaySuccess = "none";
  
  constructor(
    private companyService:CompanyService,
    private formBuilder: FormBuilder,
  ){
    this.BuildCreateSalesForm();
  }

  ngOnInit(): void {
    this.GetState();
    this.LoadDropDownForRegistration();
  }

  BuildCreateSalesForm(){
    this.createRegisterForm = this.formBuilder.group({
      CompName: ['', Validators.required],
      PrintName: ['', Validators.required],
      FirstName: ['', Validators.required],
      Middle: ['', Validators.required],
      LastName: ['', Validators.required],
      Phone: ['', Validators.required],
      AlternateMobile: ['', Validators.nullValidator],
      Gender: ['', Validators.required],
      Username: ['', Validators.required],
      Email: ['', Validators.required],
      Password: ['', Validators.required],
      ConfirmPassword: ['', Validators.required],
      UserReferCode: ['', Validators.nullValidator],
      StateCode: ['', Validators.required],
      City: ['', Validators.required],
      FirmTypeId: ['', Validators.required],
      BusinessTypeId: ['', Validators.required],
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
    this.OTP = '';
    this.companyDetail.Company.RequestId='';
    this.display = "none";
  }

  onSuccessCloseHandled() {
    this.BuildCreateSalesForm();
    this.displaySuccess = "none";
    window.open('https://salesbook.technoswiftsolution.com');
  }


  LoadDropDownForRegistration(){
    this.companyService.LoadDropDownForRegistration().subscribe(response=>{
      this.firmtype = this.LoadGlobalDropDown(response.result,[GlobalParameterType.Firm_Type]);
      this.businesstype = this.LoadGlobalDropDown(response.result,[GlobalParameterType.Business_Type]);
    })
  }

  GetState(){
    this.companyService.GetAllState().subscribe(result=>{
      this.state = result;
    })
  }

 LoadGlobalDropDown(result:any[],ids:any[]) {
  var filteredArray = result.filter(array_el=>{
        return ids.filter(ids_el=> {
            return ids_el == array_el.typeid;
        }).length == 1
    });

    return filteredArray;
}

ClearValues(){
  this.submitted=false;
  this.BuildCreateSalesForm();
}

  SaveCompany(){
    this.showerror=false;this.errormessage='';

    this.companyService.ShowHideSpinner(true);
    this.companyDetail.Company = this.createRegisterForm.value;
    if(this.OTP)
    this.companyDetail.Company.RegisteredOTP = this.OTP;

    this.submitted = true;
    if (this.createRegisterForm.invalid) {
      this.companyService.ShowHideSpinner(false);
      return;
    }
  
    this.companyService.RegisterCompany(this.companyDetail).subscribe(response=>{
    this.companyService.ShowHideSpinner(false);

     if(response.RequestId!=undefined){
      this.companyDetail.Company.RequestId = response.RequestId;
      this.openModal();
     }else{
      this.openSuccessModal();
     }

    },err=>{
      this.ShowError(err.error);
      this.companyService.ShowHideSpinner(false);
    })
  }

  ShowError(err:any){
    if(err.Errors){
      for (let index = 0; index < err.Errors.length; index++) {
        this.errormessage += err.Errors[index].Message;
      }
    }
    this.showerror=true;
  }

}

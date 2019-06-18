import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ValidatePassword, ValidateCnfPassword } from '../customeValidators/password-validator';
import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from "@angular/router";

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  // userForm = new FormGroup({
  //   name : new FormControl('Vikesh',Validators.required),
  //   email : new FormControl('',[Validators.required, Validators.email]),
  //   address : new FormGroup({
  //     street : new FormControl(),
  //     city : new FormControl(),
  //     pincode : new FormControl()
  //   })
  // })
  userForm : FormGroup;
  constructor(private _formBuilder:FormBuilder, public dataService:DataService, private tostr : ToastrService, private router: Router) { }

  ngOnInit() {
    this.userForm = this._formBuilder.group({
      name: ['',Validators.required],
      email: ['',[Validators.required, Validators.email]],
      password:['',[Validators.required,ValidatePassword]],
      cnfpassword:['',[Validators.required,ValidateCnfPassword]],
      address: this._formBuilder.group({
        street:[],
        city:['Mumbai'],
        pincode:['',[Validators.required, Validators.minLength(6), Validators.pattern("[1-9][0-9]{5}")]]
      })
    })

    this.userForm.controls.password.valueChanges
    .subscribe(
      x => this.userForm.controls.cnfpassword.updateValueAndValidity()
    )
  }

  onSubmit(){
    // console.log(this.userForm.value);
    // this.dataService.saveDetails(this.userForm.value);
    if(this.userForm.valid){
      this.dataService.saveDetails(this.userForm.value);
      this.userForm.reset();
      this.tostr.success("Submitted Successfully", "User Saved");
      this.router.navigate(['/userList']);
      
    }else{
      this.validateAllFormFields(this.userForm);

    }
    
    //this.router.navigateByUrl('/userList');

  }

  validateAllFormFields(formGroup: FormGroup) {         //{1}
  Object.keys(formGroup.controls).forEach(field => {  //{2}
    const control = formGroup.get(field);             //{3}
    if (control instanceof FormControl) {             //{4}
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {        //{5}
      this.validateAllFormFields(control);            //{6}
    }
  });
}

}

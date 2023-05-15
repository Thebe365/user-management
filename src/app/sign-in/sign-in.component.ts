import { Component } from '@angular/core';
import { AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators, ɵFormGroupRawValue,
  ɵGetProperty,
  ɵTypedOrUntyped } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  name: string = ""
  lastName: string= ""
  email: string = ""
  phoneNumber: number = 0
  password: string = ""
  confPassword: string = ""
  form: FormGroup = this.initForm();

  constructor(private fb: FormBuilder) {}

  initForm() {
    let form = this.fb.group({
      name: this.fb.control('', Validators.required),
      lastName: this.fb.control('', Validators.required),
      email: this.fb.control('', [Validators.required, Validators.email]),
      phoneNumber: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required),
      confPassword: this.fb.control('', Validators.required)
    });
    form.addValidators(this.matchValidator(form.get('password'), form.get('confPassword')));
    return form;
  }

  matchValidator(
    control: AbstractControl<ɵGetProperty<ɵTypedOrUntyped<any, ɵFormGroupRawValue<any>, any>, "password">> | null,
    controlTwo: AbstractControl<ɵGetProperty<ɵTypedOrUntyped<any, ɵFormGroupRawValue<any>, any>, "confPassword">> | null
  ): ValidatorFn {
    return () => {
      if (control?.value !== controlTwo?.value)
        return { match_error: 'Passwords do not match' };
      return null;
    };
  }

  // Set user name
  setName(nameVal: string){
    this.name = nameVal
  }

  // set user last name
  setLastName(lastNAmeVal: string){
    this.lastName = lastNAmeVal
  }

  // set user email
  setEmail(emailVal: string){
    this.email = emailVal
  }

  // set user phone number
  setNumber(numberVal: number){
    this.phoneNumber = numberVal
  }

  // set password
  setPassword(passVal: string){
    this.password = passVal
  }

  // set confirm password
  setConfPassword(confVal: string){
    this.confPassword = confVal
  }

  // Validate data
  isEnabled(){

    if(this.form.valid){
      console.log("data has been set")
      console.log(this.form.value)
    }else if(this.form.invalid){
      console.log("Has not not been set")
    }
  }

}

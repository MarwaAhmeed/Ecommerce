import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegisterForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.RegisterForm = this.fb.group({
      Name:['',Validators.required],
      Email:['',[Validators.required,Validators.pattern("^[^\s@]+@[^\s@]+\.[^\s@]+$")]],
      userName:['',
      [
        Validators.required,
        Validators.pattern("^[a-z]*$")]],
      password:['',[
        Validators.required,
        Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$")]],
      confirmPassword:['',Validators.required]
    },{validator: this.checkIfMatchingPasswords('password', 'confirmPassword')})
  }
  checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
          passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true})
      }
      else {
          return passwordConfirmationInput.setErrors(null);
      }
    }
  }
  get formControls() {
    return this.RegisterForm.controls;
  }
  ngOnInit(): void {
  }

  submitRegForm() {
    console.log(this.RegisterForm);
  }

}

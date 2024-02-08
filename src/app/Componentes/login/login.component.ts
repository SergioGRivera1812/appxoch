import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router){}
  showSpinner:boolean=false;

  formUser = new FormGroup({
    pass: new FormControl(null,Validators.required),
    email: new FormControl(null,Validators.required)
  });
  
  Login(){
    const emailV:string = this.formUser.get('email')?.value??'';
    const passV:string = this.formUser.get('pass')?.value??'';
    this.showSpinner = false;
    if(emailV==='sergio.didier@hotmail.com'&& passV === 'admin'||emailV==='Xoch Magallanes'&& passV === 'xoch'){
      this.router.navigate(['dashboard']);
      this.showSpinner = true;
      console.log(emailV,passV);
    }else{
      
      console.log('ERROR',emailV,passV);

    }
  }
}

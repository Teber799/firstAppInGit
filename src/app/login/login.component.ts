import { Component, OnInit } from '@angular/core';
import{ AuthService } from '../services/auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authServices:AuthService) { }

  ngOnInit(): void {
  }
signUp(f){
  this.authServices.signUp(f.value.email,f.value.password).then(data=>{
    console.log('goooooooooooooood');
    
  }).catch(()=>{
    console.log('error');
    
  })
}
}

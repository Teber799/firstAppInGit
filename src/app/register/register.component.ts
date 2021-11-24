import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authServices:AuthService) { }

  ngOnInit(): void {
  }
signIn(f){
  this.authServices.signIn(f.value.email,f.value.password).then(data=>{
    console.log('goooooooooooooood');
    
  }).catch(()=>{
    console.log('error');
    
  })
}

}

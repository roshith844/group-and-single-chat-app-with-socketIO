import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { v4 as uuidv4 } from 'uuid';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id!: string; // id of user

  constructor(private formBuilder: FormBuilder,
    private localstorageService: LocalstorageService,
    private router: Router
  ) { }

  loginForm = this.formBuilder.group({
    userId: ''
  })

  // Checks if the user is already Loggedin 
  ngOnInit(): void {
    if (this.localstorageService.checkUserIdExists()) {
      this.router.navigate(['/'])
    }
  }

  // submits user Form 
  onSubmit() {
    console.log(this.loginForm.value)
    this.loginForm.reset()
  }

  // Creates new Unique Id and saves to Localstorage
  createNewId() {
    this.id = uuidv4()
    this.loginForm.setValue({ userId: this.id })
    this.localstorageService.addUserIdToLocalStorage(this.id)
  }

}

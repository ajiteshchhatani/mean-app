import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { FormServiceService } from '../form-service.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  userForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required)
  }
)

  constructor(private formService: FormServiceService) { }

  ngOnInit() {
  }

  saveUserForm(){
    this.formService.postFormDetails(this.userForm.get('firstname').value, this.userForm.get('lastname').value).subscribe((res) => {
      console.log("Post successful");
    }, (error) => {
      console.log(error);
    });
  }

}

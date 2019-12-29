import { Component, OnInit } from '@angular/core';
import { FormServiceService } from '../form-service.service'

@Component({
  selector: 'app-get-form',
  templateUrl: './get-form.component.html',
  styleUrls: ['./get-form.component.css']
})
export class GetFormComponent implements OnInit {

  private userDetails:any = [];
  constructor(private formService: FormServiceService) { }

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails(){
    this.formService.getFormDetails().subscribe(
      (data) => {
        this.userDetails = data;
        console.log(this.userDetails);
      }
    )
  }

}

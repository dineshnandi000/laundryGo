import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Form } from '../form';
import {FormServiceService} from '../form-service.service';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {

  forms : Form[];
  constructor(private formService: FormServiceService) { }

  ngOnInit(): void {
    this.formService.findAll().subscribe(data => {
      this.forms = data;
    })
  }

}

import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Form } from '../form';
import { FormServiceService } from '../form-service.service';
interface Type{
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-form-detail',
  templateUrl: './form-detail.component.html',
  styleUrls: ['./form-detail.component.css']
})
export class FormDetailComponent implements OnInit, AfterViewInit {
form : Form;
  constructor(private route: ActivatedRoute,private router: Router,private FormServiceService: FormServiceService) { 
    this.form=new Form();
  }

  ngOnInit(): void {
  }
  openForm(){
      document.getElementById("myForm").style.display = "block";
  }
  closeForm(){
    document.getElementById("myForm").style.display = "none";
  }
  cloths1:string;
  days1:string;
  add1:string;
  selectedDay:string='';
  value:string;
  viewValue:string;
  selectedValue:string;
  @ViewChild('inputRef') inputElementRef: ElementRef;

  ngAfterViewInit(){
    this.inputElementRef.nativeElement.focus();
  }


  types: Type[]=[
    {value: 'wash', viewValue:'Wash'},
    {value: 'dry clean and wash', viewValue:'Dry Clean and Wash'},
    {value: 'dry clean, wash and iron', viewValue:'Dry Clean, Wash and Iron'}
  ];

  selectChangeHandler(event: any){
    this.selectedDay = event.source.value;
  }

  submitForm(){
    this.FormServiceService.save(this.form).subscribe(result => 
      this.gotoFormList());
      this.closeForm();
      
  }
gotoFormList(){
  this.router.navigate(['/home']);
}

}

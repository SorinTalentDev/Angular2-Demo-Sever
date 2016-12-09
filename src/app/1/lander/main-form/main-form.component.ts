import { Component, OnInit, Injectable} from '@angular/core';
import { GlobalDirective } from '../../../global.directive';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss'],
  providers: [GlobalDirective]
})

@Injectable()
export class MainFormComponent implements OnInit {

  onSubmit(form: any){
    console.log('you submitted value:', form);
    console.log(form.fName);
    var fName = form.fName;
    var lName = form.lName;
    console.log(fName, lName);
    return fName;
  }

  constructor (public echos: GlobalDirective) {}

  ngOnInit() {
  }

}

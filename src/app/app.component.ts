import { Component, ViewEncapsulation } from '@angular/core';
import { ApiService } from './service/api.service';
import { faBell, faPlayCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated


})
export class AppComponent {
  title = 'vistarooms';

  constructor(private spinner: NgxSpinnerService, private apiService: ApiService) {

    this.spinner.show();

  }

  ngAfterViewInit() {
    this.spinner.hide();
  }
}

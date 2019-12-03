import {AfterViewInit, Component, OnInit} from '@angular/core';

declare let $;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../../assets/css/default.css', '../../../assets/css/styles.css']
})
export class LoginComponent implements OnInit, AfterViewInit {


  // appJs: any = '/assets/js/jquery-2.1.1.min.js';
  // jquery: any = 'http://www.jq22.com/jquery/jquery-1.10.2.js';
  login: any = '/assets/js/login.js';
  particlegrounda: any = '/assets/js/Particleground.js';
  treatment: any = '/assets/js/Treatment.js';

  constructor() {
  }

  ngOnInit() {

  }


  ngAfterViewInit() {
    // if (this.login) {
    //   this.loadScript(this.login);
    // } else {
    //   console.log('login=' + this.login);
    // }
    /*if (this.particlegrounda) {
      this.loadScript(this.particlegrounda);
    } else {
      console.log('particleground=' + this.particlegrounda);

    }
    if (this.treatment) {
      this.loadScript(this.treatment);
    } else {
      console.log('treatment=' + this.treatment);
    }
    console.log($('.login_item'));
    $('.login_item').particleground({
      dotColor: '#E8DFE8',
      lineColor: '#133b88'
    });*/
  }

  loadScript(scriptUrl: string) {
    return new Promise((resolve, reject) => {
      console.log('loadScript:' + scriptUrl);
      const scriptElement = document.createElement('script');
      scriptElement.src = scriptUrl;
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    });
  }
}

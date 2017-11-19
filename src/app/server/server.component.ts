import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit {

  param1 = 'John Snow';
  buttonMessage = 'no server added ';
  numberOfServers = 0;
  serverName = '';
  serverNameModel = 'model';
  allowNewServer = false;
  serverCreated = false;


  constructor() {

    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);


  }


  onAddServer() {
    this.numberOfServers++;
    this.buttonMessage = 'Adding servers , total : ' + this.numberOfServers;
    this.serverCreated = !this.serverCreated;
  }

  onServerNameInput(event: any) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }


  onStyleChange() {
    if (this.serverCreated) {
      return 'red';
    } else {
      return 'green';
    }
  }



  ngOnInit() {
  }
}

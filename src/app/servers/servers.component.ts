import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStation = "No Server Station yet!"
  serverName = 'Test';
  userName = ''
  checkEmptyString = true;
  serverCreated = false;
  servers = ['testServer', 'testServer 2']
  showSecret = false;
  log = [];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000)
  }

  ngOnInit(): void {
  }

  onCreationServer = () => {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStation = 'Server Station running! The name is ' + this.serverName;
  }

  OnUpdateServerName = (event: any) => {
    this.serverName = event.target.value;
  }

  emptyInput = (event: any) => {
    this.userName = event.target.value;
  }

  onToggleDetails = () => {
    this.showSecret = !this.showSecret;
    this.log.push(new Date());
  }
}

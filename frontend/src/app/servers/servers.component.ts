import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{
  allowNewServer = false;
  imgUrl = 'https://resolutiondenver.com/wp-content/uploads/2021/11/History-of-New-Years-Eve.jpg';
  serverCreationStatus = "Service is not created";
  serverName = 'TESTSERVER';
  serverCreated = false;
  servers = ['servertest1','servertest2','servertest3'];
  constructor(){
    setTimeout(
      ()=>{
          this.allowNewServer = true;
      },2000
    )
  }
  ngOnInit() {  
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Create Service" +' ' + this.serverName;
  }
  onUpdateServerName(event: any){
    //console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
    }
}
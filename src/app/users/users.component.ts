import { UsersService } from './../services/users.service';
import { IUser } from './../sharedClasses/IUser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
UsrList?:IUser[]
errMsg:string=''
  constructor(private usrServ:UsersService) { }

  ngOnInit(): void {
    this.usrServ.getAllUsers().subscribe(usrData=>{
      this.UsrList=usrData
    },
    error=>{
      this.errMsg=error
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { UserModel} from './UserModel';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userList  = [] ;
  newUserName: string ;

  constructor() { }

  onUserAddition() {
    console.log(this.newUserName);
    if (this.newUserName !==  '') {

      var newUser = new UserModel();
      newUser.name = this.newUserName;
      newUser.age = Math.random();
      this.userList.push(newUser);
    }
    this.newUserName = '' ;
  }

  ngOnInit() {
  }

}

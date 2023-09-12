import { Component, OnInit } from '@angular/core';
import {RoomList, room} from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  hotelName:string = "taj hotel"
  numberofRooms:number = 10
  hiderooms:boolean = false;

  selectedRoom !: RoomList;

  title : string=""

  rooms: room= {
totalRooms: 20,
  avaliableRooms : 10,
  bookedRooms : 5
  }

  

  toogle(){
    this.hiderooms=!this.hiderooms
    this.title = "vinayak rooms"
  }

  roomList : RoomList[] = [ ]


   
  constructor() { }

  ngOnInit(): void {
    this.roomList = [{
      roomNumber : 1,
      roomTYpe : 'delux room',
      amenities : 'AC , wifi , tv',
      price:500,
      photos : 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F04%2F23%2F22%2F00%2Ftree-736885_1280.jpg&tbnid=aVgXecnmQ_f1MM&vet=12ahUKEwiznbDTh5CBAxVQ2jgGHUinBYcQMygAegQIARB0..i&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&docid=Ba_eiczVaD9-zM&w=1280&h=797&q=images&ved=2ahUKEwiznbDTh5CBAxVQ2jgGHUinBYcQMygAegQIARB0',
    checkinTime : new Date('11-dec-2021'),
    checkoutTime : new Date('12-dec-2021'),
    rating : 4.1
    },
    {
      roomNumber:2,
      roomTYpe : 'delux room',
      amenities : 'AC , wifi , tv',
      price:100,
      photos : 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F04%2F23%2F22%2F00%2Ftree-736885_1280.jpg&tbnid=aVgXecnmQ_f1MM&vet=12ahUKEwiznbDTh5CBAxVQ2jgGHUinBYcQMygAegQIARB0..i&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&docid=Ba_eiczVaD9-zM&w=1280&h=797&q=images&ved=2ahUKEwiznbDTh5CBAxVQ2jgGHUinBYcQMygAegQIARB0',
    checkinTime : new Date('11-dec-2021'),
    checkoutTime : new Date('12-dec-2021'),
    rating : 3.234567
    },
    {
      roomNumber:3,
      roomTYpe :'private suite',
      amenities : 'AC , wifi , tv',
      price:1500,
      photos : 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F04%2F23%2F22%2F00%2Ftree-736885_1280.jpg&tbnid=aVgXecnmQ_f1MM&vet=12ahUKEwiznbDTh5CBAxVQ2jgGHUinBYcQMygAegQIARB0..i&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&docid=Ba_eiczVaD9-zM&w=1280&h=797&q=images&ved=2ahUKEwiznbDTh5CBAxVQ2jgGHUinBYcQMygAegQIARB0',
    checkinTime : new Date('11-dec-2021'),
    checkoutTime : new Date('12-dec-2021'),
    rating:2.65678
    }]
  }

  selectRoom(room:RoomList){
    this.selectedRoom = room;
  }

  addRoom(){
    const room : RoomList  = {
     roomNumber:4,
     roomTYpe:'delux',
     amenities:'AC , wifi , tv',
     price:500,
      photos : 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F04%2F23%2F22%2F00%2Ftree-736885_1280.jpg&tbnid=aVgXecnmQ_f1MM&vet=12ahUKEwiznbDTh5CBAxVQ2jgGHUinBYcQMygAegQIARB0..i&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&docid=Ba_eiczVaD9-zM&w=1280&h=797&q=images&ved=2ahUKEwiznbDTh5CBAxVQ2jgGHUinBYcQMygAegQIARB0',
     checkinTime : new Date('11-Dec-2021'),
     checkoutTime : new Date('12-dec-2021'),
     rating:4.5
    };

    //this.roomList.push(room) this modified the exsisting
    this.roomList = [...this.roomList , room]//add 3 records + new record : return new instance every time
  }

}

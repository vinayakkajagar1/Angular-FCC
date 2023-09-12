import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';


@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit , OnChanges{

  @Input() rooms : RoomList[] = []; //make this rooms property as an valid html propety on this (app-rooms-list) html tag
  
  @Input() title : string = "";

  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if (changes['title']) {
      this.title = changes['title'].currentValue.toUppercase();
    }
  }

  ngOnInit(): void {
  }

  selectRoom(room:RoomList){
    this.selectedRoom.emit(room);
  }

}

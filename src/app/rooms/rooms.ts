export interface room{
    totalRooms : number,
    avaliableRooms: number,
    bookedRooms: number,
}


export interface RoomList{
    roomNumber :number
    roomTYpe :string,
    amenities : string,
    price:number,
    photos:string,
    checkinTime : Date,
    checkoutTime:Date,
    rating : number
}
export class Views {
  id:number;
  quantity: number;
  userId?: number;
  songId?: number;


  constructor(id: number, quantity: number, userId?: number, songId?: number) {
    this.id = id
    this.quantity = quantity
    this.userId = userId
    this.songId = songId
  }

}
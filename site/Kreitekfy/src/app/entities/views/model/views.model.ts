export class Views {
  quantity: number;
  userId?: number;
  songId?: number;


  constructor(id: number, quantity: number, userId?: number, songId?: number) {
    this.quantity = quantity
    this.userId = userId
    this.songId = songId
  }

}
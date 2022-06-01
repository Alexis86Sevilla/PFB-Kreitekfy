export class Song {
    id: number | undefined;
    name: string | undefined;
    duration: number;
    dateLaunch: Date;
    albumId?: number;
    albumName?: string;
    albumDescription?: string;
    artistId?: number;
    artistName?: string;
    styleId?: number;
    styleName?: string;
    image?: string;


  constructor(
    id: number | undefined, 
    name: string, 
    duration: number, 
    dateLaunch: Date, 
    albumId?: number, 
    albumName?: string, 
    artistId?: number, 
    artistName?: string, 
    albumDescription?: string,
    styleId?: number, 
    styleName?: string, 
    image?: string
) {
    this.id = id
    this.name = name
    this.duration = duration
    this.dateLaunch = dateLaunch
    this.albumId = albumId
    this.albumName = albumName
    this.albumDescription = albumDescription
    this.artistId = artistId
    this.artistName = artistName
    this.styleId = styleId
    this.styleName = styleName
    this.image = image
  }
  
   

}
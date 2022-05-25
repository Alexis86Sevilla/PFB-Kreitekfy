import { Album } from "../../album/model/album.model";
import { Artist } from "../../artist/model/artist.model";
import { Style } from "../../style/model/style.model";

export class Song {
    id: number | undefined;
    name: string;
    duration: number;
    dateLaunch: Date;
    valoration: number;
    visualizations: number;
    album: Album;
    artist: Artist;
    style: Style;
    image?: string;

  constructor(
    id: number , 
    name: string, 
    duration: number, 
    dateLaunch: Date, 
    valoration: number, 
    visualizations: number, 
    album: Album, 
    artist: Artist, 
    style: Style, 
    image?: string
) {
    this.id = id
    this.name = name
    this.duration = duration
    this.dateLaunch = dateLaunch
    this.valoration = valoration
    this.visualizations = visualizations
    this.album = album
    this.artist = artist
    this.style = style
    this.image = image
  }
    

}
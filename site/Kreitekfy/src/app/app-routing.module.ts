import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AlbumFormComponent } from './entities/album/album-form/album-form.component';
import { AlbumListComponent } from './entities/album/album-list/album-list.component';
import { ArtistFormComponent } from './entities/artist/artist-form/artist-form.component';
import { ArtistListComponent } from './entities/artist/artist-list/artist-list.component';
import { SongFormComponent } from './entities/song/song-form/song-form.component';
import { SongListComponent } from './entities/song/song-list/song-list.component';
import { StyleFormComponent } from './entities/style/style-form/style-form.component';
import { StyleListComponent } from './entities/style/style-list/style-list.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full' },
  {path: 'nosotros', component: AboutUsComponent},
  {path: 'help', component: HelpComponent}, 
  {path: 'songs', component: SongListComponent}, 
  {path: 'songs/:songId', component: SongFormComponent},
  {path: 'styles', component: StyleListComponent}, 
  {path: 'styles/:styleId', component: StyleFormComponent},
  {path: 'styles/:styleId/songs', component: StyleFormComponent},
  {path: 'styles/:styleId/songs/:songId', component: StyleFormComponent},
  {path: 'artists', component: ArtistListComponent},
  {path: 'artists/:artistId', component: ArtistFormComponent},
  {path: 'artists/:artistId/songs', component: ArtistFormComponent},
  {path: 'artists/:artistId/songs/:songId', component: ArtistFormComponent},
  {path: 'album', component: AlbumListComponent},
  {path: 'albums/:albumId', component: AlbumFormComponent},
  {path: 'albums/:albumId/songs', component: AlbumFormComponent},
  {path: 'albums/:albumId/songs/:songId', component: AlbumFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

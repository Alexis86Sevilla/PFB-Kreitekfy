import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ScreenOneComponent } from './home/screen-one/screen-one.component';
import { ScreenTwoComponent } from './home/screen-two/screen-two.component';
import { SongComponent } from './entities/song/song.component';
import { StyleComponent } from './entities/style/style.component';
import { AlbumComponent } from './entities/album/album.component';
import { ArtistComponent } from './entities/artist/artist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    ScreenOneComponent,
    ScreenTwoComponent,
    SongComponent,
    StyleComponent,
    AlbumComponent,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

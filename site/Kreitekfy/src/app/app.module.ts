import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ScreenOneComponent } from './home/screen-one/screen-one.component';
import { ScreenTwoComponent } from './home/screen-two/screen-two.component';
import { ArtistFormComponent } from './entities/artist/artist-form/artist-form.component';
import { ArtistListComponent } from './entities/artist/artist-list/artist-list.component';
import { SongListComponent } from './entities/song/song-list/song-list.component';
import { SongFormComponent } from './entities/song/song-form/song-form.component';
import { StyleListComponent } from './entities/style/style-list/style-list.component';
import { StyleFormComponent } from './entities/style/style-form/style-form.component';
import { AlbumFormComponent } from './entities/album/album-form/album-form.component';
import { AlbumListComponent } from './entities/album/album-list/album-list.component';
import { HelpComponent } from './help/help.component';
import { TeamComponent } from './about-us/team/team.component';
import { QuestionsComponent } from './help/questions/questions.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    ScreenOneComponent,
    ScreenTwoComponent,
    ArtistFormComponent,
    ArtistListComponent,
    SongListComponent,
    SongFormComponent,
    StyleListComponent,
    StyleFormComponent,
    AlbumFormComponent,
    AlbumListComponent,
    HelpComponent,
    TeamComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

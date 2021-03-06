import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ButtonModule} from 'primeng/button';
import {RatingModule} from 'primeng/rating';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {InputTextModule} from 'primeng/inputtext';

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
import { UserListComponent } from './entities/user/user-list/user-list.component';
import { HttpRequestIntercept } from './config/interceptors/http-request-.interceptor';
import { UserComponent } from './layouts/navbar/user/user.component';
import { AdminComponent } from './layouts/navbar/admin/admin.component';
import { SongUserComponent } from './entities/song-user/song-user.component';

import {AutoCompleteModule} from 'primeng/autocomplete';
import { NewsComponent } from './entities/song-user/news/news.component';
import { TopSongsComponent } from './entities/song-user/top-songs/top-songs.component';
import { MostRatedComponent } from './entities/song-user/most-rated/most-rated.component';
import { ForYouComponent } from './entities/song-user/for-you/for-you.component';
import { SongDetailComponent } from './entities/song-user/song-detail/song-detail.component';


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
    QuestionsComponent,
    UserListComponent,
    UserComponent,
    AdminComponent,
    SongUserComponent,
    NewsComponent,
    TopSongsComponent,
    MostRatedComponent,
    ForYouComponent,
    SongDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    AutoCompleteModule,
    MessageModule,
    MessagesModule,
    ButtonModule,
    RatingModule,
    InputTextModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestIntercept,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

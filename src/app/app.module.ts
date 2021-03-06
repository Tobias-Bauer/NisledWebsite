import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule, MatInputModule, MatIconModule, MatDialogModule } from '@angular/material';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RootComponent } from './screens/root/root.component';
import { Error404ScreenComponent } from './screens/404/404.component';
import { AppComponent } from './screens/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { HeroViewComponent } from './components/heroView/heroView.component';
import { FooterComponent } from './components/footer/footer.component';
import { Section1Component } from './components/section1/section1.component';
import { Section2Component } from './components/section2/section2.component';
import { Section3Component } from './components/section3/section3.component';
import { AccManagerComponent } from './components/accManager/accManager.component';
import { Error404Component } from './components/404/404.component';
import { LogInComponent } from './screens/logIn/logIn.component';
import { SignUpComponent } from './screens/signUp/signUp.component';
import { CommunityScreenComponent } from './screens/community/community.component';
import { CSignUpComponent } from './components/signUp/signUp.component';
import { CLogInComponent } from './components/logIn/logIn.component';
import { LastPostsComponent } from './components/lastPosts/lastPosts.component';
import { PostCardComponent } from './components/lastPosts/postCard/postCard.component';
import {AuthInterceptor} from './components/auth-interceptor';
/*C before Component stands for thr Component version*/

@NgModule({
  declarations: [
    RootComponent,
    AppComponent,
    Error404ScreenComponent,
    HeaderComponent,
    HeroViewComponent,
    FooterComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    AccManagerComponent,
    Error404Component,
    LogInComponent,
    SignUpComponent,
    CSignUpComponent,
    CLogInComponent,
    CommunityScreenComponent,
    LastPostsComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [RootComponent],
})
export class AppModule { }

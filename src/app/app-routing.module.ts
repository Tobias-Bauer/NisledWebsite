import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './screens/home/home.component';
import { Error404ScreenComponent } from './screens/404/404.component';
import { LogInComponent } from './screens/logIn/logIn.component';
import { SignUpComponent } from './screens/signUp/signUp.component';
import { CommunityScreenComponent } from './screens/community/community.component';
import {AuthGuard} from './components/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: AppComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'logIn', component: LogInComponent },
  { path: 'community', component: CommunityScreenComponent, canActivate: [AuthGuard]},
  { path: '**', component: Error404ScreenComponent },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }

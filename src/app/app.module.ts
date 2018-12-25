import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { Page404Component } from './pages/page404/page404.component';
import { HeaderComponent } from './pages/template/header/header.component';
import { FooterComponent } from './pages/template/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

import { GuardpagesGuard } from './guardpages.guard';
import { GetcontentserviceService} from '../app/services/getcontentservice.service'

import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contacts',      component: ContactsComponent ,canActivate: [GuardpagesGuard] },
  { path: 'login',      component: LoginComponent },
   { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: '**', component: Page404Component }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent,
    ContactsComponent,
    Page404Component,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    Ng4LoadingSpinnerModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    
    
  ],
  providers: [GuardpagesGuard,GetcontentserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

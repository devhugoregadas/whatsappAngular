import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { LogInComponent } from './pages/log-in/log-in.component';
import { ChatComponent } from './pages/chat/chat.component';
import { OverviewComponent } from './pages/overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    ChatComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

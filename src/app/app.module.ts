import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InlineStyleComponentComponent } from './inline-style-component/inline-style-component.component';
import { InlineTempleteComponentComponent } from './inline-templete-component/inline-templete-component.component';
import { InlineComponentComponent } from './inline-component/inline-component.component';
import { UserAuthModule } from './user-auth/user-auth.module';

@NgModule({
  declarations: [
    AppComponent,
    InlineStyleComponentComponent,
    InlineTempleteComponentComponent,
    InlineComponentComponent
  ],
  imports: [
    BrowserModule,
    UserAuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

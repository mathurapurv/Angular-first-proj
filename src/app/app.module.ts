import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent} from './server/server.component';
import { UserComponent } from './user/user.component';
import { DirectiveComponent } from './directive/directive.component';
import {PredefinedStylingDirective} from './directive/predefined-styling.directive';
import {HighlightStylingDirective} from './directive/highlight-styling.directive';
import { TextprocessComponent } from './textprocess/textprocess.component';


@NgModule({
  declarations: [
    AppComponent, ServerComponent, UserComponent,
    DirectiveComponent , PredefinedStylingDirective , HighlightStylingDirective, TextprocessComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, ServerComponent, UserComponent , DirectiveComponent, TextprocessComponent]
})
export class AppModule { }

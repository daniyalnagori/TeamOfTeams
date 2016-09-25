import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {NavComponent} from './nav.component'
import {AsideComponent} from './aside.component';
import {ArticleComponent} from './article.component';
import {ArticleLooping,ArticleShow} from './articleLooping';
import {App} from './injecting.service'
import {TodoService} from './todo-service';
import {TodoInput} from './input.service'
@NgModule({
  providers: [TodoService],
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,NavComponent,AsideComponent,ArticleComponent,ArticleLooping,ArticleShow],
  bootstrap:    [ AppComponent]
})
export class AppModule { }

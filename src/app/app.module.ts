import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestMenuComponent } from './testmenu/testmenu.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MatMenuModule, BrowserAnimationsModule],
  declarations: [AppComponent, HelloComponent, TestMenuComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

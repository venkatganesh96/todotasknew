import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyprojectsComponent } from './myprojects/myprojects.component';
import { FormsComponent } from './forms/forms.component';
import { RouterModule, Routes } from '@angular/router';
import { NewprojectComponent } from './newproject/newproject.component';
import { demodata } from './services/form.service';
const routes:Routes=[
  {path:'forms', component:FormsComponent},
  {path:'myproject', component:MyprojectsComponent},
  {path:'app',component:AppComponent},
  {path:'newproject',component:NewprojectComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MyprojectsComponent,
    FormsComponent,
    NewprojectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    provideClientHydration(),demodata
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

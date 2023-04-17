import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Usuario/listar/listar.component';
import { AddComponent } from './Usuario/add/add.component';
import { DeleteComponent } from './Usuario/delete/delete.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../app/Service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { SumaComponent } from './Suma/sumar/suma.component';
import { ListarSumasComponent } from './Suma/listar-sumas/listar-sumas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    DeleteComponent,
    SumaComponent,
    ListarSumasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

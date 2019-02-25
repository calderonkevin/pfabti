import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent }  from './common/header.component';
import { LeftComponent }  from './common/left.component';
import { RightComponent }  from './common/right.component';
import { FooterComponent }  from './common/footer.component';
import { CatalogComponent }  from './common/catalog.component';
import { LoginComponent }  from './login/login.component';
import { ZnoexisteComponent }  from './common/znoexiste.component';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { HttpModule } from '@angular/http';

import { routing, appRoutingProviders }  from './app.routing';

import { ModalModule } from 'ngx-bootstrap';
import { LoginService } from './common/services/login.service';
import { AdminGuard } from './common/services/admin.guard';

@NgModule({
  declarations: [ AppComponent, HeaderComponent,  LeftComponent,  RightComponent,  FooterComponent ,  CatalogComponent, LoginComponent, ZnoexisteComponent ],
  imports: [BrowserModule, FormsModule, HttpModule , routing, BrowserAnimationsModule, ModalModule.forRoot(), ToastrModule.forRoot()],
  providers: [appRoutingProviders, LoginService, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

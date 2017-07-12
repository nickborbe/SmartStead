// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'rxjs/Rx';
import 'hammerjs';

// Material design modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MaterializeModule } from 'angular2/materialize';
import {
  MaterialModule,
  MdButtonModule,
  MdCardModule,
  MdMenuModule,
  MdToolbarModule,
  MdIconModule,
  MdCheckboxModule,
  MdTabsModule,
  MdTabHeaderPosition,
  MdSidenavModule
} from '@angular/material';
// Components
import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { CameraComponent } from './camera/camera.component';
import { ACComponent } from './ac/ac.component';
import { LightsComponent } from './lights/lights.component';
import { TabsComponent } from './tabs/tabs.component';

// Services
import { SessionService} from './session.service';
import { AuthService} from './auth/auth.service';

// routes
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    CameraComponent,
    ACComponent,
    LightsComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // Material design
    MaterialModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCheckboxModule,
    MdTabsModule,
    MdSidenavModule,
    AppRoutingModule
  ],
  providers: [SessionService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

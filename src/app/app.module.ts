import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyLawyerNavigationComponent } from './my-lawyer-navigation/my-lawyer-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppointmentsComponent} from "./appointments/pages/appointments/appointments.component";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import { ClientsComponent } from './clients/pages/clients/clients.component';
import {NotificationComponent} from "./notifications/pages/notification/notification.component";
import {ClientNotificationComponent} from "./notifications/pages/client-notification/client-notification.component";
import { IndexComponent} from "./index/pages/index.component";
import { HttpClientModule} from "@angular/common/http";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {SearchLawyerComponent} from "./search-lawyer/pages/search-lawyer/search-lawyer.component";
import {OrderByPipe} from "./orderby.pipe";
import { AppointmentsClientComponent } from './appointments/pages/appointments-client/appointments-client.component';
import {LawyersComponent} from "./clients/pages/lawyers/lawyers.component";
import { RouterModule, Routes } from '@angular/router';
import {AppRoutingModule} from "./app-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    MyLawyerNavigationComponent,
    AppointmentsComponent,
    ClientsComponent,

    NotificationComponent,
    ClientNotificationComponent,
    IndexComponent,
    SearchLawyerComponent,
    OrderByPipe,
    AppointmentsClientComponent,
    LawyersComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatDividerModule,
    MatProgressBarModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

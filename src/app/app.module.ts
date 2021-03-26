import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComp } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonService } from './sharefolder/common.service';
import { CustomepipePipe } from './customepipe.pipe';
import { CustomedirectiveDirective } from './customedirective.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule } from '@angular/material/chips';
import {MatButtonModule } from '@angular/material/button';
import { ValidFormComponent } from './valid-form/valid-form.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './mod/module1/user-list/user-list.component';
import { FetchUserbyidComponent } from './mod/module1/fetch-userbyid/fetch-userbyid.component';
import { SoftRemovebyidComponent } from './mod/module1/soft-removebyid/soft-removebyid.component';
import { FetchUserbydojComponent } from './mod/module1/fetch-userbydoj/fetch-userbydoj.component';
import { FetchUserbydobComponent } from './mod/module1/fetch-userbydob/fetch-userbydob.component';
import { HardRemovebyidComponent } from './mod/module1/hard-removebyid/hard-removebyid.component';
import { UpdateUserComponent } from './mod/module1/update-user/update-user.component';
import { EditUserComponent } from './mod/module1/edit-user/edit-user.component';
import { RegisterUserComponent } from './mod/module1/register-user/register-user.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    CustomepipePipe,
    CustomedirectiveDirective,
    routingComp,
    ValidFormComponent,
    UserListComponent,
    FetchUserbyidComponent,
    SoftRemovebyidComponent,
    FetchUserbydojComponent,
    FetchUserbydobComponent,
    HardRemovebyidComponent,
    UpdateUserComponent,
    EditUserComponent,
    RegisterUserComponent
    
  ],
  imports: [
    BrowserModule,MatIconModule,MatRadioModule,MatCardModule,MatSelectModule,
    AppRoutingModule,BrowserAnimationsModule,MatFormFieldModule,ReactiveFormsModule,
    FormsModule,MatCheckboxModule,MatChipsModule,MatButtonModule,MatPaginatorModule,
    MatTableModule,HttpClientModule,FlexLayoutModule
    
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }

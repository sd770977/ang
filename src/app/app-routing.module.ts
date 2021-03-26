import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './mod/module1/edit-user/edit-user.component';
import { FetchUserbydobComponent } from './mod/module1/fetch-userbydob/fetch-userbydob.component';
import { FetchUserbydojComponent } from './mod/module1/fetch-userbydoj/fetch-userbydoj.component';
import { FetchUserbyidComponent } from './mod/module1/fetch-userbyid/fetch-userbyid.component';
import { HardRemovebyidComponent } from './mod/module1/hard-removebyid/hard-removebyid.component';
import { RegisterUserComponent } from './mod/module1/register-user/register-user.component';
import { SoftRemovebyidComponent } from './mod/module1/soft-removebyid/soft-removebyid.component';
import { UpdateUserComponent } from './mod/module1/update-user/update-user.component';
import { UserListComponent } from './mod/module1/user-list/user-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [{path:'',redirectTo:'user',pathMatch:'full'},
{path:'user',component:UserListComponent,
children:[
  {path:'edit/:idname',component:EditUserComponent},
  {path:'fetch-dob',component:FetchUserbydobComponent},
  {path:'fetch-doj',component:FetchUserbydojComponent},
  {path:'fetch/:idname3',component:FetchUserbyidComponent},
  {path:'hard-remove/:idname1',component:HardRemovebyidComponent},
  {path:'soft-remove/:idname2',component:SoftRemovebyidComponent},
  {path:'reg',component:RegisterUserComponent},
  {path:'up/:id',component:UpdateUserComponent},
]
},{path:'**',component:PagenotfoundComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComp=[UserListComponent,PagenotfoundComponent,
  EditUserComponent,FetchUserbydobComponent,FetchUserbydojComponent,FetchUserbyidComponent,
  HardRemovebyidComponent,SoftRemovebyidComponent,RegisterUserComponent,UpdateUserComponent]; 

 
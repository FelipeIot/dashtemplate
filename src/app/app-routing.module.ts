import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { ControlsComponent } from './controls/controls.component';

const routes: Routes = [ {path: 'contacts', component: ContactsComponent },{path: 'controls', component: ControlsComponent }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

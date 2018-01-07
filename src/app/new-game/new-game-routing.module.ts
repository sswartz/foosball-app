import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewMatchComponent } from './new-match/new-match.component';

const routes: Routes = [
  {path: '', component: NewMatchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewGameRoutingModule { }

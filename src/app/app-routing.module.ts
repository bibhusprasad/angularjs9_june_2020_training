import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

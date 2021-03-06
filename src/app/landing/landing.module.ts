import { NgModule } from '@angular/core';
import { IntranetComponent } from './intranet/intranet.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../_shared/shared.module';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: IntranetComponent },
  { path: 'search', component: SearchComponent },
  { path: 'search/:query', component: SearchComponent }
];


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [IntranetComponent, SearchComponent]
})
export class LandingModule {
}

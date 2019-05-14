import { AboutComponent } from './about.component';
import { NgModule } from '@angular/core';

import { RouterModule, Routes} from '@angular/router';

const ROUTES: Routes = [
  {path: '', component: AboutComponent}
];

@NgModule({
  declarations: [AboutComponent],
  imports: [RouterModule.forChild(ROUTES)]
})

export class AboutModule {

}

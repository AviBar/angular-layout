import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Layout1Component } from './layout1/layout1.component';
import { Layout2Component } from './layout2/layout2.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';



const routes: Routes = [
  { path: 'layout1', component: Layout1Component},
  { path: 'layout2', component: Layout2Component,  children: [
    { path: '', component: FooterComponent, outlet: 'footer' },
    { path: '', component: MainComponent, outlet: 'main' },
  ]
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

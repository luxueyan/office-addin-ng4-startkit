import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { DemoComponent } from './demo.component'

export const routes: Routes = [
  { path: 'demo', component: DemoComponent }
]

@NgModule({
  declarations: [DemoComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule {}

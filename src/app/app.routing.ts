import {PreloadAllModules, RouterModule, Routes, TitleStrategy} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      onSameUrlNavigation: 'reload'
      // enableTracing: true
    })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRouting {
}

import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyDashboardTileComponent } from './lazy-dashboard-tile.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { createCustomElement } from '@angular/elements';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  declarations: [LazyDashboardTileComponent],
  entryComponents:[
    LazyDashboardTileComponent
  ]
})
export class LazyDashboardTileModule {

  constructor(private injector: Injector) {
    const lazyTileCE = createCustomElement(LazyDashboardTileComponent, { injector: this.injector });
    customElements.define('lazy-dashboard-tile', lazyTileCE);
  }

}

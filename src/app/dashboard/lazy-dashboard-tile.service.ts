import { Injectable, NgModuleFactoryLoader, Injector, NgModuleRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LazyDashboardTileService {
  private moduleRef: NgModuleRef<any>;

  constructor(
    private loader: NgModuleFactoryLoader,
    private injector: Injector

  ) { }

  load(): Promise<void> {
    if (this.moduleRef) {
      return Promise.resolve();
    }
    const path = 'src/app/lazy-dashboard-tile/lazy-dashboard-tile.module#LazyDashboardTileModule';
    return this.loader.load(path).then(
      moduleFactory => {
        this.moduleRef = moduleFactory.create(
          this.injector
        ).instance;
      })
      .catch(err => {
        console.error('error loading module', err);
      });
  }
}

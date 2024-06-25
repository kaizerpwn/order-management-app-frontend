// app-initializer.service.ts
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadUser } from '../../shared/store/user/user.actions';

@Injectable({
  providedIn: 'root',
})
export class AppInitializerService {
  constructor(private store: Store) {}

  initApp(): void {
    this.store.dispatch(loadUser());
  }
}

import {
  APP_INITIALIZER,
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './routes/app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { UserReducer } from './shared/store/user/user.reducer';
import { UserEffects } from './shared/store/user/user.effects';
import { EffectsModule } from '@ngrx/effects';
import { httpInterceptor } from './core/interceptors/http.interceptor';
import { AppInitializerService } from './core/services/app-initializer.service';

const initialState = {};

const rootReducer = {
  user: UserReducer,
};

export function initializeApp(appInitializerService: AppInitializerService) {
  return () => appInitializerService.initApp();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withInterceptors([httpInterceptor]), withFetch()),
    importProvidersFrom(
      StoreModule.forRoot(rootReducer, { initialState }),
      EffectsModule.forRoot([UserEffects])
    ),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppInitializerService],
      multi: true,
    },
  ],
};

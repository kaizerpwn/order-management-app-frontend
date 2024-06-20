import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './routes/app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';  
import { StoreModule } from '@ngrx/store';
import { UserReducer } from './shared/store/user/user.reducer';
import { UserEffects } from './shared/store/user/user.effects';
import { EffectsModule } from '@ngrx/effects';

const initialState = {};

const rootReducer = {
  user: UserReducer 
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(),  
    provideHttpClient(withFetch()), 
    importProvidersFrom(
      StoreModule.forRoot(rootReducer, { initialState }),
      EffectsModule.forRoot([UserEffects]),
    )
  ]
};

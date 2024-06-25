import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { selectCurrentUser } from '../../shared/store/user/user.selectors';
import { Store } from '@ngrx/store';
import { User } from '../intefaces/user';
import { firstValueFrom } from 'rxjs';

export const authGuard: CanActivateFn = async (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router: Router = inject(Router);
  const store: Store<any> = inject(Store);

  let currentUser: User | null = await firstValueFrom(
    store.select(selectCurrentUser)
  );

  const protectedRoutes: string[] = [
    '/dashboard',
    '/products',
    '/users',
    '/orders',
  ];

  console.log(currentUser);

  if (
    protectedRoutes.includes(state.url) &&
    (!currentUser || currentUser.role !== 'admin')
  ) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};

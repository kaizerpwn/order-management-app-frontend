import { HttpInterceptorFn } from '@angular/common/http';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  
  const interceptedReq = req.clone({
    withCredentials: true
  });

  return next(interceptedReq);
};

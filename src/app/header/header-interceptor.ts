// import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
// import { loginService } from '../login/login.service';
// import { Observable } from 'rxjs';
// import { tap, catchError } from 'rxjs/operators';

// export class headerInterceptor implements HttpInterceptor{
//     private eventCount= 0;
//     constructor(private loginservice : loginService)
//     {}
    
//     intercept(
//         req: HttpRequest<any>,
//         next: HttpHandler
//     ):Observable<HttpEvent<any>> {
//         this.eventCount++;
//         this.loginservice.setLoading(true);
//         return next.handle(req).pipe(
//             tap(res=>
//                 {
//                     if (res instanceof HttpResponse) {
//                         this.decrementCount();
//                     }
//                 }),
//                 catchError(err=>
//                     {
//                         this.decrementCount();
//                         throw err;
//                     })
//         );
//     }

//     private decrementCount(){
//         this.eventCount--;
//         if (this.eventCount < 1)
//         {
//             this.loginservice.setLoading(false);
//         }
//     }
    
// }
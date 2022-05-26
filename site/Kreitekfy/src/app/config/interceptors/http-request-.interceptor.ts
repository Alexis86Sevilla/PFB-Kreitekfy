import {
    HttpEvent,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse,
    HttpInterceptor
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export class HttpRequestIntercept implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const retryNumber: number = 3;

        return next.handle(req)
            .pipe(
                retry(retryNumber),
                catchError((error: HttpErrorResponse) => {
                    let errorMessage = '';
                    if (error.status) {
                        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
                    } else {
                        errorMessage = `Error: ${error.message}`;
                    }
                    console.log(errorMessage);
                    return throwError(() => error)
                }
                )
            )
    }

}
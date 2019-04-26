import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';

export class ErrorHandler {

  public static handleError(error: Response | any) {
    let errorMessage: string;
    if (error instanceof Response) {
      errorMessage = `Error ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`;
    } else {
      errorMessage = error.toString();
    }
    console.log(errorMessage);
    return Observable.throw(errorMessage);
  }
}

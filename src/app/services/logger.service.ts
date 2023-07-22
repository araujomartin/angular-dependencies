import { Injectable } from '@angular/core';

// Not providing providedIn: 'root'
@Injectable()
export class LoggerService {

  constructor() { }

  info(message: string) {
    console.log(`INFO: ${message}`);
  }
}

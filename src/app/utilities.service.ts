import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  foo = 'testing';
  constructor() { }

  getFoo(): string {
    return this.foo;
  }
}

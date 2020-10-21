import { InjectionToken } from '@angular/core';
//import { AsyncLocalStorage } from 'async_hooks';

export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage',{
    providedIn: 'root',
    factory: () => localStorage
});

export class Storage {
}

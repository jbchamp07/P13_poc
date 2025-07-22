import { Routes } from '@angular/router';
import { App } from './app';
import { ChatComponent } from './chat.component/chat.component';
import { Login } from './login/login';

export const routes: Routes = [
   
    //{ path: 'chat', loadComponent: async () => import('./chat.component/chat.component').then(m => m.ChatComponent) },
    { path: 'chat', loadComponent: async () => (await import('./chat.component/chat.component')).ChatComponent },
    { path: '', component:Login }
];

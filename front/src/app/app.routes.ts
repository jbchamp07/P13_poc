import { Routes } from '@angular/router';
import { App } from './app';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
   
    { path: 'chat', loadComponent: async () => (await import('./chat/chat.component')).ChatComponent },
    { path: '', component:LoginComponent }
];

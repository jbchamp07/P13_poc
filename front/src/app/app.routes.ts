import { Routes } from '@angular/router';
import { App } from './app';
import { ChatComponent } from './chat.component/chat.component';

export const routes: Routes = [
    {
        path: '',component:ChatComponent
      }
//       { path: 'chat', loadComponent: () => import('./chat.component/chat.component').then(m => m.ChatComponent) },
//   { path: '', redirectTo: 'chat', pathMatch: 'full' }
];

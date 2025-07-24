import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  role: 'client' | 'admin' = 'client'; // valeur par défaut
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {
    
  }

loginAsAdmin() {
    const body = {
  login: this.username,
  password: this.password
};

this.http.post<boolean>('http://localhost:8080/login', body).subscribe({
  next: (res) => {
    if (res === true) {
      // Redirection avec paramètre ?role=admin
      this.router.navigate(['/chat'], { queryParams: { role: 'admin' } });
    } else {
      alert('Identifiant ou mot de passe incorrect');
    }
  },
  error: () => {
    alert('Erreur serveur');
  }
});
  }

  loginAsClient() {
    this.router.navigate(['/chat']);
  }
}

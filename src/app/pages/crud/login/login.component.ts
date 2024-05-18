import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/shared/services/storage.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  isLoggedIn: boolean = false;
  isLoginFailed: boolean = false;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private authService: AuthService, 
    private storageService: StorageService
  ) {
    this.formLogin = fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.router.navigate(['/home'])
    }
  }

  goToHome(): void {
    this.authService.login(this.formLogin.value).subscribe({
      next: data => {
        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        window.location.reload();
      },
      error: err => {
        this.errorMessage = 'Credenciais inválidas, verifique os dados e tente novamente.';
        this.isLoginFailed = true;
        console.log(err.error['detail'])
      }
    });
    
  }
  reloadPage(): void {
    window.location.reload();
  }

  // goToHome(): void {
  //   this.router.navigate(['/home']);
  // }
}
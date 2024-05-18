import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { StorageService } from './shared/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Controle de Estoque';

  constructor (
    private storageService: StorageService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    if (!this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.router.navigate(['/login'])
    }
  }
  public isLoggedIn: boolean = this.storageService.isLoggedIn()
}

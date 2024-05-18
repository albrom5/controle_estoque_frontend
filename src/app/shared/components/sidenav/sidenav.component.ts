import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  constructor (
    private storageService: StorageService
  ) {}

  ngOnInit(): void {}
  public isLoggedIn: boolean = this.storageService.isLoggedIn()

  logout() {
    this.storageService.logout();
    window.location.reload();
  }
}

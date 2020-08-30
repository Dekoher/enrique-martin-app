import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  sessionButton: boolean;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.auth.hasSession().subscribe((session) => {
      if (session) {
        this.sessionButton = true;
      } else {
        this.sessionButton = false;
      }
    });
  }

  logOut() {
    this.auth.logOut().then(() => {
      this.router.navigate(['/home']);
    });
  }

  logIn() {
    this.auth.logOut().then(() => {
      this.router.navigate(['/auth/login']);
    });
  }
}

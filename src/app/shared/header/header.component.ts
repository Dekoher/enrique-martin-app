import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  sessionButton: boolean;
  constructor(
    private auth: AuthService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.auth.hasSession().subscribe((session) => {
      if (session) {
        this.sessionButton = true;
      } else {
        this.sessionButton = false;
      }
    });
  }

  logOut(): void {
    this.auth.logOut().then(() => {
      this.router.navigate(['/home']);
    });
  }

  logIn(): void {
    this.auth.logOut().then(() => {
      this.router.navigate(['/auth/login']);
    });
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '350px',
      data: 'login'
    });
  }

  openRigistryDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '350px',
      data: 'registry'
    });
  }
}

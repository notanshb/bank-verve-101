import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav,
         MatSidenavModule,
         MatSidenavContainer,
        MatSidenavContent } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user$= this.authService.currentUser$;

  @ViewChild(MatSidenav)
  sidenav !: MatSidenav;

  constructor(private authService: AuthenticationService,
              private observer: BreakpointObserver) { }

  ngOnInit(): void {
  }

  ngAfterViewInIt() {
    this.observer.observe(['(max-width: 800px'])
    .subscribe({next : res=>{
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      }
      else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    }
    })
  }
}

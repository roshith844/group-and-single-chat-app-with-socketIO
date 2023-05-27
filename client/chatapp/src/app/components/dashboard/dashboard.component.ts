import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userId = ''
  openTab = 1;
  toggleTabs($tabNumber: number) {
    this.openTab = $tabNumber;
  }

  constructor(private localstorageService: LocalstorageService) { }

  ngOnInit(): void {
    let value = this.localstorageService.getUserIdFromLocalStorage()
    if (value) {
      this.userId = value
    }
  }
}

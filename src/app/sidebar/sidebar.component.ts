import { Component, OnInit } from '@angular/core';
import { ShellService } from '../shell/shell.service';

@Component({
  selector: 'sidebar-cmp',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private shellService: ShellService) { }

  ngOnInit() {
  }

  navigate(url: string){
    this.shellService.navigate(url);
  }

}

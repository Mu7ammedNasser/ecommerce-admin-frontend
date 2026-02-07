import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBar } from "./Components/side-bar/side-bar";
import { SidebarService } from "./Core/Services/sidebar.service";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly sidebar = inject(SidebarService);
}

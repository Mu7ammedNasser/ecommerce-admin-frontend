import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Users as UsersService } from '../../Core/Services/users';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.html',
  styleUrls: ['./users.css'],
})
export class Users implements OnInit {
  users = signal<any[]>([]);

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getAllUsers().subscribe((data: any) => {
      // Filter out admin users
      const filteredUsers = data.filter((user: any) => user.role !== 'admin');
      this.users.set(filteredUsers);
    });
  }

  toggleUserStatus(user: any) {
    user.isActive = !user.isActive;
    // Update the users signal to trigger change detection
    this.users.set([...this.users()]);
  }

  blockUser(user: any) {
    this.toggleUserStatus(user);
  }

  activateUser(user: any) {
    this.toggleUserStatus(user);
  }
}

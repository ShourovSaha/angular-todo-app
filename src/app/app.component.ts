import { Component } from '@angular/core';
import { TodoItem } from './todoItem';
import { TodoList } from './todoList';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'algular-todo';

  showComplete: boolean = false;

  private list = new TodoList("Sam", [new TodoItem("Brush teeth", true)
    , new TodoItem("Bath", false)
    , new TodoItem("Study", false)]);

  get userName(): string {
    return this.list.user;
  }

  get pendingItemCount(): number {
    return this.list.Items.filter(item => !item.complete).length;
  }

  get completedItemCount(): number {
    return this.list.Items.filter(item => item.complete).length;
  }

  get items(): readonly TodoItem[] {
    return this.list.Items.filter(item => this.showComplete || !item.complete);
  }

  addItem(newTask: string) {
    if (newTask != null)
      this.list.addItem(newTask);
  }
}

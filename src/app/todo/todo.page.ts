import { Component } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { ToastController } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-todo',
  templateUrl: 'todo.page.html',
  styleUrls: ['todo.page.scss']
})
export class ToDoPage {
  
  items = [];

  constructor(private toastController: ToastController) {
  }

  async invalidDateToast() {
    const toast = await this.toastController.create({
      message: 'Invalid date.',
      duration: 2000
    });
    toast.present();
  }

  onSubmit(text) {
    
    // if text cotains ' MM-DD-YYYY ', ' MM-DD-YY ' or ' MM/DD/YY ' 
    //   the text is considered invalid and it is not added to the To Do list

    let match = text.match(/\ (0?[1-9]|[12][0-9]|3[01])\-(0?[1-9]|1[012])\-\d{4}\ /) ||
                text.match(/\ (0?[1-9]|[12][0-9]|3[01])\-(0?[1-9]|1[012])\-\d{2}\ /) ||
                text.match(/\ (0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/\d{2}\ /);
    if (match)
    {
      this.invalidDateToast();
      return;
    }

    this.items.push(text);
    this.items = this.items.sort((a,b) => b.localeCompare(a));
  }

  viewItem(item) {}
}

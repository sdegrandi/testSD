import { Component } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-dogs',
  templateUrl: 'dogs.page.html',
  styleUrls: ['dogs.page.scss']
})
export class DogsPage {

  dogs = [
    "affenpinscher",
    "african",
    "airedale",
    "akita",
    "appenzeller"
  ];
  images = [];

  constructor(private http: HTTP) {}

  changeValue(event)
  {
    // when the dropdown selected item is changed, the image buffer is clean to avoid misunderstanding

    this.images = [];
  }

  onSubmit(selected) {

    if (selected == "")
      return;

    // call the dog api when an item is selected

    this.http.get(`https://dog.ceo/api/breed/${selected}/images`, {}, {})
    .then(data => {
      let { message } = JSON.parse(data.data);
      this.images = message;
    })
  }


}

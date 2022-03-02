import {Component, OnInit} from '@angular/core';
import {Content} from "../helper-files/content-interface";
// import {ContentList} from "../helper-files/content-list";

// import {Content} from 'src/app/helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  Sekiro: Content;
  Fallout4: Content;
  DevilSurvivor: Content;
  contentArr: any;

  constructor() {
    this.Sekiro = {
      id: 0,
      title: "Sekiro",
      description: "Sekiro: Shadows Die Twice is a 2019 action-adventure game developed by FromSoftware and published by Activision.",
      creator: "Hidetaka Miyazaki",
      imgURL: "https://i.pcmag.com/imagery/reviews/015s7W8bORumChblqFNWD34-7..v1569473132.jpg",
      type: "Action"
    };

    this.Fallout4 = {
      id: 1,
      title: "Fallout4",
      description: "Fallout 4 is a 2015 action role-playing game developed by Bethesda Game Studios and published by Bethesda Softworks.",
      creator: "Emil Pagliarulo",
      imgURL: "https://images-na.ssl-images-amazon.com/images/I/913m4BOW-NL.jpg",
      type: "ARPG"
    };

    this.DevilSurvivor = {
      id: 2,
      title: "Devil Survivor",
      description: "Shin Megami Tensei: Devil Survivor is a tactical role-playing video game in the Megami Tensei series developed by Atlus for the Nintendo DS. ",
      creator: "Shinjiro Takada",
      imgURL: "https://m.media-amazon.com/images/I/815uewDXaPL._AC_SX522_.jpg",
      type: "SRPG"
    };

    //this.contentArr = new ContentList();
    // this.contentArr.pushArr(this.Sekiro);
    // this.contentArr.pushArr(this.Fallout4);
    // this.contentArr.pushArr(this.DevilSurvivor);

  }

  ngOnInit(): void {
  }


}
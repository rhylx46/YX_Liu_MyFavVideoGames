import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
 // myFavGames: Content[];

 myFavGames: Content[];
 constructor (){
   this.myFavGames = [
     {
       id: 0,
       title: "Sekiro",
       description: "Sekiro: Shadows Die Twice is a 2019 action-adventure game developed by FromSoftware and published by Activision.",
       creator: "Hidetaka Miyazaki",
       imgURL: "https://upload.wikimedia.org/wikipedia/en/6/6e/Sekiro_art.jpg",
       type: "Action"
     },

     {
       id: 1,
       title: "Fallout 4",
       description: "Fallout 4 is a 2015 action role-playing game developed by Bethesda Game Studios and published by Bethesda Softworks.",
       creator: "Emil Pagliarulo",
       imgURL: "https://upload.wikimedia.org/wikipedia/en/7/70/Fallout_4_cover_art.jpg",
       type: "ARPG"
     },

     {
       id: 2,
       title: "Devil Survivor Overclocked",
       description: "Devil Survivor Overclocked, also known as Devil Survivor Overclock in Japan, is an enhanced port of the original Devil Survivor made exclusively for the Nintendo 3DS, with development by Career Soft.",
       creator: "Shinjiro Takada",
       imgURL: "https://m.media-amazon.com/images/I/815uewDXaPL._AC_SX522_.jpg",
       type: "SRPG"
     },

     {
       id: 3,
       title: "Devil Survivor 2 Record Breaker",
       description: "Shin Megami Tensei: Devil Survivor 2 is a tactical role-playing game in the Megami Tensei series developed by Atlus for the Nintendo DS.",
       creator: "Shinjiro Takada",
       imgURL: "https://m.media-amazon.com/images/I/81VSAAO-DkL._AC_SL1500_.jpg",
       type: "SRPG"
     },

     {
       id: 4,
       title: "Fatal Frame: Mask of the Lunar Eclipse",
       description: "Zero: Tsukihami no Kamen is a survival horror video game primarily developed by Tecmo Koei and published by Nintendo for the Wii video game console.",
       creator: "Goichi Suda",
       imgURL: "https://upload.wikimedia.org/wikipedia/zh/thumb/8/8e/Fatal_Frame_IV.jpg/220px-Fatal_Frame_IV.jpg",
       type: "Horror"
     },

     {
       id: 5,
       title: "Kunoichi",
       description: "Nightshade, released in Japan as Kunoichi and stylized in all regions with the kanji 忍 behind the title, is an action video game for the PlayStation 2, developed by Overworks and published by Sega in 2003.",
       creator: "Yutaka Minobe",
       imgURL: "https://upload.wikimedia.org/wikipedia/en/b/ba/Nightshade_%28PS2%29_Coverart.png"
     }

   ];
 }

showInfo(item:any) {

  console.log("id: " + item.id + "\ntitle: " + item.title );
  
}

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
 // myFavGames: Content[];
@Input() item?: Content;
 msg?:string;
 color?: string;  

 myFavGames: Content[];
 constructor (){
   this.myFavGames = [
     {
       id: 0,
       title: "Sekiro",
       description: "Sekiro: Shadows Die Twice is a 2019 action-adventure game developed by FromSoftware and published by Activision.",
       creator: "Hidetaka Miyazaki",
       imgURL: "https://upload.wikimedia.org/wikipedia/en/6/6e/Sekiro_art.jpg",
       type: "Action",
       tags: ["Soulslike", "Game of the Year"]
     },

     {
       id: 1,
       title: "Fallout 4",
       description: "Fallout 4 is a 2015 action role-playing game developed by Bethesda Game Studios and published by Bethesda Softworks.",
       creator: "Emil Pagliarulo",
       imgURL: "https://upload.wikimedia.org/wikipedia/en/7/70/Fallout_4_cover_art.jpg"
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
       type: "Survival Horror"
     },

     {
       id: 5,
       title: "Kunoichi",
       description: "Nightshade, released in Japan as Kunoichi and stylized in all regions with the kanji 忍 behind the title, is an action video game for the PlayStation 2, developed by Overworks and published by Sega in 2003.",
       creator: "Yutaka Minobe",
       imgURL: "https://upload.wikimedia.org/wikipedia/en/b/ba/Nightshade_%28PS2%29_Coverart.png",
       type: "Action"
     },

     {
      id: 6,
      title: "Resident Evil 2 Remake",
      description: "Resident Evil 2 is a 2019 survival horror game developed and published by Capcom. A remake of the 1998 game of the same name.",
      creator: "Shinji Mikami",
      // imgURL: "https://upload.wikimedia.org/wikipedia/en/f/fd/Resident_Evil_2_Remake.jpg",
      type: "Survival Horror",
      tags: ["RE","Remake"] 
    }

     

   ];
 }

showInfo(item:any):void {

  console.log("id: " + item.id + "\ntitle: " + item.title );
  
}


gameFilter(game:string):any {
    
    for(let i = 0; i < this.myFavGames.length; i++) {
      
      if (game == this.myFavGames[i].title) {
        this.msg = 'Yes, there is the game you want';
        this.color = "green";
        //return [this.msg, this.color];

        return this.msg;
      } 
      else  {
        this.msg = 'No, can\'t find it';
        this.color = "red";
      }
      //console.log("See:", this.myFavGames[i].title);
      
    }


    // if (game == "Sekiro" || game == "Fallout 4" || game == "Resident Evil 2 Remake"|| game == "Kunoichi"|| game == "Fatal Frame: Mask of the Lunar Eclipse"|| game == "Devil Survivor Overclocked"|| game == "Devil Survivor 2 Record Breaker") {
    //     this.msg = 'Yes, there is the game you want';
    //     this.color = "green";
    // } else {
    //     this.msg = 'No, can\'t find it';
    //     this.color = "red";
    // }

    
}

addGameToList(newGameFromCC: Content): any {

  this.myFavGames.push(newGameFromCC);

  this.myFavGames = [...this.myFavGames];


}


  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';


import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private nativeAudio: NativeAudio) { }

  valor1: string = "roj";
  valor2: string = "azu";
  valor3: string = "ama";
  valor4: string = "ver";
  valor5: string = "vio";

  language: string = "esp";
  idiomaIMG: string = "assets/idioma/esp.png";

  audio = new Audio();

  
  categoria(cat: string){
    if (cat == "num") {
      this.valor1 = "1";
      this.valor2 = "2";
      this.valor3 = "3";
      this.valor4 = "4";
      this.valor5 = "5";
    } else if (cat == "ani") {
      this.valor1 = "leo";
      this.valor2 = "coati";
      this.valor3 = "tapir";
      this.valor4 = "tucan";
      this.valor5 = "zorro";
    }else if (cat == "col") {
      this.valor1 = "roj";
      this.valor2 = "azu";
      this.valor3 = "ama";
      this.valor4 = "ver";
      this.valor5 = "vio";
    }
  }

  idioma(idioma: string){
    this.language = idioma;
    this.idiomaIMG = `assets/idioma/${idioma}.png`;
    
  }

  play(ojeto: string){

    if (ojeto == "v1") {
      //reproduci el audio 1;
    this.audio.src = "assets/sonidos/"+this.language+"/"+this.valor1+".wav";
    this.audio.pause();
    this.audio.load();
    this.audio.play();

    } else if (ojeto == "v2") {
      //reproduci el audio 1;
      this.audio.src = "assets/sonidos/"+this.language+"/"+this.valor2+".wav";
      this.audio.pause();
      this.audio.load();
      this.audio.play();
    } else if (ojeto == "v3") {
      //reproduci el audio 1;
      this.audio.src = "assets/sonidos/"+this.language+"/"+this.valor3+".wav";
      this.audio.pause();
      this.audio.load();
      this.audio.play();
    }else if (ojeto == "v4") {
      //reproduci el audio 1;
      this.audio.src = "assets/sonidos/"+this.language+"/"+this.valor4+".wav";
      this.audio.pause();
      this.audio.load();
      this.audio.play();
    }else if(ojeto == "v5") {
      //reproduci el 5
      this.audio.src = "assets/sonidos/"+this.language+"/"+this.valor5+".wav";
      this.audio.pause();
      this.audio.load();
      this.audio.play();
    }
  }

}

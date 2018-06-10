import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cursos: Array<Object>;

  constructor() { }

  ngOnInit() {

    this.cursos = [
      {
        name: 'Javascript na prática',
        short_description: 'Normal The Normal type is the most basic type of Pokémon. They are very common and ...',
        classes: 20,
        rate: 4.8,
        instructor: 'Core Universal',
        category: 'Design System Mobile',
        image: 'https://udemy-images.udemy.com/course/240x135/896886_2822_2.jpg',
        link: '/curso-detalhe/'
      },
      {
        name: 'Programação Reativa',
        short_description: 'Normal The Normal type is the most basic type of Pokémon. They are very common and ...',
        classes: 20,
        rate: 4.8,
        instructor: 'Core Universal',
        category: 'Design System Mobile',
        image: 'https://udemy-images.udemy.com/course/240x135/1650610_2673_5.jpg',
        link: '/curso-detalhe/'
      },
      {
        name: 'Desenvolvimento com SASS',
        short_description: 'Normal The Normal type is the most basic type of Pokémon. They are very common and ...',
        classes: 20,
        rate: 4.8,
        instructor: 'Core Universal',
        category: 'Design System Mobile',
        image: 'https://udemy-images.udemy.com/course/240x135/1026604_790b_2.jpg',
        link: '/curso-detalhe/'
      },
      {
        name: 'Como criar sites responsivos',
        short_description: 'Normal The Normal type is the most basic type of Pokémon. They are very common and ...',
        classes: 20,
        rate: 4.8,
        instructor: 'Core Universal',
        category: 'Design System Mobile',
        image: 'https://udemy-images.udemy.com/course/240x135/1529576_38db_7.jpg',
        link: '/curso-detalhe/'
      },
      {
        name: 'Desenvolvimento NodeJS',
        short_description: 'Normal The Normal type is the most basic type of Pokémon. They are very common and ...',
        classes: 20,
        rate: 4.8,
        instructor: 'Core Universal',
        category: 'Design System Mobile',
        image: 'https://udemy-images.udemy.com/course/240x135/934680_158b_2.jpg',
        link: '/curso-detalhe/'
      }
    ];

  }

}

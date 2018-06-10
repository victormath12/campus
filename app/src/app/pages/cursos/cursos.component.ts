import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos = [];

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
      },
      {
        name: 'Subir sua aplicação na Cloud Itaú',
        short_description: 'Normal The Normal type is the most basic type of Pokémon. They are very common and ...',
        classes: 20,
        rate: 4.8,
        instructor: 'Core Universal',
        category: 'Design System Mobile',
        image: 'https://udemy-images.udemy.com/course/240x135/1587732_21d4.jpg',
        link: '/curso-detalhe/'
      },
      {
        name: 'Performance no Angular 6 com Voxel',
        short_description: 'Normal The Normal type is the most basic type of Pokémon. They are very common and ...',
        classes: 20,
        rate: 4.8,
        instructor: 'Core Universal',
        category: 'Design System Mobile',
        image: 'https://udemy-images.udemy.com/course/240x135/756150_c033_2.jpg',
        link: '/curso-detalhe/'
      },
      {
        name: 'Desenvolvimento de Progressive Web Apps',
        short_description: 'Normal The Normal type is the most basic type of Pokémon. They are very common and ...',
        classes: 20,
        rate: 4.8,
        instructor: 'Core Universal',
        category: 'Design System Mobile',
        image: 'https://udemy-images.udemy.com/course/240x135/967528_3a9c_2.jpg',
        link: '/curso-detalhe/'
      }
    ];

  }

}

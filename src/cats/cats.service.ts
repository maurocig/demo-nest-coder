import { Injectable } from '@nestjs/common';
import { Cat } from 'src/interfaces/cat/cat.interface';

@Injectable() // 'decora' la clase de abajo.
export class CatsService {
  private cats: Cat[] = []; // [{name, age, breed}, {name, age, breed}]

  createCat(cat: Cat) {
    this.cats.push(cat);
  }

  getAll(): Cat[] {
    return this.cats;
  }
}

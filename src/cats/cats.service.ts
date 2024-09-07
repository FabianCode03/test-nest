import { Injectable } from '@nestjs/common';
import { Cat } from './entities/cat.entity';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(createCatDto: CreateCatDto) {
    const newCat = new Cat(
      this.cats.length + 1,
      createCatDto.name,
      createCatDto.age,
      createCatDto.breed,
      new Date(),
      new Date(),
    );

    this.cats.push(newCat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}

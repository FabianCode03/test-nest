export class Cat {
  constructor(
    public id: number,
    public name: string,
    public age: number,
    public breed: string,
    public createdAt: Date = new Date(),
    public lastUpdatedAt: Date = new Date(),
  ) {}
}

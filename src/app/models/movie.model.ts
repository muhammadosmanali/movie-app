export class MovieModel {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public imgPath: string,
    public duration: number,
    public genre: string[],
    public language: string,
    public mpaaRating: MpaaRating,
    public userRating: string
  ) {}
}

class MpaaRating {
  constructor(public type: string, public label: string) {}
}

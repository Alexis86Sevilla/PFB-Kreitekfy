export class Album {
  id: number | undefined;
  name: string;
  description?: string;


  constructor(id: number | undefined, name: string, description: string | undefined) {
    this.id = id
    this.name = name
    this.description = description;
  }

}
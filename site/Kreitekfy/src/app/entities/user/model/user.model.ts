export class User {
    id: number | undefined;
    name: string;
    isAdmin: boolean;


  constructor(id: number , name: string, isAdmin: boolean) {
    this.id = id
    this.name = name
    this.isAdmin = isAdmin
  }

}
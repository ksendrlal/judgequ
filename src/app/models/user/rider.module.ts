export class Rider {
  constructor(
    public id: number = -1,
    public name: string = '',
    public surname: string = '',
    public patronymic: string = '',
    public dateofbirth: Date,
    public login: string = '',
    public password: string = ''
  ) { }
  build({ id, name, surname, patronymic, dateofbirth, login, password }) : Rider {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.patronymic = patronymic;
    this.dateofbirth = dateofbirth;
    this.login = login;
    this.password = password;

    return this;
  }
}

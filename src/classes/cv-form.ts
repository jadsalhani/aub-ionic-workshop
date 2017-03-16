/**
 * CVForm
 */
export class CVForm {
  public name: string;
  public email: string;
  public phonenumber: number;
  public country: string;
  public isGraduated: boolean;
  public profession: string;

  constructor(
    name: string,
    email: string,
    phonenumber: number,
    country: string,
    isGraduated: boolean,
    profession: string
  ) {
    this.name = name;
    this.email = email;
    this.phonenumber = phonenumber;
    this.country = country;
    this.isGraduated = isGraduated;
    this.profession = profession;
  }
}

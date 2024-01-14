import {IsEnum, MinLength} from 'class-validator'

export class CreateNinjaDto {
  @MinLength(3)  //validating the name (Validation pipe)
  name: string;


  @IsEnum(['stars', 'nunchucks'], {message: "Use correct Weapon!"})
  weapon: 'stars' | 'nunchucks';
}

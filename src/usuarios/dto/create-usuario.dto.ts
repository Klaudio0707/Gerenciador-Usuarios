import { IsEmail, IsNotEmpty, IsString, MinLength,  IsEnum, IsOptional  } from "class-validator";
import {nivelUsuario} from './nivel' 

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty({ message: 'O nome de usuário não pode estar vazio.' })
  nome: string;

  @IsEmail({}, { message: 'Por favor, insira um endereço de email válido.' })
  @IsNotEmpty({ message: 'O email não pode estar vazio.' })
  email: string;

  @IsString()
  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres.' })
  @IsNotEmpty({ message: 'A senha não pode estar vazia.' })
  senha: string;
  
  @IsEnum(nivelUsuario,{message: 'Nível deve ser ADM ou COMUM'})
  @IsOptional()
  nivel?: nivelUsuario; 
}
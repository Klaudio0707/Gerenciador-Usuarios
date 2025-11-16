import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsuariosModule } from './usuarios/usuarios.module';
import { EnderecosModule } from './enderecos/enderecos.module';
import { DatabaseModule } from './config/database.module';
import * as dotenv from "dotenv"

dotenv.config()
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UsuariosModule, 
    EnderecosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

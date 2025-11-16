import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsuarioEntity } from './entities/usuario.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([UsuarioEntity]),],
  controllers: [UsuariosController],
  providers: [UsuariosService],
})
export class UsuariosModule {}

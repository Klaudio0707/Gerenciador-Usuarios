import { Module } from '@nestjs/common';
import { EnderecosService } from './enderecos.service';
import { EnderecosController } from './enderecos.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { EnderecoEntity } from './entities/endereco.entity';

@Module({
  imports:[ SequelizeModule.forFeature([EnderecoEntity]),],
  controllers: [EnderecosController],
  providers: [EnderecosService],
})
export class EnderecosModule {}

import { Injectable } from '@nestjs/common';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { EnderecoEntity } from './entities/endereco.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class EnderecosService {
constructor(
  @InjectModel(EnderecoEntity)
  private readonly enderecoModel: typeof EnderecoEntity,
){}

private async verificarEndereco(enderecoID:string, usuarioId:string): Promise<EnderecoEntity> {
  const endereco = await this.enderecoModel.findOne({
    where: {id: enderecoID, usuarioId},
  });
  if(!endereco) {
    throw new Error('Endereço não encontrado ou não pertence ao usúario!');

  }
return endereco;
}
  create(createEnderecoDto: CreateEnderecoDto) {
    return 'This action adds a new endereco';
  }

  findAll() {
    return `This action returns all enderecos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} endereco`;
  }

  update(id: number, updateEnderecoDto: UpdateEnderecoDto) {
    return `This action updates a #${id} endereco`;
  }

  remove(id: number) {
    return `This action removes a #${id} endereco`;
  }
}

import { Optional } from '@nestjs/common';
import {Table, Column, Model, PrimaryKey, DataType, Unique, AllowNull, CreatedAt, UpdatedAt, ForeignKey} from 'sequelize-typescript'
import { UsuarioEntity } from 'src/usuarios/entities/usuario.entity';

@Table({
    tableName: 'endereco',
    timestamps: true, 
  })

export class EnderecoEntity extends Model {
    

@PrimaryKey
@Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
        })
declare id: string;

@Column({
    type: DataType.STRING,
    unique: false,
    allowNull: false,
})
 declare rua: string

 @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: false,
 })
 declare numero:string

 @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: false,
})
  declare complemento: string;


 @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: false,
})
  declare bairro: string;
  
  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: false,
})
  declare cidade: string;
  
  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: false,
})
  declare estado: string;

  @ForeignKey(() => UsuarioEntity)
  @Column(DataType.UUID)
  declare usuarioId: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  declare ativo: boolean;

  @CreatedAt
  declare criadoEm: Date;

  @UpdatedAt
  declare atualizadoEm: Date;
}

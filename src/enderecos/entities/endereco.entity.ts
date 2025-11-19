import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
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
    allowNull: false,
  })
  declare rua: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare numero: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare complemento?: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare bairro: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare cidade: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare estado: string;

  @ForeignKey(() => UsuarioEntity)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  declare usuarioId: string;

  @BelongsTo(() => UsuarioEntity)
  declare usuario: UsuarioEntity;

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

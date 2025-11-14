import {Table, Column, Model, PrimaryKey, DataType, Unique, AllowNull, CreatedAt, UpdatedAt} from 'sequelize-typescript'
import {nivelUsuario}  from '../dto/nivel'

@Table({
  tableName: 'usuarios',
  timestamps: true, 
})
export class Usuario extends Model  {
@PrimaryKey
@Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
        })
declare id: string;

@Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
})
 declare nome: string

 @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
 })
 declare email:string

  @AllowNull(false)
  @Column(DataType.STRING)
  declare senha: string;

@Column({
    type:DataType.ENUM(...Object.values(nivelUsuario)),
    allowNull: false,
    defaultValue: nivelUsuario.USUARIO_COMUM
})
declare nivel: string

 @AllowNull(true)
  @Column(DataType.DATEONLY)
  declare dataNascimento?: Date;
  
  @CreatedAt
  declare criadoEm: Date;

  @UpdatedAt
  declare atualizadoEm: Date;
}

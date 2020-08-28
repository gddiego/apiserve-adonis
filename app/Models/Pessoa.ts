import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Pessoa extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: number

  @column()
  public nome_pessoa: string

  @column()
  public natureza_pessoa: string

  @column()
  public tipo_pessoa: string

  @column()
  public tipo_pessoa_id: number

  @column()
  public cpf: number

  @column()
  public rg: number

  @column()
  public orgao_expedidor: string

  @column()
  public id_uf_rg: number

  @column()
  public renach: number

  @column()
  public registro_cnh: number

  @column()
  public data_primeira_habilitacao: DateTime

  @column()
  public data_validade_cnh: DateTime

  @column()
  public uf_cnh_id: number

  @column()
  public sexo: string

  @column()
  public nome_fantasia: string

  @column()
  public cnpj: number

  @column()
  public inscricao_estadual: number

  @column()
  public uf_inscricao_estadual: string

  @column()
  public data_abertura: DateTime

  @column()
  public natureza_juridica: string

  @column()
  public porte_empresa: string

  @column()
  public regime_tributacao: string

  @column()
  public cliente: string
  @column()
  public usuario: string
  @column()
  public funcionario: string

  @column()
  public transportadora: string

  @column()
  public empresa: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

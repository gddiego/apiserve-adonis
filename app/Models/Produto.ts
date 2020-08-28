import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Produto extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public descricao: string

  @column()
  public sub_categoria_id: number

  @column()
  public codigo_ean: number

  @column()
  public estoque_minimo: number

  @column()
  public data_ultima_entrada: DateTime

  @column()
  public data_ultima_saida: DateTime

  @column()
  public situacao: boolean

  @column()
  public fracao_controle: string
  @column()
  public preco_custo: number

  @column()
  public preco_venda: number


  @column()
  public preco_ultima_entrada: number

  @column()
  public unidade_id: number

  @column()
  public categoria_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Pessoas extends BaseSchema {
  protected tableName = 'pessoas'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
      table.string('nome_pessoa').notNullable()
      table.string('natureza_pessoa').notNullable()
      table.string('tipo_pessoa').notNullable()
      table.integer('tipo_pessoa_id').notNullable()
      table.string('cpf').notNullable()
      table.string('rg').notNullable()
      table.string('orgao_expedidor').notNullable()
      table.integer('id_uf_rg').notNullable()
      table.string('renach').notNullable()
      table.string('registro_cnh').notNullable()
      table.string('data_primeira_habilitacao').notNullable()
      table.string('data_validade_cnh').notNullable()
      table.integer('uf_cnh_id').notNullable()
      table.string('sexo').notNullable()
      table.string('nome_fantasia').notNullable()
      table.string('cnpj').notNullable()
      table.string('inscricao_estadual').notNullable()
      table.string('uf_inscricao_estadual').notNullable()
      table.string('data_abertura').notNullable()
      table.string('natureza_juridica').notNullable()
      table.string('porte_empresa').notNullable()
      table.string('regime_tributacao').notNullable()
      table.string('cliente').notNullable()
      table.string('fornecedor').notNullable()
      table.string('usuario').notNullable()
      table.string('funcionario').notNullable()
      table.string('transportadora').notNullable()
      table.string('empresa').notNullable()
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

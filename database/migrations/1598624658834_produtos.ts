import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Produtos extends BaseSchema {
  protected tableName = 'produtos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('descricao')
      table.integer('sub_categoria_id')
        .unsigned()
        .references('id')
        .inTable('sub_categoria_produtos')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('codigo_ean').notNullable()
      table.integer('tipo_id').notNullable()
      table.integer('estoque_minimo').notNullable()
      table.string('data_ultima_entrada').notNullable()
      table.string('data_ultima_saida').notNullable()
      table.boolean('situacao').notNullable()
      table.string('fracao_controle').notNullable()
      table.string('preco_custo').notNullable()
      table.string('preco_venda').notNullable()
      table.string('preco_ultima_entrada').notNullable()
      table.integer('unidade_id').unsigned()
        .references('id')
        .inTable('unidades')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('categoria_id').unsigned()
        .references('id')
        .inTable('categoria_produto')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

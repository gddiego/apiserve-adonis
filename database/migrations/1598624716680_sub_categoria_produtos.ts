import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class SubCategoriaProdutos extends BaseSchema {
  protected tableName = 'sub_categoria_produtos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('categoria_id').unsigned().references('id')
        .inTable('categoria_produtos')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('numero_ncm').notNullable()
      table.string('descricao_sub_categoria').notNullable()
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

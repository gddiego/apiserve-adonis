import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CategoriaProdutos extends BaseSchema {
  protected tableName = 'categoria_produtos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('descricao').notNullable()
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

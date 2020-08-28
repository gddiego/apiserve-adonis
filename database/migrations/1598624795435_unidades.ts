import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Unidades extends BaseSchema {
  protected tableName = 'unidades'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('descricao').notNullable()
      table.string('sigla').notNullable()
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

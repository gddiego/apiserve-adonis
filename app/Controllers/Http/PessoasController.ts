import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Pessoa from 'App/Models/Pessoa';

export default class PessoasController {


  async index() {
    const pessoas = Pessoa.all()

    return pessoas
  }
  public async store({ request }) {

    const dados = [
      "user_id",
      "nome_pessoa",
      "natureza_pessoa",
      "tipo_pessoa",
      "tipo_pessoa_id",
      "cpf",
      "rg",
      "orgao_expedidor",
      "id_uf_rg",
      "renach",
      "registro_cnh",
      "data_primeira_habilitacao",
      "data_validade_cnh",
      "uf_cnh_id",
      "sexo",
      "nome_fantasia",
      "cnpj",
      "inscricao_estadual",
      "uf_inscricao_estadual",
      "data_abertura",
      "natureza_juridica",
      "porte_empresa",
      "regime_tributacao",
      "cliente",
      "fornecedor",
      "usuario",
      "funcionario",
      "transportadora",
      "empresa"
    ]

    const data = request.only(dados)

    const pessoa = await Pessoa.create(data)
    // if (pessoa.user_id !== auth.user.id) {
    //   return response.status(401).send({ error: 'Não autorizado' })
    // }
    return pessoa

  }


  async update({ params, request, response }: HttpContextContract) {
    const infos = [
      "nome_pessoa",
      "natureza_pessoa"

    ]
    const cliente = await Pessoa.findOrFail(params.id);

    const data = request.only(infos);

    cliente.merge(data);

    await cliente.save();

    return response.status(200).send({ cliente, Sucesso: 'Pessoa atualizado com sucesso' })
  }

  async show({ params, }: HttpContextContract) {
    const client = await Pessoa.findOrFail(params.id)
    // if (!client.user_id) {
    //   return response.status(401).send({ error: 'Não autorizado' })
    // }
    return client
  }

  async destroy({ params, response }: HttpContextContract) {
    const pessoa = await Pessoa.findOrFail(params.id)

    // if (pessoa.user_id !== auth.user.id) {
    //   return response.status(401).send({ error: 'Não autorizado' })
    // }

    await pessoa.delete()

    return response.status(200).send({ Sucesso: 'Pessoa deletado com sucesso' })
  }
}

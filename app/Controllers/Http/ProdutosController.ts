import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Produto from 'App/Models/Produto';

export default class ProdutosController {

  async index() {
    const produtos = Produto.all()

    return produtos
  }


  async store({ request }: HttpContextContract) {
    const dados = [
      "descricao",
      "sub_categoria_id",
      "codigo_ean",
      "tipo_id",
      "estoque_minimo",
      "data_ultima_entrada",
      "data_ultima_saida",
      "situacao",
      "fracao_controle",
      "preco_custo",
      "preco_venda",
      "preco_ultima_entrada",
      "unidade_id",
      "categoria_id"
    ]

    const data = request.only(dados)

    const produto = await Produto.create(data)
    // if (produto.user_id !== auth.user.id) {
    //   return response.status(401).send({ error: 'Não autorizado' })
    // }
    return produto
  }

  async update({ params, request, response }: HttpContextContract) {
    const infos = [
      "descricao"

    ]
    const produto = await Produto.findOrFail(params.id);

    const data = request.only(infos);
    // if (produto.user_id !== auth.user.id) {
    //   return response.status(401).send({ error: 'Não autorizado' })
    // }
    produto.merge(data);

    await produto.save();

    return response.status(200).send({ produto, Sucesso: 'Produto atualizado com sucesso' })
  }

  async show({ params, }: HttpContextContract) {
    const produt = await Produto.findOrFail(params.id)
    // if (!produt.user_id) {
    //   return response.status(401).send({ error: 'Não autorizado' })
    // }
    return produt
  }


  async destroy({ params, response }: HttpContextContract) {
    const produto = await Produto.findOrFail(params.id)

    // if (!produto.user_id) {
    //   return response.status(404).send({ error: 'Não autorizado' })
    // }

    await produto.delete()

    return response.status(200).send({ Sucesso: 'Produto deletado com sucesso' })
  }
}

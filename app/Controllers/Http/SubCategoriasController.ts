import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import SubCategoriaProduto from 'App/Models/Subcategoria'
export default class SubCategoriasController {
  async index() {
    const SubCats = SubCategoriaProduto.all()

    return SubCats
  }


  async store({ request }: HttpContextContract) {
    const dados = [
      "descricao",
      "categoria_id",
      "numero_ncm",
      "descricao_sub_categoria"
    ]

    const data = request.only(dados)

    const SubCat = await SubCategoriaProduto.create(data)
    // if (produto.user_id !== auth.user.id) {
    //   return response.status(401).send({ error: 'Não autorizado' })
    // }
    return SubCat
  }

  async show({ params }: HttpContextContract) {
    const subCategoria = await SubCategoriaProduto.findOrFail(params.id)
    // if (!produt.user_id) {
    //   return response.status(401).send({ error: 'Não autorizado' })
    // }
    return subCategoria
  }

  async update({ params, request, response }: HttpContextContract) {
    const infos = [
      "descricao"

    ]


    const data = request.only(infos);
    const subCategoria = await SubCategoriaProduto.findOrFail(params.id);
    // if (produto.user_id !== auth.user.id) {
    //   return response.status(401).send({ error: 'Não autorizado' })
    // }
    subCategoria.merge(data);

    await subCategoria.save();

    return response.status(200).send({ subCategoria, Sucesso: 'Registro atualizado com sucesso' })
  }


  async destroy({ params, auth, response }: HttpContextContract) {
    const produto = await SubCategoriaProduto.findOrFail(params.id)

    // if (!produto.user_id) {
    //   return response.status(404).send({ error: 'Não autorizado' })
    // }

    await produto.delete()

    return response.status(200).send({ Sucesso: 'Produto deletado com sucesso' })
  }
}


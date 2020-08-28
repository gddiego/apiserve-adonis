import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {

  public async login({ request, auth }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    const token = await auth.use('api').attempt(email, password)
    return token.toJSON()
  }


  public async store({ request }) {

    const data = request.only(["username", "email", "password"])

    const user = await User.create(data)

    return user
  }


  async update({ params, request, response }: HttpContextContract) {
    const user = await User.findOrFail(params.id);
    //dsdsds

    const data = request.only(["username", "email", "password"]);

    user.merge(data);
    await user.save();

    return user
  }

  async show({ params, auth, response }) {
    const user = await User.findOrFail(params.id)
    // if (!client.user_id) {
    //   return response.status(401).send({ error: 'Não autorizado' })
    // }
    return user
  }

  async destroy({ params, request, response }) {
    const user = await User.findOrFail(params.id);
    await user.delete();
    return response.status(200).send({ Sucesso: 'Registro deletado com sucesso' })
  }

}

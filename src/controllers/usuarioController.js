import { defaultFormat } from "moment";
import { Usuario } from "../models/Usuario";

class UsuarioController {


    static criarUsuario = async (req, res) => {
        const { nome, idade, ativo, email } = req.body;
        //crio o objeto usuario copiado do objeto body
        const usuario = { nome, idade, ativo, email }
        //cria o usuario atraves do moongose
        const usuarioBD = await Usuario.create(usuario)
        data: usuarioBD
        res.status(201).json('Usuario criado com sucesso')
    }

    static atualizarUsuario = async (req, res) => {
        const id = req.params.id

        const { nome, idade, ativo, email } = req.body;

        const usuario = { nome, idade, ativo, email };

        await Usuario.updateOne({ _id: id }, usuario)
        res.status(200).json('usuario atualizado com sucesso!')


    }

    static buscarUsuario = async (req, res) => {
        const usuarios = await Usuario.find()
        res.status(200).json(usuarios)
    }

    static buscarPorId = async (req, res) => {
        const id = req.params.id

        const usuario = await Usuario.findOne({ _id: id })
        res.status(200).json(usuario)

    }
    static deletarUsuario = async (req, res) => {
        const id = req.params.id
        //busca i usuario antes de deletar, as informações
        const usuarioBD = await Usuario.findOne({ _id: id })
        //deleta o usuario do banco
        const usuario = await Usuario.deleteOne({ _id: usuarioBD.id })
        //Pego a data atual e formato 
        let date = moment(new Date()).format('dd/mm/yyyy hh:mm:ss')
        let msg = `o usuario ${usuarioBD.nome}foi excluido com sucesso às ${date}!`
        res.status(200).json({ msg })

    }

}

export default UsuarioController
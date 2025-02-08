import type { Request, Response } from "express";
import Usuario from "../models/User";
import { cifrarContrasena, verificarContrasena } from "../utils/auth";
import { generarJWT } from "../utils/jwt";

export class AuthController {
    static createAccount = async (req: Request, res: Response) => {
        const { email, password, fechaNacimiento } = req.body;

        const userExist = await Usuario.findOne({where: {email}});
        if (userExist) {
            const error = new Error('El usuario ya existe');
            res.status(409).json({error: error.message});
            return;
        }

        try {
            const user = new Usuario(req.body);
            user.password = await cifrarContrasena(password);
            await user.save();

            res.status(201).json('Cuenta Creada');
        } catch (error) {
            res.status(500).json({error: 'Hubo un error'});
        }
    }

    static login = async (req: Request, res: Response) => {
        const {email, password, fechaNacimiento} = req.body;

        const usuario = await Usuario.findOne({where: {email}});
        if (!usuario) {
            const error = new Error('Usuario no encontrado');
            res.status(404).json({error: error.message});
            return;
        }

        // Verificar la contraseña
        const isPasswordCorrect = await verificarContrasena(password, usuario.password);
        if (!isPasswordCorrect) {
            const error = new Error('Contraseña incorrecta');
            res.status(401).json({error: error.message});
            return;
        }

        // Verificar la fecha de nacimiento
        if (fechaNacimiento !== usuario.fechaNacimiento.toISOString().split('T')[0]) {
            const error = new Error('Fecha de nacimiento incorrecta');
            res.status(401).json({error: error.message});
            return;
        }

        const token = generarJWT(usuario.id, usuario.role);
        res.json(token);
    }

    static user = async (req: Request, res: Response) => {
        try {
            const userId = req.usuario.id;
            const user = await Usuario.findByPk(userId, {
                attributes: ['nombre', 'email', 'password']
            });
            if (!user) {
                res.status(404).json({ message: 'Usuario no encontrado'});
                return;
            }
            res.json(user);
        } catch (error) {
            res.status(500).json({message: 'Error interno del servidor', error});
        }
    }
}

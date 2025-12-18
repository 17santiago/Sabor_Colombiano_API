import type { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { pool } from '../config/database';


export const register = async (req: Request, res: Response) => {
const { nombre, email, contraseña } = req.body;


const hash = await bcrypt.hash(contraseña, 10);


await pool.query(
'INSERT INTO usuarios (nombre, email, contraseña_hash) VALUES ($1, $2, $3)',
[nombre, email, hash]
);


res.status(201).json({ message: 'Usuario registrado correctamente' });
};


export const login = async (req: Request, res: Response) => {
const { email, contraseña } = req.body;


const result = await pool.query(
'SELECT * FROM usuarios WHERE email = $1',
[email]
);


if (result.rowCount === 0) {
return res.status(401).json({ message: 'Credenciales inválidas' });
}


const usuario = result.rows[0];
const valido = await bcrypt.compare(contraseña, usuario.contraseña_hash);


if (!valido) {
return res.status(401).json({ message: 'Credenciales inválidas' });
}


const token = jwt.sign({ id: usuario.id_usuario }, process.env.JWT_SECRET!, {
expiresIn: '1h',
});


res.json({ token });
};


export const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(
      "SELECT  * FROM usuarios"
    );

    return res.status(200).json({
      message: "Listado de usuarios",
      users: result.rows
    });

  } catch (error) {
    return res.status(500).json({
      message: "Error al obtener usuarios"
    });
  }
};
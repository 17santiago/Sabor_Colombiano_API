# API Sabor Colombiano 🍲

API desarrollada como evidencia académica para **Diseño y Desarrollo de Servicios Web**.

**Evidencia:** GA7-220501096-AA5-EV03
**Aprendiz:** NOMBRE_APELLIDO

---

## 📌 Descripción

La API **Sabor Colombiano** gestiona el **registro** y **autenticación** de usuarios para una aplicación de recetas regionales, usando arquitectura REST y buenas prácticas de seguridad.

---

## 🛠️ Tecnologías

* Node.js + TypeScript
* Express
* PostgreSQL
* bcrypt
* JWT
* Git / GitHub

---

## 🔐 Endpoints

### Registro

* **POST** `/api/auth/register`

```json
{
  "nombre": "Juan",
  "email": "juan@email.com",
  "contraseña": "123456"
}
```

### Login

* **POST** `/api/auth/login`

```json
{
  "email": "juan@email.com",
  "contraseña": "123456"
}
```

---

## ▶️ Ejecución

```bash
npm install
npm run dev
```

Servidor: `http://localhost:3000`

---

## ✅ Notas

* Contraseñas cifradas.
* `node_modules` excluido con `.gitignore`.
* Pruebas realizadas con Postman.

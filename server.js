// Importar dependências
const express = require("express");
const admin = require("firebase-admin");
const cors = require("cors");

// Iniciar o app Express
const app = express();

// Permitir requisições CORS
app.use(cors());

// Configurar o Firebase com o arquivo de credenciais
const serviceAccount = require("./meu-projeto-firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sua-base-de-dados.firebaseio.com",  // Substitua pelo seu URL do Firebase
});

const db = admin.firestore();

// Definir uma rota para adicionar um usuário
app.post("/adicionar-usuario", async (req, res) => {
  try {
    const { email, senha } = req.body;
    const userRef = db.collection("usuarios").doc(email);

    await userRef.set({
      email,
      senha,
    });

    res.status(200).send("Usuário adicionado com sucesso!");
  } catch (error) {
    console.error("Erro ao adicionar usuário:", error);
    res.status(500).send("Erro ao adicionar usuário");
  }
});

// Definir a porta do servidor
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

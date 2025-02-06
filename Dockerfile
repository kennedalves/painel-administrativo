# Usando a imagem oficial do Node.js como base
FROM node:14

# Definir o diretório de trabalho no container
WORKDIR /app

# Copiar o package.json e o package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar todos os arquivos restantes
COPY . .

# Expor a porta em que o app irá rodar
EXPOSE 3000

# Iniciar o servidor com o arquivo server.js
CMD ["node", "server.js"]

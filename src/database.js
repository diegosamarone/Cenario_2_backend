// Importações necessárias para o projeto
const pkg = require("@prisma/client");

const { PrismaClient } = pkg;
// Cria uma instância do cliente Prisma
const client = new PrismaClient();
// Exporta a instância do cliente para ser utilizada em outros arquivos
module.exports = { client };

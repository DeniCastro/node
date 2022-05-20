const Sequelize = require('sequelize');

const sequelize = new Sequelize('jxiceapp', 'deni', 'D3n1l50n@1997$20', {
    host: 'localhost',
    dialect: 'mysql'
  });

sequelize.authenticate().then(function(){
  console.log('Conexão realizada com sucesso!');
}).catch(function(err){
    console.log('Erro de Conexão com Banco de Dados: ' + err);
});

const Pagamento = sequelize.define('pagamentos', {
    nome: {
        type: Sequelize.STRING,
    },
    valor: {
        type: Sequelize.DOUBLE
    }});


Pagamento.create({
    nome: "Energia",
    valor: 220
});


//Criar tabela com Sequelize: User.sync({force: true});

/*

Encontrar todos os Usuários:
User.findAll().then(users => {
    console.log("Todos os usuários: ", JSON.stringify(users, null, 4));
});


Crriar um novo usuário:
User.create({ firstName: "Denilson", lastName: "Castro"}).then(Denilson => {
    console.log("Denilson's ID auto gerada: ", denilson.id);
});


Remover todos chamados "Castro"
User.destroy({
    where: {
        firstName: "Denilson"
    }
}).then(() => {
    console.log("Feito");
});


Mudar todos sem sobrenome para "Oliveira":
User.update({ lastName: "Castro" }, {
    where: {
        lastName: null
    }
}).then(() => {
    console.log("Feito");
});

*/
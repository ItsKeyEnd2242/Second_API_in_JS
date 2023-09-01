// Módulo de inicialização do servidor web onde nossa WebApi estará hospedada, módulo de infraestrutura;

// Importar o arquivo app
const app = require('./app');
// Importar a porta do servidor
const port = app.get('port');

// Testar API
app.listen(port, () => console.log(`Run on port ${port}!`));
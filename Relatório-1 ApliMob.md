**Universidade Anhembi Morumbi**

Campus – Mooca

Curso de Análise e Desenvolvimento de Sistemas





Relatório 

**Desenvolvimento de Aplicativo Mobile** 



**Integrantes**

Denilson Bernardo do Nascimento: RA- 21477196

Bruno Vinicius da Silva:  RA- 21190752

Thomas Aguiar Vicente: RA- 20855604

Erinaldo da Silva Pereira: RA- 21430043









São Paulo 29 de setembro de 2021

**Introdução**

O Presente relatório refere-se ao Desenvolvimento de um Aplicativo Mobile, e tem a intenção de relatar de forma clara e coesa como foi pensado, criado e implementado um aplicativo de uso interno dos funcionários de uma hamburgueria. 

**Objetivo**

O projeto foi pensado para que os garçons da hamburgueria possam usar no celular, ipod ou palmo, dando modernização e agilidade aos processos. O app será usado para fazer o pedido dos clientes sentados a mesa, controle e consulta da conta, mostrando os pedidos já feitos e o valor total com e sem a taxa de serviço. Cada garçom terá uma senha e por isso terá um login e senha como requisito para entrar na aplicação. 


**Descrição das atividades**

1. **Home**

![Interface gráfica do usuário, Aplicativo

Descrição gerada automaticamente](Aspose.Words.9832e74b-42dd-45b8-9c7b-8d6dea571fcc.001.png)

A página inicial do aplicativo é a [home.page.html](http://home.page.html). Ela foi implementada para servir como tela de início sem precisar coletar nenhum dado, conta com o nome do aplicativo e um *ion-button* que redirecionará o usuário a página de login com a função *goToLogin()* implementada na [home.page.html](http://home.page.html). O estilo da página foi definido em [home.page.scss](http://home.page.scss), foi preciso adicionar por meio de um *import* na tag *<style>* para a fonte do título da página rodar em máquinas que não tenha a fonte previamente baixada.





1. **Login**

O aplicativo será utilizado somente pelos funcionários do estabelecimento, então foi definido um login e senha administrativo apenas por meios de segurança. Para receber os dados de user e senha foi criado no login.page.html um formulário.

Em login.form.spec foram executado os teste de verificação do formulário que impedem do usuário logar sem ter user válido ou seja que tenha padrões do input predefinido em login.page.html, o formulário precisa ser válido ou seja com todos os campos obrigatórios preenchidos e a criação do formulário precisa estar com os campos vazios.

Para criar o formulário foi feita a importação da *FormBuilder* e *FormGroup* padrão do angular e a importação da nossa *LoginPageForm*. O formulário é criado assim que a página inicia no método *ngOnInit()*.

![Interface gráfica do usuário, Aplicativo

Descrição gerada automaticamente](Aspose.Words.9832e74b-42dd-45b8-9c7b-8d6dea571fcc.002.png)![Tela de computador com ícones coloridos

Descrição gerada automaticamente](Aspose.Words.9832e74b-42dd-45b8-9c7b-8d6dea571fcc.003.png)Ao preencher o formulário o usuário irá aperta o *ion-button* de entrar que acionará o método *async goToInitial()* que fará a rota para a página *inital(initial.page.html)* somente se o usuário e senha forem os preestabelecidos, se a houver erro de usuário ou senha o aplicativo retorna um *alert* criado com *AlertController* informando que os dados fornecidos estão incorretos, solicitando ao usuário que tente novamente. Se caso o usuário não quiser efetuar login a página conta com um botão de voltar que o redirecionará para a página home.

O padrão de estilo da página login seguiu o mesmo da página home com apenas uma pequena alteração no *ion-header* que agora conta com um logo e uma transformação na borda do header que forma um triangulo por meio do *scss* em *login-header:after* adicionado a linhas que contêm essa alteração são: 52 - border: 20px solid transparent; 53 - border-top-color: #FF5733; 54 - border-bottom: 0;





1. **Inicial**

![Tela de computador com ícones coloridos

Descrição gerada automaticamente](Aspose.Words.9832e74b-42dd-45b8-9c7b-8d6dea571fcc.004.png)

Na interface de Produtos, foi utilizado Ngfor para permite percorrer um array, para exibir, cada item do array com elemento na tela coloquei um ngfor em um elemento; para HTML ou componente, para criar várias copias desse elemento para cada item do array foi fornecido dentro dos produtos criado.







1. **Adicionando funcionalidade nos botões dos produtos**

A começar do arquivo html, adicionamos um ion-button responsável pela função de adição do produto e outro ion-button pela subtração do produto. Os botões estão estilizados com cores que representam a ação desejada, ou seja, color="danger" para subtração e color="success" para adição. Entre os botões, criamos um ion-card-title que imprime o valor referente a quantidade de produtos através da variável {{product.quantidade}}.

No arquivo .ts, configuramos para que cada produto se inicie com o valor de 0, deixando a função para o usuário adicionar o que desejar. Implementamos a funcionalidade de adição, subtração e atualização do valor caso o usuário queira diminuir ou aumentar a quantidade de produtos de forma dinâmica e funcional para cada card.

1. **Atualização do Layout**

Para melhorar a experiência de desenvolvimento, utilizamos a metodologia BEM (Block, Element, Modified) nos elementos do app dentro dos arquivos ".html" e ".scss". A técnica é aplicada na classe do elemento, proporcionando uma melhor organização e visualização do código, além de reduzir conflitos de classe.

Por exemplo, utilizamos a classe "card" no ion-card que é um elemento pai e em todos os elementos filho do card, utilizamos a mesma classe do elemento pai acompanhado do nome do elemento.

Exemplos de código:

\```HTML

<!-- Arquivo HTML -->

<ion-card class="card">

`    `<ion-card class="card\_\_title"></ion-card>

</ion-card>

\```

\```SCSS

// Arquivo SASS

.card {

`    `background: blue;

`    `&\_\_title {

`        `color: white;

`    `}

}

\```



1. **Adição dos produtos no formato do card pré-definido**

Com o design da interface dos cards concluído, implementamos a técnica do ng-for no ion-row, trazendo assim a dinâmica de inclusão dos dados obtidos.

Exemplo de código:

HTML

<!-- Arquivo HTML -->

<ion-row \*ngFor="let product of products">

`    `<ion-col>

`        `<ion-card mode="ios" class="card">

`            `<!-- Elementos filhos HTML recebendo variáveis:

`              `{{product.name}}

`              `{{product.description}}

`              `{{product.price}}

`              `{{product.quantidade}}

`            `-->

`        `</ion-card>

`    `</ion-col>

</ion-row>




TypeScript

// Arquivo TypeScript

interface IProducts{

`  `name: string;

`  `description: string;

`  `price: number;

`  `quantidade: number;

}

export class InitialPage implements OnInit {

`  `// Dados dos produtos

`  `public products: IProducts [] = [

`    `{

`      `name: '01. Hot-Dog',

`      `description: 'Salsicha viena, batata palha, cheddar, farofa de bacon catchup e mostarda.',

`      `price: 10,

`      `quantidade: 0

`    `},

`    `{

`      `// Objeto especificando outro produto

`    `}

`  `]

}




1. **Soma Total do Produtos**

Com base nos produtos que foram adicionados em nosso app, foi implementado a interface ITotal, que atribui o preço total de todos os produtos em uma compra.

![Tela preta com letras brancas

Descrição gerada automaticamente](Aspose.Words.9832e74b-42dd-45b8-9c7b-8d6dea571fcc.005.png)

Junto aos métodos chamados quando os botões de incremento e decremento da quantidade dos itens, temos também a soma ou subtração ao valor total selecionado, sendo elas: “total.totalPrice += product.price”; “total.totalPrice -= product.price”.

![Texto

Descrição gerada automaticamente](Aspose.Words.9832e74b-42dd-45b8-9c7b-8d6dea571fcc.006.png)

E na parte de HTML, quando chamamos os métodos da imagem acima, utilizamos o “vTotal” para não haver perda de informação e nem precisar ser usado alguma variável global.

![Texto

Descrição gerada automaticamente](Aspose.Words.9832e74b-42dd-45b8-9c7b-8d6dea571fcc.007.png)


**Relatório de participação**

Para o projeto foi criado um repositório no github, disponível em: <https://github.com/thmsaguiar/soberanus>. Onde dividimos as tarefas conforme a disponibilidade e entendimento de cada um do time: Thomas (home e login e suas funcionalidade), Wellignton (funcionalidade de botões de controle da quantidade e ajuste de design), Denilson (acrescentar os produtos da página), Bruno (soma total do carrinho e vídeo do protótipo), Rodnei (adicionar funcionalidade ao botão de sair da página inicial e finalizar compra), Erinaldo (responsável pelo relatório do projeto).



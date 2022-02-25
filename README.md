# Trilha-Front


## a) Explique de forma sucinta a diferença entre SPA e MPA.

SPA não requer recarregamento de páginas durante o uso, todas as informações serão carregadas por demanda, de acordo com a necessidade do usuário. Já o MPA requer um recarregamento de página toda vez que o conteúdo é alterado.

## b) Como eram as páginas WEB na década de 90 e 1º década dos anos 2000?

Na década de 90 por causa das limitações tecnológicas, a maioria das páginas não eram nada além de um grande banner de divulgação das empresas. Conteúdos estáticos, páginas em eterna construção e nenhuma interatividade de usuários.

Na 1ª década dos anos 2000 a velocidade e a facilidade de uso de diversos aplicativos aumentaram, sendo responsáveis por um aumento significativo no conteúdo existente na Internet. 
Muitos sites deixaram de ser estruturas rígidas e estáticas e passaram a ser plataformas onde pessoas podiam contribuir com o seu conhecimento.

## c) O que é WEB 1.0 , WEB 2.0 e WEB 3.0?

WEB 1.0 é como surgiu a internet, onde os conteúdos de sites eram estáticos e com pouco interatividade.

WEB 2.0 foi a revolução dos blogs, chats, das mídias sociais, redes sociais e do conteúdo produzido pelos usuários. Os sites já não são estáticos e possuem um layout focado no usuário e também na usabilidade dos buscadores.

WEB 3.0 consiste em algo além da interatividade, ela deve manter a existência das redes sociais, mas estas passam a ter um protagonismo ainda maior. Páginas nesse formato personalizam o conteúdo de maior relevância de acordo com as preferências de cada pessoa usando a interpretação de dados pelas máquinas de modo quase natural.
Os algoritmos devem evoluir a ponto de antecipar demandas e resolver problemas antes que eles surjam. É o que estamos vivendo no momento.

## d) Com suas palavras, responda às seguintes perguntas referentes ao Angular:

### I. De forma resumida o que é o Angular?

É um framework criado por desenvolvedores da Google para construir interface de aplicações usando HTML, CSS e TypeScript.

### II. Qual a relação do Angular com SPA?
Angular é uma estrutura de SPA completa, com a ajuda da qual um aplicativo de página única é criado. No SPA, a página inteira não é recarregada toda vez, apenas quando visualização for alterada.

### III. Em uma aplicação básica, o que é essencial ter?

Um modelo HTML que vai declarar o que é renderizado na página.
Uma classe Typescript que vai definir o comportamento.
Um seletor CSS que vai definir como o componente é usado em um modelo.


### IV. O que é o Angular CLI e qual a sua importância? Dê exemplos;
Angular CLI é uma ferramenta de linha de comando que permite adicionar componentes, diretivas e serviços a partir da linha de comando. Com ele não precisamos gastar tempo instalando e configurando todas as dependencias necessárias e as conectando. Isso torna o fluxo de trabalho muito mais fácil e rápido.

### V. Para que serve o arquivo angular.json?
Para trazer propriedades sobre o projeto, entre elas qual é o caminho do arquivo principal main.ts;

### VI. Quais pacotes (libs) são considerados primários (default)?

?????????????????

### VII. Para que serve o arquivo package.json?
Serve para definir e configurar dependências do projeto, quais outros pacotes ele vai precisar para ser executado. Através do package.json conseguimos definir uma indicação para executar um projeto.
Executando o comando npm install, ele verifica os pacotes que estão dentro desse arquivo e baixa para o diretório node_modules.


### VIII. Para que serve o arquivo environment.ts?
Para fornecer um ambiente padrão, onde temos um arquivo de ambiente para desenvolvimento e outro para produção. Podemos adicionar padrões de substituição para ambientes adicionais, como produção e preparação, em arquivos de configuração específicos de destino.


## e) Sobre Text Interpolation, responda:

### I. O que é?
Text Interpolation permite incorporar valores de string dinâmicos em seus templates HTML. Podemos usar a interpolação para alterar dinamicamente o que aparece em uma exibição do aplicativo, como exibir uma saudação personalizada que inclui o nome do usuário.

### II. Quais os benefícios de se ter interpolação em uma aplicação Angular?
Por exibir dados dinâmicos no modelo HTML, ele facilita nas alterações no arquivo component.ts e buscar dados de lá para o modelo HTML.

### III. Crie uma interpolação com o seu nome, com nome do seu guia, data do desafio e a sua turma do desafio.
Feito no component data-biding;

## f) A respeito de Bindings, responda:

### I. O que é Property Binding e quais as suas aplicações?
É o método básico de binding em Angular, envolve valores de vinculação às propriedades DOM de elementos HTML. É um método de ligação unidirecional, pois os valores vão do componente para a camada do modelo e as alterações feitas no componente atualizam as propriedades vinculadas no modelo. Essa é uma maneira pela qual os dados são passados ​​do componente para a View.


### II. Qual é o passo a passo do fluxo das informações com Property Binding?
Property Binding move um valor em uma direção, da propriedade de um componente para uma propriedade do elemento de destino.


### III. Dê um exemplo de Property Binding e explique o seu funcionamento.
Feito no componente data-biding e explicado.


### IV. O que é Event Binding?
É a vinculação de dados unidirecional que envia o valor da View para o componente, o que contrasta com a vinculação de propriedade em que costumávamos enviar os dados do componente para a exibição. Event binding permite ouvir e responder às ações do usuário, como click de tecla, movimentos do mouse, e toques.


### V. Dê um exemplo de Event Binding e explique o seu funcionamento.
Feito no componente data-biding e explicado.

### VI. O que é Two-Way-Data-Binding e em quais cenários devemos usá-lo?
Ele é usado para exibir informações ao usuário final e permite que faça alterações nos dados usando a interface do usuário. É uma maneira de compartilhar dados dos componentes. Conseguimos ouvir eventos e atualizar valores ao mesmo tempo entre componentes pai e filho.

### VII. Dê um exemplo de Two-Way-Data-Binding e explique.
Feito no componente data-biding e explicado.

## Diretivas

### I. O que é uma diretiva Angular e qual o seu propósito?
São classes que adicionam comportamento adicional aos elementos nos aplicativos Angular. Usando-as podemos gerenciar formulários, listas, estilos e o que os usuários veem.

### II. Quais tipos de diretivas existem?
Componentes: diretivas com um modelo. Esse tipo de diretiva é o tipo de diretiva mais comum.

Diretivas de atributo: alteram a aparência ou o comportamento de um elemento, componente ou outra diretiva.

Diretivas estruturais: alteram o layout do DOM adicionando e removendo elementos DOM.

### III. O Angular possui algumas diretivas default, explique as 6 principais e dê um exemplo de cada.
???????????

## h) Reactive forms:

### I. Qual a diferença entre template-driven e reactive forms?
Os Template-driven dependem de diretivas no modelo para criar e manipular o modelo de objeto oculto. Eles são úteis para adicionar um formulário simples a um aplicativo, como um formulário de inscrição na lista de e-mail. Eles são simples de adicionar a um aplicativo, mas não são dimensionados tão bem quanto os formulários reativos.

Já os Reactive Forms fornecem acesso direto e explícito ao modelo de objeto de formulários ocultos. Em comparação com os template-driven, eles são mais robustos: são mais escaláveis, reutilizáveis ​​e testáveis.

### II. Quais benefícios temos ao usar um formulário reativo?
Conseguimos alcançar um controle maior sobre o formulário. A estrutura é criada e podemos adicionar referencia a essa estrutura no template. Além de controles básicos também podemos controlar Campos(FormControls), Grupos de Campos(FormGroups), Validações, Manipulação de controles, etc.

### III. Quais módulos são necessários para criar os formulários reativos?
ReactiveFormsModule.

### Quais classes base temos para formulários reativos no Angular?
FormControl, FormGroup, FormArray, AbstractControl, FormBuilder.

### V. Como é feita a configuração de um formulário reativo usando separadamente as classes base?
??????????????????


### VI. Como se dá o fluxo de informações entre o formulário reativo e o componente em Angular?
???????????????????????


### VII. Como é feita a captura dos dados de um formulário reativo e apresentado na tela?
???????????????????????

### VIII. Explique para o que serve a validação de um formulário e como isto pode ser apresentado para o usuário?
A validação serve para que se evite enviar/salvar dados inválidos, mostrando alguma mensagem sobre o erro para orientar o usuário adequadamente a inserir dados válidos.

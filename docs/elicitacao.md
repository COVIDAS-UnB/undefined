# Elicitação

## Requisitos Não Funcionais

- A plataforma não deve restringir a conclusão da ajuda ao seu uso;
- A plataforma deve ser simples e prática;
- A plataforma deve oferecer diversas possibilidades aos usuários.


## Requisitos Funcionais

- Desenvolver uma PWA (Progressive Web App);
- Usuários anônimos podem visualizar as listas de pedidos e de ofertas de ajuda (com os dados dos outros usuários ocultos);
- Somente usuários cadastrados podem oferecer ajuda;
- Somente usuários cadastrados e verificados como discentes da Universidade de Brasília podem solicitar ajuda;
- O cadastro de usuários é feito com o seguintes dados: nome*, email*, senha*, meios de contato* (e-mail, número de telefone, contato do WhatsApp ou contato do Telegram) e foto de perfil (*obrigatórios);
- Os usuários que se declaram como discentes da Universidade de Brasília serão validados e terão alguns dados coletados (como curso em que está matriculado);
- O login de usuário é realizado com email e senha;
- A ajuda consiste em: doações em dinheiro (para pagamentos de contas e gastos), empréstimo ou doação de ferramentas e venda de ferramentas por baixo custo;
- Existirá uma lista de oferecimento e outra de solicitação de ajuda com filtros relacionados aos tipos de ajuda;
- Um usuário³, que solicita uma doação em dinheiro, deve: informar a descrição da ajuda; poder adicionar o valor aproximado necessário e o destino do dinheiro doado (texto livre); e vincular uma forma de obtenção da ajuda financeira;
- Um usuário**, que informa diretamente uma doação em dinheiro, deve entrar em contato com o solicitador por meio de um dos meios de contato disponíveis ou acessar a forma de obtenção de ajuda financeira vinculada;
- Um usuário¹, que oferece o empréstimo ou a doação de ferramenta, deve informar a descrição do equipamento, poder adicionar fotos e disponibilizar os locais de entrega da ferramenta;
- Um usuário², que solicita diretamente o empréstimo ou a doação de ferramenta, deve entrar em contato com o ofertante por meio de um dos meios de contato disponíveis;
- Um usuário³, que solicita o empréstimo ou a doação de ferramenta, deve informar a descrição da ferramenta que necessita e os locais em que pode buscá-la;
- Um usuário**, que informa diretamente o empréstimo ou doação de ferramenta, deve entrar em contato com o solicitante por meio de um dos meios de contato disponíveis;
- As partes de um empréstimo devem concordar com os termos de empréstimo;
- Um usuário¹, que oferece a venda de ferramenta por baixo custo, deve: informar a descrição do equipamento e o valor pretendido; adicionar fotos; e disponibilizar os locais de entrega da ferramenta;
- Um usuário², que solicita diretamente a compra de ferramenta por baixo custo, deve entrar em contato com o ofertante por meio de um dos meios de contato disponíveis;
- Um usuário³, que solicita a compra de ferramenta por baixo custo, deve: informar a descrição da ferramenta que necessita, o valor que pretende gastar e os locais em que pode buscá-la;
- Um usuário**, que informa diretamente a venda de ferramenta por baixo custo, deve entrar em contato com o solicitante por meio de um dos meios de contato disponíveis;
- O usuário deve ser notificado quando um usuário seleciona sua ajuda ou seu pedido de ajuda;
- O pedido ou oferecimento de ajuda será ocultado quando um usuário selecionar (lembrar o usuário que se a ajuda não se concretizar ele deve reativar a solicitação ou o oferecimento);
- O usuário poderá reativar o oferecimento ou pedido de ajuda;
- O usuário poderá desativar o oferecimento ou pedido de ajuda;
- O usuário poderá visualizar seus pedidos ou oferecimentos de ajuda, seus estados, dados e mensagens relacionadas;
- O usuário poderá se desconectar da plataforma quando quiser;
- Deve-se coletar os logs de error, warn e info da plataforma;
- Deve-se coletar dados anônimos para produção de estatísticas.

**Legenda**

- ***¹ Usuário que publica na lista de oferecimento de ajuda.***
- ***² Usuário que seleciona uma ajuda na lista de oferecimento de ajuda.***
- ***³ Usuário que publica na lista de solicitação de ajuda.***
- *****Usuário que seleciona oferecer ajuda na lista de solicitação de ajuda.***

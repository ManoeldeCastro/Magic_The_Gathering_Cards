# Magic The Gathering Cards Marketplace

## Descrição

Este projeto é um marketplace simples para troca de cartas do jogo Magic: The Gathering. Os usuários podem se registrar, fazer login, adicionar cartas à sua conta, criar solicitações de troca, escolher cartas que pretendem oferecer e receber, deletar solicitações de troca, além de visualizar as solicitações de troca abertas na página inicial. O projeto também conta com uma versão mobile, garantindo acessibilidade e usabilidade em diferentes dispositivos.

## Funcionalidades

- Registro e login de usuários
- Adição de cartas à conta do usuário
- Criação de solicitações de troca
- Seleção de cartas a serem oferecidas e recebidas em trocas
- Deleção de solicitações de troca
- Visualização de solicitações de troca abertas
- Tradução das cartas do inglês para o português
- Versão mobile responsiva

## Dependências

- @radix-ui/react-dialog
- @radix-ui/react-dropdown-menu
- @radix-ui/react-label
- @radix-ui/react-separator
- @radix-ui/react-slot
- @radix-ui/react-tabs
- axios
- class-variance-authority
- clsx
- dayjs
- i18next
- lucide-react
- react
- react-dom
- react-hook-form
- react-hot-toast
- react-i18next
- react-router-dom
- tailwind-merge
- tailwindcss
- tailwindcss-animate
- zod

## Bibliotecas Utilizadas

### React
Escolhido por sua popularidade e robustez na construção de interfaces de usuário.

### Vite
Utilizado como ferramenta de construção (build tool) devido à sua velocidade e simplicidade na configuração de projetos React com TypeScript.

### Context API
Optamos pelo Context API ao invés do Redux para gerenciamento de estado global, pois o Context API é mais simples de configurar e suficiente para as necessidades deste projeto.

### Shadcn UI
Utilizado para criar componentes acessíveis e personalizáveis, como diálogos, menus e abas.

### Tailwind CSS
Usado para estilização, permitindo um design consistente e responsivo com facilidade.

### Axios
Utilizado para fazer requisições HTTP de maneira simplificada.

### i18next e react-i18next
Implementados para adicionar suporte à internacionalização, permitindo a tradução de textos no aplicativo.

### react-hot-toast
Usado para exibir notificações toast de forma elegante e fácil.

### Outras Bibliotecas
- `class-variance-authority`, `clsx`: Para manipulação de classes CSS.
- `dayjs`: Para manipulação de datas.
- `zod`: Para validação de schemas.

## Estrutura do Projeto

- `src/`
  - `assets/`: Arquivos estáticos
  - `components/`: Componentes reutilizáveis da interface
  - `contexts/`: Providers para Context API
  - `lib/`: Bibliotecas e utilitários
  - `pages/`: Páginas do aplicativo
  - `types/`: Definições de tipos TypeScript
  - `utils/`: Funções utilitárias
  - `App.tsx`: Componente principal do aplicativo
  - `index.tsx`: Ponto de entrada do aplicativo

## Instalação e Execução

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/magic-the-gathering-cards.git
   cd magic-the-gathering-cards
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:
   ```
   VITE_API_URL = 'http://cards-marketplace-api.onrender.com/'
   ```

4. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

5. Para construir o projeto para produção:
   ```bash
   npm run build
   ```

6. Para visualizar a build de produção:
   ```bash
   npm run preview
   ```

## Desafio Proposto

### Descrição do Teste

Teste prático INMETA (2024)
Nesse teste você desenvolverá um simples marketplace para troca de cartas, o design é por sua conta.

### Requisitos:

- Vue 3 (preferencialmente) ou React

### Instruções:

- Usuário deve poder se registrar e fazer login
- O usuário pode adicionar cartas à sua própria conta
- O usuário pode criar uma solicitação de troca
  - Ele deve escolher quais cartas da sua conta que pretende oferecer
  - Deve poder escolher entre todas cartas registradas quais ele quer receber
- O usuário deve poder deletar solicitações de troca que criou
- Todos usuários e visitantes têm acesso à página inicial do marketplace mostrando as solicitações de troca abertas

### Implementações Adicionais

Além dos requisitos, foi implementada uma funcionalidade de tradução das cartas do inglês para o português, proporcionando uma melhor experiência para os usuários que preferem o idioma português. O projeto também conta com uma versão mobile responsiva, garantindo uma excelente experiência de usuário em dispositivos móveis.

## Conclusão

Este projeto demonstrou a implementação de um marketplace completo para troca de cartas Magic: The Gathering, utilizando uma combinação de bibliotecas modernas para garantir uma experiência de usuário rica e fluida. O uso do Context API facilitou o gerenciamento de estado, enquanto Vite proporcionou um ambiente de desenvolvimento rápido e eficiente. A internacionalização com i18next permitiu adicionar suporte multilíngue de maneira simples e eficaz. A versão mobile responsiva assegura que o aplicativo é acessível e utilizável em diferentes dispositivos.
# **Documentação do Portfólio**

## **Visão Geral 📜**

Este documento descreve a estrutura, as tecnologias utilizadas e como executar e manter o projeto do meu portfólio pessoal. O portfólio foi desenvolvido para apresentar meus projetos, habilidades e experiência de forma interativa e moderna.

---

## **Tecnologias Utilizadas 🛠️**

- **Vite:** Um builder de front-end extremamente rápido que oferece um ambiente de desenvolvimento ágil e otimizações de build eficientes.
- **React:** Uma biblioteca JavaScript para construir interfaces de usuário, permitindo a criação de componentes reutilizáveis e uma arquitetura baseada em componentes.
- **Tailwind CSS:** Um framework CSS utility-first para criar designs customizados rapidamente sem sair do HTML. Ele oferece classes de baixo nível que podem ser combinadas para construir qualquer design diretamente na marcação.
- **Node.js:** Ambiente de execução JavaScript necessário para rodar o Vite e gerenciar as dependências do projeto.
- **npm / yarn:** Gerenciadores de pacotes para Node.js, usados para instalar e gerenciar as bibliotecas do projeto.

---

## **Pré-requisitos 📋**

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em seu sistema:

- **Node.js:** (Versão LTS recomendada) - [Download Node.js](https://nodejs.org/)
- **npm** (geralmente vem com o Node.js) ou **yarn** (opcional) - [Instalar Yarn](https://classic.yarnpkg.com/en/docs/install/)

---

## **Instalação ⚙️**

Siga os passos abaixo para configurar o ambiente de desenvolvimento local:

1. **Clone o repositório:**

```bash
git clone <URL_DO_SEU_REPOSITORIO_GIT>
cd <NOME_DA_PASTA_DO_PROJETO>
```

2. **Instale as dependências:**

   Usando npm:

```bash
npm install
```

Ou usando yarn:

```bash
yarn install
```

---

## **Scripts Disponíveis 🚀**

No diretório do projeto, você pode executar vários scripts definidos no arquivo `package.json`:

- `npm run dev` ou `yarn dev`

  - Inicia o servidor de desenvolvimento do Vite com Hot Module Replacement (HMR).
  - Abra [http://localhost:5173](http://localhost:5173) (ou a porta indicada no terminal) para visualizar no navegador.

- `npm run build` ou `yarn build`

  - Compila o projeto para produção na pasta `dist`.
  - Otimiza os assets para melhor performance.

- `npm run preview` ou `yarn preview`

  - Inicia um servidor local para visualizar o build de produção (conteúdo da pasta `dist`).

- `npm run lint` ou `yarn lint` (se configurado)
  - Executa o linter (ESLint, por exemplo) para verificar erros de código e estilo.

---

## **Estrutura do Projeto 📂**

A estrutura de pastas do projeto segue um padrão comum para aplicações React com Vite:

```
portfolio-vite-react-tailwind/
├── public/               # Arquivos estáticos públicos (ícones, manifest.json, etc.)
├── src/                  # Código fonte da aplicação
│   ├── assets/           # Imagens, fontes e outros assets
│   ├── components/       # Componentes React reutilizáveis
│   │   ├── Button.jsx
│   │   └── ...
│   ├── pages/            # Componentes de nível de página (Home, About, Projects, etc.)
│   │   ├── HomePage.jsx
│   │   └── ...
│   ├── App.jsx           # Componente raiz da aplicação
│   ├── main.jsx          # Ponto de entrada da aplicação React
│   └── index.css         # Arquivo CSS global ou importações do Tailwind
├── .eslintrc.cjs         # Configuração do ESLint (se usado)
├── .gitignore            # Arquivos e pastas ignorados pelo Git
├── index.html            # Template HTML principal
├── package.json          # Metadados do projeto e dependências
├── postcss.config.js     # Configuração do PostCSS (para Tailwind)
├── tailwind.config.js    # Configuração do Tailwind CSS
└── vite.config.js        # Configuração do Vite
```

---

## **Componentes 🧩**

O projeto é construído usando uma arquitetura baseada em componentes. Componentes reutilizáveis (como botões, cards, modais, etc.) são encontrados em `src/components/`. Componentes que representam seções ou páginas inteiras (como `Header`, `Footer`, `ProjectsSection`, `ContactForm`) podem estar em `src/components/` ou `src/pages/` dependendo da sua organização.

**Exemplo de componente:**

- `src/components/ProjectCard.jsx`: Um card para exibir informações de um projeto individual.
- `src/components/Navbar.jsx`: A barra de navegação principal do portfólio.

---

## **Estilização com Tailwind CSS 🎨**

O Tailwind CSS é configurado no arquivo `tailwind.config.js`. As classes utilitárias são aplicadas diretamente nos elementos JSX.

**Principais pontos da configuração:**

- **`content`**: Em `tailwind.config.js`, esta propriedade especifica os arquivos onde o Tailwind deve procurar por classes para gerar o CSS final. Geralmente inclui arquivos `.html`, `.js`, `.jsx`, `.ts`, e `.tsx`.

  ```javascript
  // tailwind.config.js
  export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {}, // Para adicionar ou sobrescrever estilos do Tailwind
    },
    plugins: [],
  };
  ```

- **CSS Global**: O arquivo `src/index.css` (ou similar) é usado para importar as diretivas base do Tailwind e pode ser usado para estilos globais ou customizações mais complexas.

  ```css
  /* src/index.css */
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

---

## **Build para Produção 📦**

Para criar uma versão otimizada do seu portfólio para deploy, execute o comando:

```bash
npm run build
```

Ou, se estiver usando yarn:

```bash
yarn build
```

Este comando criará uma pasta `dist` no diretório raiz do projeto com todos os arquivos estáticos prontos para serem servidos.

---

## **Deployment (Implantação) 🌐**

A pasta `dist` gerada pelo comando build contém tudo o que é necessário para implantar seu portfólio. Eu hospedei esta pasta na plataforma:

- **Netlify**

---

## **Funcionalidades Principais ✨**

- **Design Responsivo:** Adaptável a diferentes tamanhos de tela (desktop, tablet, mobile) graças ao Tailwind CSS.
- **Seções Comuns:**
  - Home/Apresentação
  - Sobre Mim
  - Projetos (com detalhes e links)
  - Habilidades/Tecnologias
  - Contato
- **Navegação Clara:** Menu de navegação intuitivo.
- **Performance Otimizada:** Graças ao Vite e às boas práticas de desenvolvimento React.

---

## **Possíveis Melhorias e Próximos Passos 🚀**

- **Internacionalização (i18n):** Adicionar suporte para múltiplos idiomas.
- **Blog:** Integrar uma seção de blog para compartilhar artigos e conhecimentos.
- **Animações Avançadas:** Implementar animações mais elaboradas (ex: com Framer Motion).
- **Testes:** Adicionar testes unitários e de integração (ex: com Jest e React Testing Library).
- **CMS Integration:** Integrar um Headless CMS para gerenciar o conteúdo dos projetos e do blog.
- **Dark Mode:** Implementar um tema escuro.

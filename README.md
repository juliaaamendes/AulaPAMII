# 📱 MeuCrud - Aplicativo de Gerenciamento de Pessoas

Um aplicativo mobile desenvolvido em React Native com Expo para gerenciamento de contatos pessoais. Permite adicionar, editar, visualizar e excluir pessoas com informações como nome, sobrenome, e-mail e telefone.

## 🎥 Vídeo Demonstrativo

[![Assista ao vídeo](https://img.shields.io/badge/YouTube-Vídeo%20Demonstrativo-red?style=for-the-badge&logo=youtube)](https://youtu.be/z6JCQHriUoQ)

## ✨ Funcionalidades

- ➕ **Adicionar Pessoa**: Cadastre novas pessoas com nome, sobrenome, e-mail e telefone
- ✏️ **Editar Pessoa**: Modifique informações existentes
- 👀 **Visualizar Lista**: Veja todas as pessoas cadastradas em cards elegantes
- 🗑️ **Excluir Pessoa**: Remova contatos indesejados
- 🔍 **Interface Intuitiva**: Design moderno e responsivo
- 🌐 **Multiplataforma**: Funciona em Android, iOS e Web

## 🛠️ Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma para desenvolvimento e build
- **React Navigation** - Navegação entre telas
- **JSON Server** - API REST simulada para persistência de dados
- **Cloudflared** - Tunneling para acesso remoto à API local
- **Ionicons** - Ícones vetoriais
- **Axios** - Cliente HTTP para requisições
- **@blazejkustra/react-native-alert** - Alertas customizados para React Native

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- Expo CLI
- Cloudflared (para tunneling remoto)
- Emulador Android/iOS ou dispositivo físico

### Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/juliaaamendes/AulaPAMII.git
   cd AulaPAMII/MeuCrud
   ```

2. **Instale as dependências:**
   ```bash
   npm i
   ```
   ```bash
   npm i @blazejkustra/react-native-alert @react-navigation/native @react-navigation/native-stack json-server expo @cloudflared
   ```

### Execução pelo Computador (com Tunneling)

Para executar o app no seu computador e acessar a API remotamente via celular:

1. **Inicie o servidor JSON em uma aba do terminal:**
   ```bash
   npx json-server --watch database.json --port 3000
   ```

2. **Em outra aba do terminal, crie um tunnel com Cloudflared:**
   ```bash
   npx cloudflared tunnel --url http://localhost:3000
   ```
   - altere em `src/servers/configApi.js` a URL HTTPS pela gerada (ex: https://abc123.trycloudflare.com)

3. **Execute o aplicativo:**
   ```bash
   npm start
   ```

4. **No celular:**
   - Instale o app Expo Go.
   - Escaneie o QR code exibido no terminal.

### Plataformas Suportadas

- **Android**: `npm run android`
- **iOS**: `npm run ios` (apenas em macOS)
- **Web**: `npm run web`

## 📁 Estrutura do Projeto

```
MeuCrud/
├── assets/                 # Imagens e recursos estáticos
├── src/
│   ├── components/         # Componentes reutilizáveis
│   │   └── CardPersonal.js # Card para exibir pessoa
│   ├── screens/            # Telas do aplicativo
│   │   ├── AddEditScreen.js # Tela de adicionar/editar
│   │   └── HomeScreen.js   # Tela principal com lista
│   ├── servers/            # Configurações de API
│   │   ├── configApi.js    # Configuração do Axios
│   │   └── peopleCrud.js   # Funções CRUD
│   └── styles/             # Estilos globais
│       └── styles.js       # Definições de estilo
├── App.js                  # Ponto de entrada do app
├── database.json           # Dados simulados para JSON Server
├── package.json            # Dependências e scripts
└── app.json                # Configurações do Expo
```

## 🎨 Design

O aplicativo apresenta um design moderno com:
- Cores suaves e elegantes
- Sombras e elevações para profundidade
- Botões arredondados e interativos
- Tipografia clara e legível
- Layout responsivo

## 📝 Como Usar

1. Na tela inicial, veja a lista de pessoas cadastradas
2. Toque no botão "+" para adicionar uma nova pessoa
3. Preencha os campos: nome, sobrenome, e-mail e telefone
4. Toque em "Salvar" para confirmar
5. Para editar, toque no botão "Editar" no card da pessoa
6. Para excluir, toque no botão "Deletar" no card

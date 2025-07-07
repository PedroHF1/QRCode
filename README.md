# Leitor de QR Code

Um aplicativo React Native construído com Expo para escanear códigos QR usando a câmera do dispositivo.

## Funcionalidades

- 📱 **Integração com Câmera**: Usa a câmera do dispositivo para escanear códigos QR
- 🔐 **Gerenciamento de Permissões**: Solicita automaticamente permissões da câmera
- 🎯 **Detecção de QR Code**: Escaneamento e detecção de códigos QR em tempo real
- 🚫 **Prevenção de Duplicatas**: Evita múltiplos escaneamentos do mesmo código QR
- 📱 **Multiplataforma**: Funciona tanto no iOS quanto no Android

## Capturas de Tela

*Adicione capturas de tela do seu aplicativo aqui*

## Stack Tecnológica

- **React Native**: 0.79.5
- **Expo**: ~53.0.17
- **TypeScript**: ~5.8.3
- **expo-camera**: ~16.1.10
- **expo-status-bar**: ~2.2.3

## Pré-requisitos

Antes de executar este projeto, certifique-se de ter o seguinte instalado:

- [Node.js](https://nodejs.org/) (v16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Android Studio](https://developer.android.com/studio) (para desenvolvimento Android)
- [Xcode](https://developer.apple.com/xcode/) (para desenvolvimento iOS, apenas macOS)

## Instalação

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositório>
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm start
   # ou
   yarn start
   ```

## Executando o Aplicativo

### Modo de Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento do Expo
npm start
```

Isso abrirá o Expo DevTools no seu navegador. Você pode então:
- Escanear o código QR com o aplicativo Expo Go no seu telefone
- Pressionar `a` para executar no emulador Android
- Pressionar `i` para executar no simulador iOS

### Plataforma Específica

```bash
# Executar no Android
npm run android

# Executar no iOS (apenas macOS)
npm run ios

# Executar na Web
npm run web
```

## Como Usar

1. **Inicie o aplicativo** no seu dispositivo ou emulador
2. **Toque no botão "ler QR Code"** para abrir a câmera
3. **Conceda permissões da câmera** quando solicitado
4. **Aponte sua câmera** para um código QR
5. **O aplicativo detectará automaticamente** e exibirá o conteúdo do código QR
6. **Toque em "Fechar"** para fechar a visualização da câmera

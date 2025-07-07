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
   cd projectFinalM3/rn-qrcode
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

## Estrutura do Projeto

```
rn-qrcode/
├── App.tsx                 # Componente principal do aplicativo
├── package.json            # Dependências e scripts
├── tsconfig.json          # Configuração do TypeScript
├── metro.config.js        # Configuração do Metro bundler
├── app.json              # Configuração do Expo
├── android/              # Arquivos específicos do Android
├── ios/                  # Arquivos específicos do iOS
└── index.js              # Ponto de entrada
```

## Componentes Principais

### App.tsx
- Componente principal do aplicativo
- Gerencia permissões da câmera
- Controla a funcionalidade de escaneamento de QR code
- Implementa prevenção de escaneamentos duplicados

### Funcionalidades Implementadas
- **Gerenciamento de Permissões da Câmera**: Usa o hook `useCameraPermissions`
- **Escaneamento de QR Code**: Detecção de código de barras em tempo real com `CameraView`
- **Interface Modal**: A visualização da câmera abre em um modal
- **Bloqueio de Escaneamento**: Previne múltiplos escaneamentos do mesmo código QR
- **Tratamento de Erros**: Tratamento gracioso de erros para negações de permissão

## Configuração

### Permissões da Câmera
O aplicativo solicita automaticamente permissões da câmera quando o botão de escaneamento é pressionado. Se as permissões forem negadas, um alerta é exibido.

### Detecção de QR Code
O aplicativo usa o callback `onBarcodeScanned` do Expo Camera para detectar códigos QR em tempo real.

## Solução de Problemas

### Problemas Comuns

1. **Câmera não funcionando**
   - Certifique-se de que as permissões da câmera foram concedidas
   - Verifique se o dispositivo possui uma câmera
   - Reinicie o aplicativo se as permissões foram negadas

2. **Erros de build**
   - Limpe o cache do Metro: `npx expo start --clear`
   - Delete node_modules e reinstale: `rm -rf node_modules && npm install`

3. **Problemas de build no iOS**
   - Certifique-se de que o Xcode está instalado corretamente
   - Execute `cd ios && pod install` se estiver usando CocoaPods

4. **Problemas de build no Android**
   - Certifique-se de que o Android Studio e SDK estão configurados corretamente
   - Verifique se a variável de ambiente ANDROID_HOME está definida

## Contribuindo

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Faça commit das suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Faça push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## Suporte

Se você encontrar algum problema ou tiver dúvidas, por favor:
1. Verifique a seção de solução de problemas acima
2. Pesquise issues existentes no repositório
3. Crie uma nova issue com informações detalhadas sobre seu problema

---

**Nota**: Este aplicativo requer acesso à câmera para funcionar corretamente. Certifique-se de conceder permissões da câmera quando solicitado. 

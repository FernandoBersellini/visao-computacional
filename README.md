# Identificador de Equinos (Visão Computacional)

**🔗 Acesse o projeto online:** [https://fernandobersellini.github.io/visao-computacional/](https://fernandobersellini.github.io/visao-computacional/)

Este projeto é uma aplicação web de Visão Computacional que utiliza um modelo treinado no [Teachable Machine](https://teachablemachine.withgoogle.com/) do Google para identificar características, raças ou tipos de equinos a partir de imagens.

## 🌟 Funcionalidades

- **Interface Amigável:** Design limpo e responsivo.
- **Upload de Imagens:** Permite ao usuário carregar imagens do próprio computador para classificação.
- **Processamento no Navegador:** Utiliza a biblioteca **TensorFlow.js** para executar o modelo de Machine Learning diretamente no navegador do usuário, garantindo privacidade e rapidez (as imagens não são enviadas para um servidor).
- **Resultados Visuais:** Exibe os resultados das previsões através de barras de progresso dinâmicas, indicando a probabilidade percentual de cada classe.

## 🛠️ Tecnologias Utilizadas

- **HTML5** & **CSS3** (Vanilla)
- **JavaScript** (ES6+)
- **[TensorFlow.js](https://www.tensorflow.org/js)**: Para a inferência do modelo de aprendizado de máquina.
- **Teachable Machine Image Library**: Facilita a integração e carregamento do modelo exportado.

## 🚀 Como Usar

1. Clone ou faça o download deste repositório para o seu computador.
2. Como se trata de um projeto estático, basta abrir o arquivo `index.html` em qualquer navegador web moderno (Google Chrome, Firefox, Edge, Safari, etc.).
3. Aguarde o carregamento inicial do modelo.
4. Clique no botão **"Utilizar imagem do computador"** para selecionar uma foto.
5. A imagem será exibida na tela e o modelo processará a classificação, atualizando as barras de progresso com as probabilidades estimadas.

## 🧠 Sobre o Modelo

O modelo de classificação de imagens foi treinado utilizando a plataforma Google Teachable Machine e está hospedado publicamente no seguinte link:
[https://teachablemachine.withgoogle.com/models/JaAqx3b_S/](https://teachablemachine.withgoogle.com/models/JaAqx3b_S/)

*Nota: O modelo é carregado automaticamente quando a página é aberta.*

## 💻 Servidor Local (Opcional)

Embora não seja estritamente necessário, caso encontre problemas de CORS (Cross-Origin Resource Sharing) ao carregar recursos locais, você pode servir a aplicação usando um servidor HTTP simples. 

Se você tiver o Python instalado:
```bash
# Python 3
python -m http.server 8000
```
Em seguida, acesse `http://localhost:8000` no seu navegador.

Extensões como o **Live Server** no VS Code também são uma ótima opção.

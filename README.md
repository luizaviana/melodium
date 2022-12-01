# 📁 Descrição do Projeto
  - Trabalho de Conclusão de Curso 
  - Finalizado em 11/2022, para entrega no Colégio Técnico de Campinas (COTUCA)
  - Melodium, uma aplicação de recomendação de músicas através de análise de aspectos musicais compatíveis
    - A partir de uma música inserida pelo usuário, através da pesquisa dentro da plataforma, o algoritmo analisa e devolve uma música no banco de dados compatível
    - Aspectos analisados para a recomendação:
      - BPM (Batidas por Minuto)
      - Tom (Campo Harmônico)
      - Acusticidade (Frequências Instrumentais)
      - Valência ("Emoção da música")
      - Volume (em dB)
      - Energia (Variação de frequências e volume)
  - Tecnologias usadas:
    - JavaScript
    - Spotify API
    - Node.js
    - React.js
    - HTML
    - CSS
  - Participantes:
    - Pedro Sakai
    - Luiza Viana
    - Júlia Lopes
 
# 🛠️ Abrir e rodar o projeto

⚠️ Para executar o software é preciso ter o Node.js instalado!

```
cd final

npm install

npm install node-fetch@2.6.1

npm start
```

Dentro da plataforma:
![image](https://user-images.githubusercontent.com/69872395/205049403-403ad7f9-f2d1-4cce-95cc-6ae8557c36fe.png)

- Insira uma música, artista ou álbum da sua escolha no campo indicado, depois clique em 'Pesquisar' (ou tecle 'Enter').
![image](https://user-images.githubusercontent.com/69872395/205050748-1394daf2-f465-4b71-a732-dff1d839822b.png)

- Irão aparecer 4 músicas relacionadas ao termo pesquisado, escolha uma clicando nesta. Você será redirecionado para uma página mostrando as informações básicas e musicais da canção escolhida, com dois botões:
![image](https://user-images.githubusercontent.com/69872395/205050830-48958338-0b08-4fe4-8898-e55f0bb60bed.png)
    1. 'Recomendação' que te mostrará uma música parecida
![image](https://user-images.githubusercontent.com/69872395/205050928-3fe63041-528f-4ff3-b29e-aec3cdda6a24.png)
    2. 'Ouvir Agora' com o símbolo do Spotify, que abre a página do Spotify com a música.
    ![image](https://user-images.githubusercontent.com/69872395/205051258-814c8c9e-9a58-414b-b007-3b109f5333b3.png)
    ![image](https://user-images.githubusercontent.com/69872395/205051300-e33b492f-f8fa-4989-931c-c6cf4f97c4b9.png)


- Para voltar na página inicial, clique em 'Melodium', o título, ou no logo!

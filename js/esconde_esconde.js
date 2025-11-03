// js/escondeEsconde.js

 // Função para alternar a visibilidade do texto
      function toggleTexto(titulo) {
          // Seleciona o próximo parágrafo depois do título clicado
          var texto = titulo.nextElementSibling;

          // Alterna a visibilidade do texto
          if (texto.style.display === "none" || texto.style.display === "") {
              texto.style.display = "block";  // Mostra o texto
          } else {
              texto.style.display = "none";  // Esconde o texto
          }
      }
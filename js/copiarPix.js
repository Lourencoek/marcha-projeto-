function copiarPix() {
    // 1. A chave Pix que será copiada
    const chavePix = "marchadamaconhadiadema@gmail.com";

    // 2. Copia o texto para a área de transferência
    navigator.clipboard.writeText(chavePix).then(() => {
      // 3. Pega o elemento do link de texto
      const pixLink = document.getElementById('pix-link');
      
      // 4. Avisa ao usuário que o código foi copiado
      pixLink.innerText = "Pix Copiado";
      
      // 5. Opcional: Volta ao texto original depois de alguns segundos
      setTimeout(() => {
        pixLink.innerText = "Pix";
      }, 2000); // 2000 milissegundos = 2 segundos

    }).catch(err => {
      console.error('Erro ao copiar o Pix: ', err);
      alert("Erro ao copiar a chave Pix.");
    });
  }
// default; granted; denied
// console.log(Notification.permission)

/**
 * Função que mostra as notificações
 * @return {*} Não tem retorno, apenas executa uma ação
 */
function showNotification() {
  const notification = new Notification('Título: Nova mensagem!', {
    body: 'Oi! Sua caixa chegou!\nLorem ipsum dolor sit amet, consectetur adipiscing elit. In non condimentum ante. Cras egestas vive...',
    icon: './logo.png',
    image: './caixa.png',
  })

  notification.onclick = (e) => {
    // window.location.href = 'https://ameicha.com/';

    // const a = document.createElement('a');
    // a.target = '_blank';
    // a.href = 'https://ameicha.com/';
    // a.click()

    window.open('https://ameicha.com/', '_blank')
  }
}

/**
 * Bloco de IF que verifica se a permissão foi concedida
 */
if (Notification.permission === 'granted') {
  // console.log('we have permission');
  showNotification();

  /**
   * Caso a permissão seja diferente de negada 
   */
} else if (Notification.permission !== 'denied') {
  Notification.requestPermission()
    .then(permission => {
      if (permission === 'granted') {
        showNotification();
      }
      // console.log(permission)

    })
    .catch((reason) => console.log(reason))
}
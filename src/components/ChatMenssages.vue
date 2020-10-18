<template>
  <div :class="type == 1 ? 'content':'content empty'" id="content">
    <div class="container" v-if="type == 1">
      <div class="col-md-12">
        <div class="date">
          <hr>
          <span>Ontem</span>
          <hr>
        </div>
        <div class="message">
          <img class="avatar-md" src="../assets/img/avatars/avatar-female-5.jpg" data-toggle="tooltip" data-placement="top" title="Keith" alt="avatar">
          <div class="text-main">
            <div class="text-group">
              <div class="text">
                <p>Já temos algumas ideias matadoras surgindo.</p>
              </div>
            </div>
            <span>09:46 AM</span>
          </div>
        </div>
        <div class="message me">
          <div class="text-main">
            <div class="text-group me">
              <div class="text me">
                <p>Mal posso esperar! Como estamos lidando com o cliente?</p>
              </div>
            </div>
            <span>11:32 AM</span>
          </div>
        </div>
        <div class="message">
          <img class="avatar-md" src="../assets/img/avatars/avatar-female-5.jpg" data-toggle="tooltip" data-placement="top" title="Keith" alt="avatar">
          <div class="text-main">
            <div class="text-group">
              <div class="text">
                <p>Estamos indo muito bem, temos um rascunho para as pedreiras do cliente concluído.</p>
              </div>
            </div>
            <span>02:56 PM</span>
          </div>
        </div>
        <div class="message me">
          <div class="text-main">
            <div class="text-group me">
              <div class="text me">
                <p>Raquel tu que e a chefe!</p>
              </div>
            </div>
            <div class="text-group me">
              <div class="text me">
                <p>Já comecei a juntar algumas coisas para os painéis de humor, estou ansioso para começar!</p>
              </div>
            </div>
            <span>10:21 PM</span>
          </div>
        </div>
        <div class="message">
          <img class="avatar-md" src="../assets/img/avatars/avatar-female-5.jpg" data-toggle="tooltip" data-placement="top" title="Keith" alt="avatar">
          <div class="text-main">
            <div class="text-group">
              <div class="text">
                <p>
                  Bom começo pessoal, adicionei algumas notas à tarefa. 
                  Podemos precisar fazer alguns ajustes nos últimos itens - mas nada demais!
                </p>
              </div>
            </div>
            <span>11:07 PM</span>
          </div>
        </div>
        <div class="date">
          <hr>
          <span>Hoje</span>
          <hr>
        </div>
        <div class="message me">
          <div class="text-main">
            <div class="text-group me">
              <div class="text me">
                <p>Muito bem. Vejo vocês às 2 para a reunião de lançamento.</p>
              </div>
            </div>
            <span>10:21 PM</span>
          </div>
        </div>
        <div class="message">
          <img class="avatar-md" src="../assets/img/avatars/avatar-female-5.jpg" data-toggle="tooltip" data-placement="top" title="Keith" alt="avatar">
          <div class="text-main">
            <div class="text-group">
              <div class="text">
                <div class="attachment">
                  <button class="btn attach"><i class="material-icons md-18">insert_drive_file</i></button>
                  <div class="file">
                    <h5><a href="#">Termo de Abertura.pdf</a></h5>
                    <span>24kb Documento</span>
                  </div>
                </div>
              </div>
            </div>
            <span>11:07 PM</span>
          </div>
        </div>
        <div class="message me">
          <div class="text-main">
            <div class="text-group me">
              <div class="text me">
                <p>Espero que todos estejam prontos para enfrentar este grande projeto. Vamos destruir alguns conceitos e design de marca!</p>
              </div>
            </div>
            <span><i class="material-icons">check</i>10:21 PM</span>
          </div>
        </div>
        <div class="message">
          <img class="avatar-md" src="../assets/img/avatars/avatar-female-5.jpg" data-toggle="tooltip" data-placement="top" title="Keith" alt="avatar">
          <div class="text-main">
            <div class="text-group">
              <div class="text typing">
                <div class="wave">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container" v-if="type == 2">
      <div class="col-md-12">
        <div class="no-messages">
          <i class="material-icons md-48">forum</i>
          <p>Parece que as pessoas têm vergonha de iniciar o bate-papo. Quebre o gelo, envie a primeira mensagem.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatMenssages',
  props: {
    type: {
      default: 1
    }
  }
}
</script>

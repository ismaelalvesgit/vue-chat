<template>
  <!-- Inicio Criar Chat -->
  <div class="modal fade" id="startnewchat" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="requests">
        <div class="title">
          <h1>Iniciar novo chat</h1>
          <button type="button" class="btn" data-dismiss="modal" aria-label="Close"><i class="material-icons">close</i></button>
        </div>
        <div class="content">
          <form>
            <div class="form-group">
              <label for="participant">Usuários:</label>
              <input type="text" class="form-control" id="participant" placeholder="Adicionar destinatário ..." required>
              <div class="user" id="recipient">
                <img class="avatar-sm" src="../assets/img/avatars/avatar-female-5.jpg" alt="avatar">
                <h5>Raquel Barra</h5>
                <button class="btn"><i class="material-icons">close</i></button>
              </div>
            </div>
            <div class="form-group">
              <label for="topic">Topico:</label>
              <input type="text" class="form-control" id="topic" placeholder="Qual é o assunto?" required>
            </div>
            <div class="form-group">
              <label for="message">Messagem:</label>
              <textarea class="text-control" id="message" placeholder="Envie sua mensagem de boas-vindas ...">
                Hmm, você é amigável?
              </textarea>
            </div>
            <button type="submit" class="btn button w-100">Iniciar novo chat</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- Fim Criar Chat -->
</template>

<script>
export default {
  name: 'CreateRoom',
}
</script>

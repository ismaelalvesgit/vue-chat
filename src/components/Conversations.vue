<template>
  <!-- Inicio Conversas -->
  <div id="discussions" class="tab-pane fade active show">
    <div class="search">
      <form class="form-inline position-relative">
        <input type="search" class="form-control" id="conversations" placeholder="Pesquise por conversas...">
        <button type="button" class="btn btn-link loop"><i class="material-icons">search</i></button>
      </form>
      <button class="btn create" data-toggle="modal" data-target="#startnewchat"><i class="material-icons">create</i></button>
    </div>
    <div class="list-group sort">
      <button class="btn filterDiscussionsBtn active show" data-toggle="list" data-filter="all">Todas</button>
      <button class="btn filterDiscussionsBtn" data-toggle="list" data-filter="read">Lidas</button>
      <button class="btn filterDiscussionsBtn" data-toggle="list" data-filter="unread">Não Lidas</button>
    </div>						
    <div class="discussions">
      <h1>Conversas</h1>
      <div class="list-group" id="chats" role="tablist">
        <a href="#list-chat" class="filterDiscussions all unread single active" id="list-chat-list" data-toggle="list" role="tab">
          <img class="avatar-md" src="../assets/img/avatars/avatar-female-1.jpg" data-toggle="tooltip" data-placement="top" title="Raquel" alt="avatar">
          <div class="status">
            <i class="material-icons online">fiber_manual_record</i>
          </div>
          <div class="new bg-yellow">
            <span>+7</span>
          </div>
          <div class="data">
            <h5>Raquel Barra</h5>
            <span>Sex</span>
            <p>Um novo recurso foi atualizado em sua conta. Confira...</p>
          </div>
        </a>									
        <a href="#list-empty" class="filterDiscussions all unread single" id="list-empty-list" data-toggle="list" role="tab">
          <img class="avatar-md" src="../assets/img/avatars/avatar-male-1.jpg" data-toggle="tooltip" data-placement="top" title="Michael" alt="avatar">
          <div class="status">
            <i class="material-icons offline">fiber_manual_record</i>
          </div>
          <div class="new bg-pink">
            <span>+10</span>
          </div>
          <div class="data">
            <h5>Michael</h5>
            <span>Qui</span>
            <p>Como posso melhorar minhas chances de obter um depósito?</p>
          </div>
        </a>									
        <a href="#list-chat" class="filterDiscussions all read single" id="list-chat-list2" data-toggle="list" role="tab">
          <img class="avatar-md" src="../assets/img/avatars/avatar-female-2.jpg" data-toggle="tooltip" data-placement="top" title="Lani" alt="avatar">
          <div class="status">
            <i class="material-icons offline">fiber_manual_record</i>
          </div>
          <div class="data">
            <h5>Lani</h5>
            <span>Ter</span>
            <p>Ei Ismael, posso pedir-lhe para me ajudar com variações ...</p>
          </div>
        </a>
        <a href="#list-empty" class="filterDiscussions all read single" id="list-empty-list2" data-toggle="list" role="tab">
          <img class="avatar-md" src="../assets/img/avatars/avatar-male-2.jpg" data-toggle="tooltip" data-placement="top" title="Dudu" alt="avatar">
          <div class="status">
            <i class="material-icons offline">fiber_manual_record</i>
          </div>
          <div class="data">
            <h5>Dudu</h5>
            <span>5 mins</span>
            <p>Por humor injetado ou palavras aleatórias que ...</p>
          </div>
        </a>
      </div>
    </div>
  </div>
  <!-- Fim Conversas -->
</template>

<script>
export default {
  name: 'Conversations',
}
</script>

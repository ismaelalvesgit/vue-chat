<template>
  <!-- Inicio Notificações -->
  <div id="notifications" class="tab-pane fade">
    <div class="search">
      <form class="form-inline position-relative">
        <input type="search" class="form-control" id="notice" placeholder="Filtrar Notificações...">
        <button type="button" class="btn btn-link loop"><i class="material-icons filter-list">filter_list</i></button>
      </form>
    </div>
    <div class="list-group sort">
      <button class="btn filterNotificationsBtn active show" data-toggle="list" data-filter="all">Todas</button>
      <button class="btn filterNotificationsBtn" data-toggle="list" data-filter="latest">Últimas</button>
      <button class="btn filterNotificationsBtn" data-toggle="list" data-filter="oldest">Antigas</button>
    </div>						
    <div class="notifications">
      <h1>Notificações</h1>
      <div class="list-group" id="alerts" role="tablist">
        <a href="#" class="filterNotifications all latest notification" data-toggle="list">
          <img class="avatar-md" src="../assets/img/avatars/avatar-female-1.jpg" data-toggle="tooltip" data-placement="top" title="Raquel" alt="avatar">
          <div class="status">
            <i class="material-icons online">fiber_manual_record</i>
          </div>
          <div class="data">
            <p>Raquel Barra aceitou seu pedido de amizade.</p>
            <span>out 12, 2020</span>
          </div>
        </a>
        <a href="#" class="filterNotifications all latest notification" data-toggle="list">
          <img class="avatar-md" src="../assets/img/avatars/avatar-male-1.jpg" data-toggle="tooltip" data-placement="top" title="Michael" alt="avatar">
          <div class="status">
            <i class="material-icons online">fiber_manual_record</i>
          </div>
          <div class="data">
            <p>Michael, você tem uma sugestão de novo amigo hoje.</p>
            <span>Jun 12, 2020</span>
          </div>
        </a>
        <a href="#" class="filterNotifications all latest notification" data-toggle="list">
          <img class="avatar-md" src="../assets/img/avatars/avatar-male-2.jpg" data-toggle="tooltip" data-placement="top" title="Dudu" alt="avatar">
          <div class="status">
            <i class="material-icons online">fiber_manual_record</i>
          </div>
          <div class="data">
            <p>Dudu acaba de enviar uma nova mensagem..</p>
            <span>Fev 15, 2020</span>
          </div>
        </a>
        <a href="#" class="filterNotifications all latest notification" data-toggle="list">
          <img class="avatar-md" src="../assets/img/avatars/avatar-female-6.jpg" data-toggle="tooltip" data-placement="top" title="Lani" alt="avatar">
          <div class="status">
            <i class="material-icons online">fiber_manual_record</i>
          </div>
          <div class="data">
            <p>Lani faz aniversário hoje. Deseje a ela tudo de bom.</p>
            <span>Mar 23, 2020</span>
          </div>
        </a>
      </div>
    </div>
  </div>
  <!-- Fim Notificações -->
</template>

<script>
export default {
  name: 'Notifications',
}
</script>

<template>
  <!-- Inicio Contatos -->
  <div class="tab-pane fade" id="members">
    <div class="search">
      <form class="form-inline position-relative">
        <input type="search" class="form-control" id="people" placeholder="Pesquise por contatos...">
        <button type="button" class="btn btn-link loop"><i class="material-icons">search</i></button>
      </form>
      <button class="btn create" data-toggle="modal" data-target="#exampleModalCenter"><i class="material-icons">person_add</i></button>
    </div>
    <div class="list-group sort">
      <button class="btn filterMembersBtn active show" data-toggle="list" data-filter="all">Todos</button>
      <button class="btn filterMembersBtn" data-toggle="list" data-filter="online">Online</button>
      <button class="btn filterMembersBtn" data-toggle="list" data-filter="offline">Offline</button>
    </div>						
    <div class="contacts">
      <h1>Contatos</h1>
      <div class="list-group" id="contacts" role="tablist">
        <a href="#" class="filterMembers all online contact" data-toggle="list">
          <img class="avatar-md" src="../assets/img/avatars/avatar-female-1.jpg" data-toggle="tooltip" data-placement="top" title="Raquel" alt="avatar">
          <div class="status">
            <i class="material-icons online">fiber_manual_record</i>
          </div>
          <div class="data">
            <h5>Raquel Barra</h5>
            <p>Fortaleza, Brazil</p>
          </div>
          <div class="person-add">
            <i class="material-icons">person</i>
          </div>
        </a>
        <a href="#" class="filterMembers all online contact" data-toggle="list">
          <img class="avatar-md" src="../assets/img/avatars/avatar-male-1.jpg" data-toggle="tooltip" data-placement="top" title="Valdeci" alt="avatar">
          <div class="status">
            <i class="material-icons online">fiber_manual_record</i>
          </div>
          <div class="data">
            <h5>Valdeci Rolim</h5>
            <p>São Paulo, Brazil</p>
          </div>
          <div class="person-add">
            <i class="material-icons">person</i>
          </div>
        </a>
        <a href="#" class="filterMembers all online contact" data-toggle="list">
          <img class="avatar-md" src="../assets/img/avatars/avatar-female-2.jpg" data-toggle="tooltip" data-placement="top" title="Carlos" alt="avatar">
          <div class="status">
            <i class="material-icons online">fiber_manual_record</i>
          </div>
          <div class="data">
            <h5>Carlos Eduardo</h5>
            <p>Fortaleza, Brazil</p>
          </div>
          <div class="person-add">
            <i class="material-icons">person</i>
          </div>
        </a>
        <a href="#" class="filterMembers all online contact" data-toggle="list">
          <img class="avatar-md" src="../assets/img/avatars/avatar-male-2.jpg" data-toggle="tooltip" data-placement="top" title="Lani" alt="avatar">
          <div class="status">
            <i class="material-icons online">fiber_manual_record</i>
          </div>
          <div class="data">
            <h5>Lani</h5>
            <p>Beberibe, Brazil</p>
          </div>
          <div class="person-add">
            <i class="material-icons">person</i>
          </div>
        </a>
        <a href="#" class="filterMembers all online contact" data-toggle="list">
          <img class="avatar-md" src="../assets/img/avatars/avatar-female-3.jpg" data-toggle="tooltip" data-placement="top" title="Maicon" alt="avatar">
          <div class="status">
            <i class="material-icons online">fiber_manual_record</i>
          </div>
          <div class="data">
            <h5>Maicon</h5>
            <p>Fortaleza, Brazil</p>
          </div>
          <div class="person-add">
            <i class="material-icons">person</i>
          </div>
        </a>
        <a href="#" class="filterMembers all offline contact" data-toggle="list">
          <img class="avatar-md" src="../assets/img/avatars/avatar-female-6.jpg" data-toggle="tooltip" data-placement="top" title="JJ" alt="avatar">
          <div class="status">
            <i class="material-icons offline">fiber_manual_record</i>
          </div>
          <div class="data">
            <h5>JJ</h5>
            <p>Fortaleza, Brazil</p>
          </div>
          <div class="person-add">
            <i class="material-icons">person</i>
          </div>
        </a>
      </div>
    </div>
  </div>
  <!-- Fim Contatos -->
</template>

<script>
export default {
  name: 'Contact',
}
</script>

<template>
  <div class="top">
    <div class="container"  v-if="type == 1">
      <div class="col-md-12">
        <div class="inside">
          <a href="#"><img class="avatar-md" src="../assets/img/avatars/avatar-female-5.jpg" data-toggle="tooltip" data-placement="top" title="Keith" alt="avatar"></a>
          <div class="status">
            <i class="material-icons online">fiber_manual_record</i>
          </div>
          <div class="data">
            <h5><a href="#">Raquel Barra</a></h5>
            <span>Ativo agora</span>
          </div>
          <button class="btn connect d-md-block d-none" name="1"><i class="material-icons md-30">phone_in_talk</i></button>
          <button class="btn connect d-md-block d-none" name="1"><i class="material-icons md-36">videocam</i></button>
          <button class="btn d-md-block d-none"><i class="material-icons md-30">info</i></button>
          <div class="dropdown">
            <button class="btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="material-icons md-30">more_vert</i></button>
            <div class="dropdown-menu dropdown-menu-right">
              <button class="dropdown-item connect" name="1"><i class="material-icons">phone_in_talk</i>Chamada de voz</button>
              <button class="dropdown-item connect" name="1"><i class="material-icons">videocam</i>Video chamada</button>
              <hr>
              <button class="dropdown-item"><i class="material-icons">clear</i>Apagar o histórico</button>
              <button class="dropdown-item"><i class="material-icons">block</i>Contato bloqueado</button>
              <button class="dropdown-item"><i class="material-icons">delete</i>Excluir contato</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container" v-if="type == 2">
      <div class="col-md-12">
        <div class="inside">
          <a href="#"><img class="avatar-md" src="../assets/img/avatars/avatar-female-2.jpg" data-toggle="tooltip" data-placement="top" title="Lean" alt="avatar"></a>
          <div class="status">
            <i class="material-icons offline">fiber_manual_record</i>
          </div>
          <div class="data">
            <h5><a href="#">Lani</a></h5>
            <span>Offline</span>
          </div>
          <button class="btn connect d-md-block d-none" name="2"><i class="material-icons md-30">phone_in_talk</i></button>
          <button class="btn connect d-md-block d-none" name="2"><i class="material-icons md-36">videocam</i></button>
          <button class="btn d-md-block d-none"><i class="material-icons md-30">info</i></button>
          <div class="dropdown">
            <button class="btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="material-icons md-30">more_vert</i></button>
            <div class="dropdown-menu dropdown-menu-right">
              <button class="dropdown-item connect" name="2"><i class="material-icons">phone_in_talk</i>Chamada de voz</button>
              <button class="dropdown-item connect" name="2"><i class="material-icons">videocam</i>Video chamada</button>
              <hr>
              <button class="dropdown-item"><i class="material-icons">clear</i>Apagar o histórico</button>
              <button class="dropdown-item"><i class="material-icons">block</i>Contato bloqueado</button>
              <button class="dropdown-item"><i class="material-icons">delete</i>Excluir contato</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatTop',
  props: {
    type: {
      default: 1
    }
  }
}
</script>

<template>
  <!-- Inicio Call -->
  <div class="call" id="call1">
    <div class="content">
      <div class="container">
        <div class="col-md-12">
          <div class="inside">
            <div class="panel">
              <div class="participant">
                <img class="avatar-xxl" src="../assets/img/avatars/avatar-female-5.jpg" alt="avatar">
                <span>Connecting</span>
              </div>							
              <div class="options">
                <button class="btn option"><i class="material-icons md-30">mic</i></button>
                <button class="btn option"><i class="material-icons md-30">videocam</i></button>
                <button class="btn option call-end"><i class="material-icons md-30">call_end</i></button>
                <button class="btn option"><i class="material-icons md-30">person_add</i></button>
                <button class="btn option"><i class="material-icons md-30">volume_up</i></button>
              </div>
              <button class="btn back" name="1"><i class="material-icons md-24">chat</i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Fim Call -->
</template>

<script>
export default {
  name: 'ChatCall',
}
</script>

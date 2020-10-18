<template>
  <div class="container">
    <div class="col-md-12">
      <div class="bottom">
        <form class="position-relative w-100">
          <textarea class="form-control" :placeholder="type == 1 ? 'Comece a digitar para responder ...': 'Inicie a conversa...'" rows="1"></textarea>
          <button class="btn emoticons"><i class="material-icons">insert_emoticon</i></button>
          <button type="submit" class="btn send"><i class="material-icons">send</i></button>
        </form>
        <label>
          <input type="file">
          <span class="btn attach d-sm-block d-none"><i class="material-icons">attach_file</i></span>
        </label> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatInput',
  props: {
    type: {
      default: 1
    }
  }
}
</script>

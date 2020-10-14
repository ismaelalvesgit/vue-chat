<template>
    <main>
        <div class="layout">
            <!-- Inicio Login -->
            <div class="main order-md-1">
                <div class="start">
                    <div class="container">
                        <div class="col-md-12">
                            <div class="content">
                                <h1>Login Chat Vue.js</h1>
                                <div class="third-party">
                                    <button class="btn item bg-blue">
                                        <i class="fab fa-facebook fa-2x" style="color: white"></i>
                                    </button>
                                    <button class="btn item bg-teal">
                                        <i class="fab fa-google fa-2x" style="color: white"></i>
                                    </button>
                                    <button class="btn item bg-purple" style="color: white">
                                        <i class="fab fa-twitter fa-2x" style="color: white"></i>
                                    </button>
                                </div>
                                <p>ou use sua conta de e-mail:</p>
                                <form>
                                    <div class="form-group">
                                        <input type="email" id="inputEmail" class="form-control" placeholder="Email" required>
                                        <button class="btn icon"><i class="material-icons">mail_outline</i></button>
                                    </div>
                                    <div class="form-group">
                                        <input type="password" id="inputSenha" class="form-control" placeholder="Senha" required>
                                        <button class="btn icon"><i class="material-icons">lock_outline</i></button>
                                    </div>
                                    <button type="submit" class="btn button">Login</button>
                                    <div class="callout">
                                        <span>Não tem conta? <router-link to="/singup">Crie agora!!</router-link></span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Fim Login -->
            <!-- Inicio Sidebar -->
            <div class="aside order-md-2">
                <div class="container">
                    <div class="col-md-12">
                        <div class="preference">
                            <h2>Fala ae Mano!</h2>
                            <p>Insira seus dados pessoais e comece sua jornada com messages hoje.</p>
                            <router-link to="/singup" class="btn button">Cadastre-se!!</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Fim Sidebar -->
        </div> <!-- Layout -->
    </main>
</template>

<script>
export default {
    name: "SignIn"
}
</script>

<style >
</style>
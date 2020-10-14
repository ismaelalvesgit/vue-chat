<template>
    <main>
        <div class="layout">
            <!-- Start of Sign Up -->
            <div class="main order-md-2">
                <div class="start">
                    <div class="container">
                        <div class="col-md-12">
                            <div class="content">
                                <h1>Create Account</h1>
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
                                <p>ou use seu e-mail para se cadastra:</p>
                                <form class="signup">
                                    <div class="form-parent">
                                        <div class="form-group">
                                            <input type="text" id="inputNome" class="form-control" placeholder="Nome Completo" required>
                                            <button class="btn icon"><i class="material-icons">person_outline</i></button>
                                        </div>
                                        <div class="form-group">
                                            <input type="email" id="inputEmail" class="form-control" placeholder="Email" required>
                                            <button class="btn icon"><i class="material-icons">mail_outline</i></button>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <input type="password" id="inputSenha" class="form-control" placeholder="Senha" required>
                                        <button class="btn icon"><i class="material-icons">lock_outline</i></button>
                                    </div>
                                    <button type="submit" class="btn button">Cadastrar</button>
                                    <div class="callout">
                                        <span>já é um membro? <router-link to="/">Faça seu Login agora!!</router-link></span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End of Sign Up -->
            <!-- Start of Sidebar -->
            <div class="aside order-md-1">
                <div class="container">
                    <div class="col-md-12">
                        <div class="preference">
                            <h2>Bem vindo de volta!</h2>
                            <p>Para se manter conectado com seus amigos, faça o login com suas informações pessoais.</p>
                             <router-link to="/" class="btn button">Faça seu login!!</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End of Sidebar -->
        </div> <!-- Layout -->
    </main>
</template>

<script>
export default {
    name: 'SingUp'
}
</script>

<style>

</style>
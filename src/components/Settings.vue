<template>
  <!-- Inicio Configurações -->
  <div class="tab-pane fade" id="settings">			
    <div class="settings">
      <div class="profile">
        <img class="avatar-xl" src="../assets/img/avatars/avatar-male-1.jpg" alt="avatar">
        <h1><a href="#">Ismael Alves</a></h1>
        <span>Fortaleza, Brazil</span>
        <div class="stats">
          <div class="item">
            <h2>122</h2>
            <h3>Amigos</h3>
          </div>
          <div class="item">
            <h2>305</h2>
            <h3>Conversas</h3>
          </div>
          <div class="item">
            <h2>1538</h2>
            <h3>Postagens</h3>
          </div>
        </div>
      </div>
      <div class="categories" id="accordionSettings">
        <h1>Configurações</h1>
        <!-- Iincio Conta -->
        <div class="category">
          <a href="#" class="title collapsed" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <i class="material-icons md-30 online">person_outline</i>
            <div class="data">
              <h5>Minha Conta</h5>
              <p>Atualize os detalhes do seu perfil</p>
            </div>
            <i class="material-icons">keyboard_arrow_right</i>
          </a>
          <div class="collapse" id="collapseOne" aria-labelledby="headingOne" data-parent="#accordionSettings">
            <div class="content">
              <div class="upload">
                <div class="data">
                  <img class="avatar-xl" src="../assets/img/avatars/avatar-male-1.jpg" alt="image">
                  <label>
                    <input type="file">
                    <span class="btn button">Upload avatar</span>
                  </label>
                </div>
                <p>Para melhores resultados, use uma imagem de pelo menos 256px por 256px no formato .jpg ou .png!</p>
              </div>
              <form>
                <div class="parent">
                  <div class="field">
                    <label for="firstName">Nome <span>*</span></label>
                    <input type="text" class="form-control" id="firstName" placeholder="Nome" value="Ismael" required>
                  </div>
                  <div class="field">
                    <label for="lastName">Sobre Nome <span>*</span></label>
                    <input type="text" class="form-control" id="lastName" placeholder="Sobre Nome" value="Alves" required>
                  </div>
                </div>
                <div class="field">
                  <label for="email">Email <span>*</span></label>
                  <input type="email" class="form-control" id="email" placeholder="Seu email" value="cearaismael1997@gmail.com" required>
                </div>
                <div class="field">
                  <label for="password">Senha</label>
                  <input type="password" class="form-control" id="password" placeholder="Sua nova senha" value="Senha" required>
                </div>
                <div class="field">
                  <label for="location">Localização</label>
                  <input type="text" class="form-control" id="location" placeholder="Sua localização" value="Fortaleza, Brazil" required>
                </div>
                <button class="btn btn-link w-100">Deletar Conta</button>
                <button type="submit" class="btn button w-100">Salvar</button>
              </form>
            </div>
          </div>
        </div>
        <!-- Fim Conta -->
        <!-- Inicio Historico do Chat -->
        <div class="category">
          <a href="#" class="title collapsed" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
            <i class="material-icons md-30 online">mail_outline</i>
            <div class="data">
              <h5>Chats</h5>
              <p>Verifique seu histórico de bate-papo</p>
            </div>
            <i class="material-icons">keyboard_arrow_right</i>
          </a>
          <div class="collapse" id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordionSettings">
            <div class="content layer">
              <div class="history">
                <p>Quando você limpa o histórico de conversas, as mensagens são excluídas do seu próprio dispositivo.</p>
                <p>As mensagens não serão excluídas ou apagadas nos dispositivos das pessoas com quem você conversou.</p>
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="same-address">
                  <label class="custom-control-label" for="same-address">Ocultar irá remover seu histórico de bate-papo da lista recente.</label>
                </div>
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="save-info">
                  <label class="custom-control-label" for="save-info">Excluir irá remover seu histórico de bate-papo do dispositivo.</label>
                </div>
                <button type="submit" class="btn button w-100">Claro, blá-blá</button>
              </div>
            </div>
          </div>
        </div>
        <!-- Fim Historico do Chat -->
        <!-- Inicio Config Notificações -->
        <div class="category">
          <a href="#" class="title collapsed" id="headingThree" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
            <i class="material-icons md-30 online">notifications_none</i>
            <div class="data">
              <h5>Notificações</h5>
              <p>Ativar ou desativar notificações</p>
            </div>
            <i class="material-icons">keyboard_arrow_right</i>
          </a>
          <div class="collapse" id="collapseThree" aria-labelledby="headingThree" data-parent="#accordionSettings">
            <div class="content no-layer">
              <div class="set">
                <div class="details">
                  <h5>Desktop Notificações</h5>
                  <p>Você pode configurar para receber notificações quando houver novas mensagens.</p>
                </div>
                <label class="switch">
                  <input type="checkbox" checked>
                  <span class="slider round"></span>
                </label>
              </div>
              <div class="set">
                <div class="details">
                  <h5>Selo de mensagem não lida</h5>
                  <p>Se ativado, mostra um emblema vermelho no ícone do aplicativo quando você tem mensagens não lidas.</p>
                </div>
                <label class="switch">
                  <input type="checkbox" checked>
                  <span class="slider round"></span>
                </label>
              </div>
              <div class="set">
                <div class="details">
                  <h5>Barra de tarefas piscando</h5>
                  <p>O aplicativo pisca no celular em sua barra de tarefas quando você recebe novas notificações.</p>
                </div>
                <label class="switch">
                  <input type="checkbox">
                  <span class="slider round"></span>
                </label>
              </div>
              <div class="set">
                <div class="details">
                  <h5>Som de notificação</h5>
                  <p>Configure o aplicativo para alertá-lo por meio de som de notificação quando houver mensagens não lidas.</p>
                </div>
                <label class="switch">
                  <input type="checkbox" checked>
                  <span class="slider round"></span>
                </label>
              </div>
              <div class="set">
                <div class="details">
                  <h5>Vibrar</h5>
                  <p>Vibrar ao receber novas mensagens (verifique se a vibração do sistema também está ativada).</p>
                </div>
                <label class="switch">
                  <input type="checkbox">
                  <span class="slider round"></span>
                </label>
              </div>
              <div class="set">
                <div class="details">
                  <h5>Ligue as luzes</h5>
                  <p>Quando alguém lhe enviar uma mensagem de texto, você receberá um alerta por meio da luz de notificação.</p>
                </div>
                <label class="switch">
                  <input type="checkbox">
                  <span class="slider round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <!-- Inicio Config Notificaçõess -->
        <!-- Inicio Conexões -->
        <div class="category">
          <a href="#" class="title collapsed" id="headingFour" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
            <i class="material-icons md-30 online">sync</i>
            <div class="data">
              <h5>Conexões</h5>
              <p>Sincronize suas contas sociais</p>
            </div>
            <i class="material-icons">keyboard_arrow_right</i>
          </a>
          <div class="collapse" id="collapseFour" aria-labelledby="headingFour" data-parent="#accordionSettings">
            <div class="content">
              <div class="app">
                <img src="../assets/img/integrations/slack.svg" alt="app">
                <div class="permissions">
                  <h5>Slack</h5>
                  <p>Ler, escrever, comentar</p>
                </div>
                <label class="switch">
                  <input type="checkbox" checked>
                  <span class="slider round"></span>
                </label>
              </div>
              <div class="app">
                <img src="../assets/img/integrations/dropbox.svg" alt="app">
                <div class="permissions">
                  <h5>Dropbox</h5>
                  <p>Ler, escrever, Upload</p>
                </div>
                <label class="switch">
                  <input type="checkbox" checked>
                  <span class="slider round"></span>
                </label>
              </div>
              <div class="app">
                <img src="../assets/img/integrations/drive.svg" alt="app">
                <div class="permissions">
                  <h5>Google Drive</h5>
                  <p>Nenhuma permissão definida</p>
                </div>
                <label class="switch">
                  <input type="checkbox">
                  <span class="slider round"></span>
                </label>
              </div>
              <div class="app">
                <img src="../assets/img/integrations/trello.svg" alt="app">
                <div class="permissions">
                  <h5>Trello</h5>
                  <p>Nenhuma permissão definida</p>
                </div>
                <label class="switch">
                  <input type="checkbox">
                  <span class="slider round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <!-- Inicio Conexões -->
        <!-- Inicio Config Aparência -->
        <div class="category">
          <a href="#" class="title collapsed" id="headingFive" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
            <i class="material-icons md-30 online">colorize</i>
            <div class="data">
              <h5>Aparência</h5>
              <p>Personalize a aparência</p>
            </div>
            <i class="material-icons">keyboard_arrow_right</i>
          </a>
          <div class="collapse" id="collapseFive" aria-labelledby="headingFive" data-parent="#accordionSettings">
            <div class="content no-layer">
              <div class="set">
                <div class="details">
                  <h5>Desligue as luzes</h5>
                  <p>O modo escuro é aplicado às áreas centrais do aplicativo que normalmente são exibidas como luz.</p>
                </div>
                <label class="switch">
                  <input type="checkbox">
                  <span class="slider round mode"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <!-- Fim Config Aparência -->
        <!-- Inicio Línguagem -->
        <div class="category">
          <a href="#" class="title collapsed" id="headingSix" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
            <i class="material-icons md-30 online">language</i>
            <div class="data">
              <h5>Línguagem</h5>
              <p>Selecione o idioma preferido</p>
            </div>
            <i class="material-icons">keyboard_arrow_right</i>
          </a>
          <div class="collapse" id="collapseSix" aria-labelledby="headingSix" data-parent="#accordionSettings">
            <div class="content layer">
              <div class="language">
                <label for="country">Idioma</label>
                <select class="custom-select" id="country" required>
                  <option value="">Selecione o idioma...</option>
                  <option>Português, BR</option>
                  <option>English, US</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <!-- Fim Línguagem -->
        <!-- Inicio Privacy & Safety -->
        <div class="category">
          <a href="#" class="title collapsed" id="headingSeven" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
            <i class="material-icons md-30 online">lock_outline</i>
            <div class="data">
              <h5>Privacy & Safety</h5>
              <p>Controle suas configurações de privacidade</p>
            </div>
            <i class="material-icons">keyboard_arrow_right</i>
          </a>
          <div class="collapse" id="collapseSeven" aria-labelledby="headingSeven" data-parent="#accordionSettings">
            <div class="content no-layer">
              <div class="set">
                <div class="details">
                  <h5>Keep Me Safe</h5>
                  <p>Verifique e exclua automaticamente mensagens diretas que você recebe de todos que contêm conteúdo explícito.</p>
                </div>
                <label class="switch">
                  <input type="checkbox">
                  <span class="slider round"></span>
                </label>
              </div>
              <div class="set">
                <div class="details">
                  <h5>Meus amigos são legais</h5>
                  <p>Se ativado, verifica as mensagens diretas de todos, a menos que estejam listados como seus amigos.</p>
                </div>
                <label class="switch">
                  <input type="checkbox" checked>
                  <span class="slider round"></span>
                </label>
              </div>
              <div class="set">
                <div class="details">
                  <h5>Todos podem me adicionar</h5>
                  <p>Se habilitado, qualquer pessoa dentro ou fora da sua lista de amigos pode enviar um pedido de amizade.</p>
                </div>
                <label class="switch">
                  <input type="checkbox" checked>
                  <span class="slider round"></span>
                </label>
              </div>
              <div class="set">
                <div class="details">
                  <h5>Amigos de amigos</h5>
                  <p>Somente seus amigos ou amigos em comum poderão enviar-lhe um pedido de amigo.</p>
                </div>
                <label class="switch">
                  <input type="checkbox" checked>
                  <span class="slider round"></span>
                </label>
              </div>
              <div class="set">
                <div class="details">
                  <h5>Dados para melhorar</h5>
                  <p>Essas configurações nos permitem usar e processar informações para fins analíticos.</p>
                </div>
                <label class="switch">
                  <input type="checkbox">
                  <span class="slider round"></span>
                </label>
              </div>
              <div class="set">
                <div class="details">
                  <h5>Dados para personalizar</h5>
                  <p>Essas configurações nos permitem usar suas informações para personalizar para você.</p>
                </div>
                <label class="switch">
                  <input type="checkbox">
                  <span class="slider round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <!-- Fim Privacy & Safety -->
        <!-- Inicio Logout -->
        <div class="category">
          <a href="sign-in.html" class="title collapsed">
            <i class="material-icons md-30 online">power_settings_new</i>
            <div class="data">
              <h5>Power Off</h5>
              <p>Saia da sua conta</p>
            </div>
            <i class="material-icons">keyboard_arrow_right</i>
          </a>
        </div>
        <!-- Fim Logout -->
      </div>
    </div>
  </div>
  <!-- End of Settings -->
</template>

<script>
export default {
  name: 'Settings',
}
</script>

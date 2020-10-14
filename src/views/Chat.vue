<template>
  	<main>
		<div class="layout">
			<!-- Inicio Navigation -->
			<div class="navigation">
				<div class="container">
					<div class="inside">
						<div class="nav nav-tab menu">
							<button class="btn"><img class="avatar-xl" src="../assets/img/avatars/avatar-male-1.jpg" alt="avatar"></button>
							<a href="#members" data-toggle="tab"><i class="material-icons">account_circle</i></a>
							<a href="#discussions" data-toggle="tab" class="active"><i class="material-icons active">chat_bubble_outline</i></a>
							<a href="#notifications" data-toggle="tab" class="f-grow1"><i class="material-icons">notifications_none</i></a>
							<button class="btn mode"><i class="material-icons">brightness_2</i></button>
							<a href="#settings" data-toggle="tab"><i class="material-icons">settings</i></a>
							<button class="btn power" onclick="visitPage();"><i class="material-icons">power_settings_new</i></button>
						</div>
					</div>
				</div>
			</div>
			<!-- Fim Navigation -->
			<!-- Inicio Sidebar -->
			<div class="sidebar" id="sidebar">
				<div class="container">
					<div class="col-md-12">
						<div class="tab-content">
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
						</div>
					</div>
				</div>
			</div>
			<!-- Fim Sidebar -->
			<!-- Inicio Add amigos -->
			<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered" role="document">
					<div class="requests">
						<div class="title">
							<h1>Adicione seus amigos</h1>
							<button type="button" class="btn" data-dismiss="modal" aria-label="Close"><i class="material-icons">close</i></button>
						</div>
						<div class="content">
							<form>
								<div class="form-group">
									<label for="user">Nome:</label>
									<input type="text" class="form-control" id="user" placeholder="Adicionar destinatário ..." required>
									<div class="user" id="contact">
										<img class="avatar-sm" src="../assets/img/avatars/avatar-female-5.jpg" alt="avatar">
										<h5>Raquel Barra</h5>
										<button class="btn"><i class="material-icons">close</i></button>
									</div>
								</div>
								<div class="form-group">
									<label for="welcome">Messagen:</label>
									<textarea class="text-control" id="welcome" placeholder="Envie sua mensagem de boas-vindas ...">
										Olá, Raquel Barra, gostaria de adicionar você como contato.
									</textarea>
								</div>
								<button type="submit" class="btn button w-100">Enviar solicitação de amizade</button>
							</form>
						</div>
					</div>
				</div>
			</div>
			<!-- Fim Add amigos  -->
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
			<div class="main">
				<div class="tab-content" id="nav-tabContent">
					<!-- Inicio Babble -->
					<div class="babble tab-pane fade active show" id="list-chat" role="tabpanel" aria-labelledby="list-chat-list">
						<!-- Inicio Chat -->
						<div class="chat" id="chat1">
							<div class="top">
								<div class="container">
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
							</div>
							<div class="content" id="content">
								<div class="container">
									<div class="col-md-12">
										<div class="date">
											<hr>
											<span>Ontem</span>
											<hr>
										</div>
										<div class="message">
											<img class="avatar-md" src="../assets/img/avatars/avatar-female-5.jpg" data-toggle="tooltip" data-placement="top" title="Keith" alt="avatar">
											<div class="text-main">
												<div class="text-group">
													<div class="text">
														<p>Já temos algumas ideias matadoras surgindo.</p>
													</div>
												</div>
												<span>09:46 AM</span>
											</div>
										</div>
										<div class="message me">
											<div class="text-main">
												<div class="text-group me">
													<div class="text me">
														<p>Mal posso esperar! Como estamos lidando com o cliente?</p>
													</div>
												</div>
												<span>11:32 AM</span>
											</div>
										</div>
										<div class="message">
											<img class="avatar-md" src="../assets/img/avatars/avatar-female-5.jpg" data-toggle="tooltip" data-placement="top" title="Keith" alt="avatar">
											<div class="text-main">
												<div class="text-group">
													<div class="text">
														<p>Estamos indo muito bem, temos um rascunho para as pedreiras do cliente concluído.</p>
													</div>
												</div>
												<span>02:56 PM</span>
											</div>
										</div>
										<div class="message me">
											<div class="text-main">
												<div class="text-group me">
													<div class="text me">
														<p>Raquel tu que e a chefe!</p>
													</div>
												</div>
												<div class="text-group me">
													<div class="text me">
														<p>Já comecei a juntar algumas coisas para os painéis de humor, estou ansioso para começar!</p>
													</div>
												</div>
												<span>10:21 PM</span>
											</div>
										</div>
										<div class="message">
											<img class="avatar-md" src="../assets/img/avatars/avatar-female-5.jpg" data-toggle="tooltip" data-placement="top" title="Keith" alt="avatar">
											<div class="text-main">
												<div class="text-group">
													<div class="text">
														<p>
															Bom começo pessoal, adicionei algumas notas à tarefa. 
															Podemos precisar fazer alguns ajustes nos últimos itens - mas nada demais!
														</p>
													</div>
												</div>
												<span>11:07 PM</span>
											</div>
										</div>
										<div class="date">
											<hr>
											<span>Hoje</span>
											<hr>
										</div>
										<div class="message me">
											<div class="text-main">
												<div class="text-group me">
													<div class="text me">
														<p>Muito bem. Vejo vocês às 2 para a reunião de lançamento.</p>
													</div>
												</div>
												<span>10:21 PM</span>
											</div>
										</div>
										<div class="message">
											<img class="avatar-md" src="../assets/img/avatars/avatar-female-5.jpg" data-toggle="tooltip" data-placement="top" title="Keith" alt="avatar">
											<div class="text-main">
												<div class="text-group">
													<div class="text">
														<div class="attachment">
															<button class="btn attach"><i class="material-icons md-18">insert_drive_file</i></button>
															<div class="file">
																<h5><a href="#">Termo de Abertura.pdf</a></h5>
																<span>24kb Documento</span>
															</div>
														</div>
													</div>
												</div>
												<span>11:07 PM</span>
											</div>
										</div>
										<div class="message me">
											<div class="text-main">
												<div class="text-group me">
													<div class="text me">
														<p>Espero que todos estejam prontos para enfrentar este grande projeto. Vamos destruir alguns conceitos e design de marca!</p>
													</div>
												</div>
												<span><i class="material-icons">check</i>10:21 PM</span>
											</div>
										</div>
										<div class="message">
											<img class="avatar-md" src="../assets/img/avatars/avatar-female-5.jpg" data-toggle="tooltip" data-placement="top" title="Keith" alt="avatar">
											<div class="text-main">
												<div class="text-group">
													<div class="text typing">
														<div class="wave">
															<span class="dot"></span>
															<span class="dot"></span>
															<span class="dot"></span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="container">
								<div class="col-md-12">
									<div class="bottom">
										<form class="position-relative w-100">
											<textarea class="form-control" placeholder="Comece a digitar para responder ..." rows="1"></textarea>
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
						</div>
						<!-- Fim Chat -->
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
					</div>
					<!-- Fim Babble -->
					<!-- Inicio Babble -->
					<div class="babble tab-pane fade" id="list-empty" role="tabpanel" aria-labelledby="list-empty-list">
						<!-- Inicio Chat -->
						<div class="chat" id="chat2">
							<div class="top">
								<div class="container">
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
							<div class="content empty">
								<div class="container">
									<div class="col-md-12">
										<div class="no-messages">
											<i class="material-icons md-48">forum</i>
											<p>Parece que as pessoas têm vergonha de iniciar o bate-papo. Quebre o gelo, envie a primeira mensagem.</p>
										</div>
									</div>
								</div>
							</div>
							<div class="container">
								<div class="col-md-12">
									<div class="bottom">
										<form class="position-relative w-100">
											<textarea class="form-control" placeholder="Start typing for reply..." rows="1"></textarea>
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
						</div>
						<!-- Fim  Chat -->
						<!-- Inicio Call -->
						<div class="call" id="call2">
							<div class="content">
								<div class="container">
									<div class="col-md-12">
										<div class="inside">
											<div class="panel">
												<div class="participant">
													<img class="avatar-xxl" src="../assets/img/avatars/avatar-female-2.jpg" alt="avatar">
													<span>Connecting</span>
												</div>							
												<div class="options">
													<button class="btn option"><i class="material-icons md-30">mic</i></button>
													<button class="btn option"><i class="material-icons md-30">videocam</i></button>
													<button class="btn option call-end"><i class="material-icons md-30">call_end</i></button>
													<button class="btn option"><i class="material-icons md-30">person_add</i></button>
													<button class="btn option"><i class="material-icons md-30">volume_up</i></button>
												</div>
												<button class="btn back" name="2"><i class="material-icons md-24">chat</i></button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!--Fim Call -->
					</div>
					<!--Fim Babble -->
					<!-- Inicio Babble -->
					<div class="babble tab-pane fade" id="list-request" role="tabpanel" aria-labelledby="list-request-list">
						<!-- Inicio Chat -->
						<div class="chat" id="chat3">
							<div class="top">
								<div class="container">
									<div class="col-md-12">
										<div class="inside">
											<a href="#"><img class="avatar-md" src="../assets/img/avatars/avatar-female-6.jpg" data-toggle="tooltip" data-placement="top" title="Louis" alt="avatar"></a>
											<div class="status">
												<i class="material-icons offline">fiber_manual_record</i>
											</div>
											<div class="data">
												<h5><a href="#">Louis Martinez</a></h5>
												<span>Inactive</span>
											</div>
											<button class="btn disabled d-md-block d-none" disabled><i class="material-icons md-30">phone_in_talk</i></button>
											<button class="btn disabled d-md-block d-none" disabled><i class="material-icons md-36">videocam</i></button>
											<button class="btn d-md-block disabled d-none" disabled><i class="material-icons md-30">info</i></button>
											<div class="dropdown">
												<button class="btn disabled" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" disabled><i class="material-icons md-30">more_vert</i></button>
												<div class="dropdown-menu dropdown-menu-right">
													<button class="dropdown-item"><i class="material-icons">phone_in_talk</i>Chamada de voz</button>
													<button class="dropdown-item"><i class="material-icons">videocam</i>Video chamada</button>
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
							<div class="content empty">
								<div class="container">
									<div class="col-md-12">
										<div class="no-messages request">
											<a href="#"><img class="avatar-xl" src="../assets/img/avatars/avatar-female-6.jpg" data-toggle="tooltip" data-placement="top" title="Louis" alt="avatar"></a>
											<h5>Ismael Alves deseja adicioná-lo como contato. <span>Olá, Raquel Barra, gostaria de adicionar você como contato.</span></h5>
											<div class="options">
												<button class="btn button"><i class="material-icons">check</i></button>
												<button class="btn button"><i class="material-icons">close</i></button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="container">
								<div class="col-md-12">
									<div class="bottom">
										<form class="position-relative w-100">
											<textarea class="form-control" placeholder="Mensagens indisponíveis" rows="1" disabled></textarea>
											<button class="btn emoticons disabled" disabled><i class="material-icons">insert_emoticon</i></button>
											<button class="btn send disabled" disabled><i class="material-icons">send</i></button>
										</form>
										<label>
											<input type="file" disabled>
											<span class="btn attach disabled d-sm-block d-none"><i class="material-icons">attach_file</i></span>
										</label> 
									</div>
								</div>
							</div>
						</div>
						<!-- End of Chat -->
					</div>
					<!-- End of Babble -->
				</div>
			</div>
		</div> <!-- Layout -->
	</main>
</template>

<script>
export default {
    name: 'Chat'
}
</script>

<style>

</style>
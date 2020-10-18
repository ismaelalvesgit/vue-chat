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
							<Contact/>
							<Conversations/>
							<Notifications/>
							<Settings/>
						</div>
					</div>
				</div>
			</div>
			<!-- Fim Sidebar -->
			<AddFriends/>
			<CreateRoom/>
			
			<div class="main">
				<div class="tab-content" id="nav-tabContent">
					<!-- Inicio Babble -->
					<div class="babble tab-pane fade active show" id="list-chat" role="tabpanel" aria-labelledby="list-chat-list">
						<!-- Inicio Chat -->
						<div class="chat" id="chat1">
							<ChatTop/>
							<ChatMenssages/>
							<ChatInput/>
						</div>
						<!-- Fim Chat -->
						<ChatCall/>
					</div>
					<!-- Fim Babble -->
					<!-- Inicio Babble -->
					<div class="babble tab-pane fade" id="list-empty" role="tabpanel" aria-labelledby="list-empty-list">
						<!-- Inicio Chat -->
						<div class="chat" id="chat2">
							<ChatTop :type="2"/>
							<ChatMenssages :type="2"/>
							<ChatInput :type="2"/>
						</div>
						<!-- Fim  Chat -->
						<ChatCall/>
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
import Contact from '../components/Contact'
import Conversations from '../components/Conversations'
import Notifications from '../components/Notifications'
import Settings from '../components/Settings'
import AddFriends from '../components/AddFriends'
import CreateRoom from '../components/CreateRoom'
import ChatInput from '../components/ChatInput'
import ChatTop from '../components/ChatTop'
import ChatMenssages from '../components/ChatMenssages'
import ChatCall from '../components/ChatCall'

export default {
	name: 'Chat',
	components: {
		Contact,
		Conversations,
		Notifications,
		Settings,
		AddFriends,
		CreateRoom,
		ChatInput,
		ChatTop,
		ChatMenssages,
		ChatCall
	}
}
</script>

<style>

</style>
<script setup lang="ts">
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useHead } from "@vueuse/head";
import * as usercore from "/@src/services/usercore";
import { useDarkmode } from "/@src/stores/darkmode";
import { useUserSession } from "/@src/stores/userSession";
import { useNotyf } from "/@src/composable/useNotyf";
import sleep from "/@src/utils/sleep";
import { watch } from "vue";
const hasResetPassword = ref(false);
type StepId = "login" | "forgot-password";
const step = ref<StepId>("login");
const isLoading = ref(false);
const darkmode = useDarkmode();
const router = useRouter();
const route = useRoute();
const notif = useNotyf();
import { useStorage } from "@vueuse/core";
const userSession = useUserSession();
const redirect = route.query.redirect as string;
import { useI18n } from "vue-i18n";
import { Message } from "yup/lib/types";
import { email } from "@vuelidate/validators";
const { locale, t } = useI18n();
const defaultLocale = useStorage("locale", navigator?.language || "es-MX");

const form = ref({
	name: "",
	last_name: "",
	dob: "",
	email: "",
	password: "",
	phone: "",
});

const result = ref("");

const handleLogin = async () => {
	try {
		isLoading.value = true;

		if (
			form.value.email &&
			form.value.password &&
			form.value.name &&
			form.value.dob &&
			form.value.last_name &&
			form.value.phone
		) {
			const response = await usercore.login({
				email: form.value.email,
				password: form.value.password,
				name: form.value.name,
				dob: form.value.dob,
				last_name: form.value.last_name,
				phone: form.value.phone,
			});
			result.value = response.data.dataInfo;
		} else {
			notif.error("Por favor complete todos los campos");
		}

		isLoading.value = false;
	} catch (e: any) {
		console.error(e);
		isLoading.value = false;
	}
};

useHead({
	title: "Erika Contreras & Anny Moreno",
});

watch(locale, () => {
	defaultLocale.value = locale.value;
});
</script>

<template>
	<div class="modern-login">
		<div class="underlay h-hidden-mobile h-hidden-tablet-p"></div>

		<div class="columns is-gapless is-vcentered is-relative">
			<div style="position: relative">
				<div class="hero-heading">
					<label
						class="dark-mode ml-auto"
						tabindex="0"
						@keydown.space.prevent="(e) => (e.target as HTMLLabelElement).click()"
					>
						<input type="checkbox" :checked="!darkmode.isDark" @change="darkmode.onChange" />
						<span></span>
					</label>
					<div class="auth-logo">
						<RouterLink :to="{ name: 'index' }">
							<AnimatedLogo width="36px" height="36px" />
						</RouterLink>
					</div>
				</div>
			</div>
			<div class="column is-relative is-6">
				<div class="hero is-fullheight is-image">
					<div class="hero-body" style="background-color: #c4a549; justify-content: center">
						<div class="container">
							<div class="columns h-hidden-desktop" style="justify-content: center">
								<img
									class="hero-image"
									src="/@src/assets/illustrations/login/Logo-IBERO-nuevo.pndg"
									alt=""
								/>
							</div>
							<div class="column is-7" style="margin-left: 15%">
								<div class="auth-content" style="text-align: center">
									<h2 style="color: #ffff; font-size: 25px">Regristro de Nuevos Estudiantes</h2>
									<h1 style="color: #ffff; font-size: 15px">
										Erika Julieth Contreras & Anny Gabriela Moreno
									</h1>
								</div>
								<br />
								<br />
								<br />
								<div class="auth-form-wrapper">
									<!-- Login Form -->
									<form @submit.prevent="handleLogin">
										<div class="login-form">
											<!-- Username -->
											<VField>
												<VControl icon="feather:user">
													<input
														v-model="form.name"
														class="input"
														type="text"
														placeholder="Nombres"
														autocomplete="username"
													/>
												</VControl>
											</VField>
											<VField>
												<VControl icon="feather:user">
													<input
														v-model="form.last_name"
														class="input"
														type="text"
														placeholder="Apellidos"
														autocomplete="username"
													/>
												</VControl>
											</VField>
											<VField>
												<VControl icon="feather:user">
													<input
														v-model="form.dob"
														class="input"
														type="date"
														placeholder="Fecha de Nacimiento"
														autocomplete="username"
													/>
												</VControl>
											</VField>
											<VField>
												<VControl icon="feather:user">
													<input
														v-model="form.phone"
														class="input"
														type="number"
														placeholder="Telefono"
														autocomplete="username"
													/>
												</VControl>
											</VField>
											<VField>
												<VControl icon="feather:user">
													<input
														v-model="form.email"
														class="input"
														type="text"
														placeholder="Usuario"
														autocomplete="username"
													/>
												</VControl>
											</VField>

											<!-- Password -->
											<VField>
												<VControl icon="feather:lock">
													<input
														v-model="form.password"
														class="input"
														type="password"
														placeholder="Contraseña"
														autocomplete="current-password"
													/>
												</VControl>
											</VField>

											<!-- Submit -->
											<VControl class="login">
												<VButton
													:loading="isLoading"
													color="white"
													type="submit"
													bold
													fullwidth
													raised
												>
													<span style="color: #0c7083"> Registrar </span>
												</VButton>
											</VControl>
										</div>
										<br />
										<VMessage color="success" v-if="result"
											>Los datos ingresados son: {{ result }}</VMessage
										>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="column is-6 is-relative h-hidden-mobile h-hidden-tablet-p">
				<div class="container">
					<div class="columns" style="justify-content: center">
						<img
							style="width: 50%"
							class="hero-image"
							src="/@src/assets/illustrations/login/Logo-IBERO-nuevo.png"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import "../../scss/abstracts/mixins";

.modern-login {
	position: relative;
	background: var(--white);
	min-height: 100vh;

	.column {
		&.is-relative {
			position: relative;
		}
	}

	.hero {
		&.has-background-image {
			position: relative;

			.hero-overlay {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background: #5d4298 !important;
				opacity: 0.6;
			}
		}
	}

	.underlay {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 66.6%;
		height: 100%;
		background: #fdfdfd;
		z-index: 0;
	}

	.dark-mode {
		position: absolute;
		top: -64px;
		right: 38px;
		transform: scale(0.6);
		z-index: 2;
	}

	.top-logo {
		position: absolute;
		top: -70px;
		left: 0;
		right: 0;
		margin: 0 auto;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1;

		img {
			display: block;
			width: 100%;
			max-width: 50px;
			margin: 0 auto;
		}

		svg {
			height: 50px;
			width: 50px;
		}
	}

	.is-image {
		position: relative;
		border-right: 1px solid var(--fade-grey);

		.hero-image {
			position: relative;
			z-index: 2;
			display: block;
			margin: -80px auto 0;
			max-width: 60%;
			width: 60%;
		}
	}

	.is-form {
		position: relative;
		max-width: 420px;
		margin: 0 auto;

		form {
			animation: fadeInLeft 0.5s;
		}

		.form-text {
			padding: 0 20px;
			animation: fadeInLeft 0.5s;

			h2 {
				font-family: var(--font-alt);
				font-weight: 400;
				font-size: 2rem;
				color: var(--primary);
			}

			p {
				color: var(--muted-grey);
				margin-top: 10px;
			}
		}

		.recover-text {
			font-size: 0.9rem;
			color: var(--dark-text);
		}

		.login-wrapper {
			padding: 30px 20px;

			.control {
				position: relative;
				width: 100%;
				margin-top: 16px;

				.input {
					padding-top: 14px;
					height: 60px;
					border-radius: 10px;
					padding-left: 55px;
					transition: all 0.3s; // transition-all test

					&:focus {
						background: var(--fade-grey-light-6);
						border-color: var(--placeholder);

						~ .auth-label,
						~ .autv-icon i {
							color: var(--muted-grey);
						}
					}
				}

				.error-text {
					color: var(--danger);
					font-size: 0.8rem;
					display: none;
					padding: 2px 6px;
				}

				.auth-label {
					position: absolute;
					top: 6px;
					left: 55px;
					font-size: 0.8rem;
					color: var(--dark-text);
					font-weight: 500;
					z-index: 2;
					transition: all 0.3s; // transition-all test
				}

				.autv-icon {
					position: absolute;
					top: 0;
					left: 0;
					height: 60px;
					width: 60px;
					display: flex;
					justify-content: center;
					align-items: center;

					i {
						font-size: 24px;
						color: var(--placeholder);
						transition: all 0.3s; // transition-all test
					}
				}

				&.has-validation {
					.validation-icon {
						position: absolute;
						top: 0;
						right: 0;
						height: 60px;
						width: 60px;
						display: none;
						justify-content: center;
						align-items: center;

						.icon-wrapper {
							height: 20px;
							width: 20px;
							display: flex;
							justify-content: center;
							align-items: center;
							border-radius: var(--radius-rounded);

							svg {
								height: 10px;
								width: 10px;
								stroke-width: 3px;
								color: var(--white);
							}
						}

						&.is-success {
							.icon-wrapper {
								background: var(--success);
							}
						}

						&.is-error {
							.icon-wrapper {
								background: var(--danger);
							}
						}
					}

					&.has-success {
						.validation-icon {
							&.is-success {
								display: flex;
							}

							&.is-error {
								display: none;
							}
						}
					}

					&.has-error {
						.input {
							border-color: var(--danger);
						}

						.error-text {
							display: block;
						}

						.validation-icon {
							&.is-error {
								display: flex;
							}

							&.is-success {
								display: none;
							}
						}
					}
				}

				&.is-flex {
					display: flex;
					align-items: center;

					a {
						display: block;
						margin-left: auto;
						color: var(--muted-grey);
						font-weight: 500;
						font-size: 0.9rem;
						transition: color 0.3s;

						&:hover,
						&:focus {
							color: var(--primary);
						}
					}

					.remember-me {
						font-size: 0.9rem;
						color: var(--muted-grey);
						font-weight: 500;
					}
				}
			}

			.button-wrap {
				margin: 40px 0;

				&.has-help {
					display: flex;
					align-items: center;

					> span {
						margin-left: 12px;
						font-family: var(--font);

						a {
							color: var(--primary);
							font-weight: 500;
							padding: 0 2px;
						}
					}
				}

				.button {
					height: 46px;
					width: 140px;
					margin-left: 6px;

					&:first-child {
						&:hover {
							opacity: 0.8;
						}
					}
				}
			}
		}
	}
}

.remember-toggle {
	width: 65px;
	display: block;
	position: relative;
	cursor: pointer;
	font-size: 22px;
	user-select: none;
	transform: scale(0.9);

	input {
		position: absolute;
		opacity: 0;
		cursor: pointer;

		&:checked ~ .toggler {
			border-color: var(--primary);

			.active,
			.inactive {
				transform: translateX(100%) rotate(360deg);
			}

			.active {
				opacity: 1;
			}

			.inactive {
				opacity: 0;
			}
		}
	}

	.toggler {
		position: relative;
		display: block;
		height: 34px;
		width: 61px;
		border: 2px solid var(--placeholder);
		border-radius: 100px;
		transition: all 0.3s; // transition-all test

		.active,
		.inactive {
			position: absolute;
			top: 2px;
			left: 2px;
			height: 26px;
			width: 26px;
			border-radius: var(--radius-rounded);
			background: black;
			display: flex;
			justify-content: center;
			align-items: center;
			transform: translateX(0) rotate(0);
			transition: all 0.3s ease;

			svg {
				color: var(--white);
				height: 14px;
				width: 14px;
				stroke-width: 3px;
			}
		}

		.inactive {
			background: var(--placeholder);
			border-color: var(--placeholder);
			opacity: 1;
			z-index: 1;
		}

		.active {
			background: var(--primary);
			border-color: var(--primary);
			opacity: 0;
			z-index: 0;
		}
	}
}

@media only screen and (max-width: 767px) {
	.modern-login {
		.top-logo {
			top: 30px;
		}

		.dark-mode {
			top: 36px;
			right: 44px;
		}

		.is-form {
			padding-top: 100px;
		}
	}
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
	.modern-login {
		.top-logo {
			svg {
				height: 60px;
				width: 60px;
			}
		}

		.dark-mode {
			top: -58px;
			right: 30%;
		}

		.columns {
			display: flex;
			height: 100vh;
		}
	}
}

/* ==========================================================================
Dark mode
========================================================================== */

.is-dark {
	.modern-login {
		background: var(--dark-sidebar);

		.underlay {
			background: var(--dark-sidebar-light-10);
		}

		.is-image {
			border-color: var(--dark-sidebar-light-10);
		}

		.is-form {
			.form-text {
				h2 {
					color: var(--primary);
				}
			}

			.login-wrapper {
				.control {
					&.is-flex {
						a:hover {
							color: var(--primary);
						}
					}

					.input {
						background: var(--dark-sidebar-light-4);

						&:focus {
							border-color: var(--primary);

							~ .autv-icon {
								i {
									color: var(--primary);
								}
							}
						}
					}

					.auth-label {
						color: var(--light-text);
					}
				}

				.button-wrap {
					&.has-help {
						span {
							color: var(--light-text);

							a {
								color: var(--primary);
							}
						}
					}
				}
			}
		}
	}

	.remember-toggle {
		input {
			&:checked + .toggler {
				border-color: var(--primary);

				> span {
					background: var(--primary);
				}
			}
		}

		.toggler {
			border-color: var(--dark-sidebar-light-12);

			> span {
				background: var(--dark-sidebar-light-12);
			}
		}
	}
}
</style>

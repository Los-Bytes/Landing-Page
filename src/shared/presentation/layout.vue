<script setup>
import LanguageSwitcher from "./language-switcher.vue";
import FooterContent from './footer-content.vue'
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import { reactive } from 'vue'
const form = reactive({
  nombre: '',
  email: '',
  organizacion: '',
  mensaje: ''
})

function submitForm() {
  console.log('Formulario enviado:', form)
  alert('Gracias por tu mensaje, nos pondremos en contacto pronto.')
  form.nombre = ''
  form.email = ''
  form.organizacion = ''
  form.mensaje = ''
}
</script>

<template>
  <div class="app">
    <!-- Header -->
    <header class="navbar">
      <div class="logo">
        <a href="/" class="logo-link">
          <img src="@/assets/logo-icon.png" alt="Logo Icono" class="logo-icon" />
          <img src="@/assets/logo-text.png" alt="Logo Texto" class="logo-text" />
        </a>
      </div>
      <!-- Menú de navegación web -->
      <nav class="menu">
        <a href="#funciona">{{ t('header.how-it-works') }}</a>
        <a href="#caracteristicas">{{ t('header.features') }}</a>
        <a href="#beneficios">{{ t('header.benefits') }}</a>
        <a href="#faq">{{ t('header.faq') }}</a>
        <a href="#contacto">{{ t('header.contact') }}</a>
      </nav>
      <!-- Botón de llamada a la acción -->
      <a href="#call-to-action" class="cta">{{ t('header.start-free') }}</a>
      <!-- Selector de idioma -->
      <a><language-switcher/></a>
    </header>
    <!-- Hero -->
    <section id="hero" class="section">
      <section class="hero">
        <h1>LabIoT</h1>
        <h2>{{ t('hero.title') }}</h2>
        <p>{{ t('hero.subtitle') }}</p>
        <div class="buttons">
          <a href="#contacto" class="btn btn-primary">{{ t('hero.demo') }}</a>
          <a href="#funciona" class="btn btn-outline">{{ t('hero.check-out') }}</a>
        </div>
      </section>
    </section>
    <!-- Problema -->
    <section id="problema" class="section">
      <section class="container">
        <h2>{{ t('problem.why') }}</h2>
        <p>{{ t('problem.why-description') }}</p>
      </section>
    </section>
    <!-- Cómo funciona -->
    <section id="funciona" class="section">
      <section class="section bg-light">
        <h2>{{ t('features.title') }}</h2>
        <div class="grid">
          <div class="card">
            <h3>{{ t('features.step1-title') }}</h3>
            <p>{{ t('features.step1-description') }}</p>
          </div>
          <div class="card">
            <h3>{{ t('features.step2-title') }}</h3>
            <p>{{ t('features.step2-description') }}</p>
          </div>
          <div class="card">
            <h3>{{ t('features.step3-title') }}</h3>
            <p>{{ t('features.step3-description') }}</p>
          </div>
        </div>
      </section>
    </section>
    <!-- Características -->
    <section id="caracteristicas" class="section">
      <section class="container">
        <h2>{{ t('characteristics.title') }}</h2>
        <div class="grid">
          <div class="card"><h3>{{ t('characteristics.feature1-title') }}</h3><p>{{ t('characteristics.feature1-description') }}</p></div>
          <div class="card"><h3>{{ t('characteristics.feature2-title') }}</h3><p>{{ t('characteristics.feature2-description') }}</p></div>
          <div class="card"><h3>{{ t('characteristics.feature3-title') }}</h3><p>{{ t('characteristics.feature3-description') }}</p></div>
          <div class="card"><h3>{{ t('characteristics.feature4-title') }}</h3><p>{{ t('characteristics.feature4-description') }}</p></div>
          <div class="card"><h3>{{ t('characteristics.feature5-title') }}</h3><p>{{ t('characteristics.feature5-description') }}</p></div>
          <div class="card"><h3>{{ t('characteristics.feature6-title') }}</h3><p>{{ t('characteristics.feature6-description') }}</p></div>
        </div>
      </section>
    </section>
    <!-- Beneficios -->
    <section id="beneficios" class="section">
      <section class="section bg-light">
        <h2>{{ t('benefits.title') }}</h2>
        <ul class="list">
          <li>✔️ {{ t('benefits.benefit1') }}</li>
          <li>✔️ {{ t('benefits.benefit2') }}</li>
          <li>✔️ {{ t('benefits.benefit3') }}</li>
        </ul>
        <div class="problem-tags">
          <span><span class="material-symbols-outlined">bolt</span> {{ t('benefits.fast') }}</span>
          <span><span class="material-symbols-outlined">devices</span> {{ t('benefits.multiplatform') }}</span>
          <span><span class="material-symbols-outlined">security</span> {{ t('benefits.secure') }}</span>
        </div>
      </section>
    </section>
    <!-- FAQ -->
    <section id="faq" class="section">
      <section class="container">
        <h2>{{ t('faq.title') }}</h2>
        <div class="faq">
          <div><h3>{{ t('faq.question1') }}</h3><p>{{ t('faq.answer1') }}</p></div>
          <div><h3>{{ t('faq.question2') }}</h3><p>{{ t('faq.answer2') }}</p></div>
          <div><h3>{{ t('faq.question3') }}</h3><p>{{ t('faq.answer3') }}</p></div>
        </div>
      </section>
    </section>
    <!-- Contacto -->
    <section id="contacto" class="section">
      <section class="section bg-light">
        <h2>{{ t('contact.title') }}</h2>
        <form class="form" @submit.prevent="submitForm">
          <input v-model="form.nombre" type="text" :placeholder="t('contact.name')">
          <input v-model="form.email" type="email" :placeholder="t('contact.email')">
          <input v-model="form.organizacion" type="text" :placeholder="t('contact.organization')">
          <textarea v-model="form.mensaje" :placeholder="t('contact.message')"></textarea>
          <button type="submit" class="btn btn-outline">{{ t('contact.send') }}</button>
        </form>
      </section>
    </section>
    <!-- Footer -->
    <footer-content />
  </div>
</template>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
}
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}
/* Header */
.navbar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15rem;
  background: white;
  border-bottom: 1px solid #dbeafe;
  padding: 1.2rem 2rem;  
  position: sticky;
  top: 0;
  z-index: 50;
}
/* Logo */
.logo {
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 0.8rem;
}
.logo-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}
.logo-icon {
  width: 32px;
  height: auto;
}

.logo-text {
  height: 28px;
  width: auto;
}

.menu {
  display: flex;
  gap: 2rem;
}

.menu a {
  text-decoration: none;
  color: #004AAD;
  font-weight: 500;
  transition: color 0.3s;
}

.menu a:hover {
  color: #38bdf8;
}

/* Botón CTA */
.cta {
  background: #004AAD;
  color: #f1f1f1;
  font-weight: bold;
  text-decoration: none;
  padding: 0.5rem 1.25rem;
  border-radius: 0.5rem;
  transition: background 0.3s;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}

.cta:hover {
  background: #1d4ed8;
}

/* --- Responsivo --- */
@media (max-width: 768px) {
  .menu {
    display: none;
    flex-direction: column;
    gap: 12px;
    position: absolute;
    top: 60px;
    right: 20px;
    background: white;
    border: 1px solid #ddd;
    padding: 16px;
    border-radius: 8px;
  }

  .menu.open {
    display: flex;
  }

  .menu-toggle {
    display: block;
  }
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  color: #333;
}

.hero {
  max-width: 600px;
  margin: 0 auto;
  background: linear-gradient(to right, #004AAD, #00B894);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
}

h2 {
  color: #333333;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.hero h2 {
  color: #f1f1f1;
}
.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.card h3 {
  color: #333333;
}
.card p {
  color: #333333;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
}

.btn-primary {
  background-color: #004AAD;
  color: white;
  border: none;
}

.btn-primary:hover {
  background-color: #004AAD;
}

.btn-outline {
  background: linear-gradient(135deg, #004AAD, #00B894);
  border: 2px solid white;
  color: white;
}

.section {
  padding: 3rem 2rem;
  text-align: center;
  scroll-margin-top: 87px;
}

.section.bg-light {
  background: none;
  color: inherit;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}
.problem-tags {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1.5rem;
}

.problem-tags span {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #004AAD;
  font-weight: 600;
  font-size: 1rem;
}
.material-symbols-outlined {
  font-size: 20px;
}

.bg-light {
  max-width: 800px;
  margin: 0 auto;
  background-color: #f1f1f1;
}

.grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 2rem;
}

.card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.list {
  list-style: none;
  padding: 0;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.faq div {
  margin-bottom: 1.5rem;
  text-align: center;
}

.form {
  display: grid;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;
}

.form input,
.form textarea {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

#hero {
  background: url("@/assets/lp-bg.jpg") no-repeat center center/cover;
  color: white;
}

#problema {
  background-color: #f9fafb;
}

#funciona {
  background: linear-gradient(135deg, #004AAD, #00B894);
  color: white;
}

#caracteristicas {
  background-color: #ffffff;
}

#beneficios {
  background-color: #F1F1F1;
}

#faq {
  background-color: #ffffff;
}

#contacto {
  background: linear-gradient(135deg, #004AAD, #00B894);
  color: white;
}
#contacto .form input,
#contacto .form textarea {
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #F1F1F1;
  color: #333333;
  font-size: 16px;
  box-sizing: border-box;
}
</style>
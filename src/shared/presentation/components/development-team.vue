<script setup >
import {useI18n} from "vue-i18n";
const {t}=useI18n();
</script>

<template>
  <div class="team-section">
    <h2 class="section-title">{{t('developments.title')}}</h2>
    <div class="team-cards">
      <div class="card">
        <img src="@/assets/developmets/Alicia.jpeg" alt="Alicia foto de perfil" class="member-photo" />
        <div class="member-info">
          <h3>Alicia Avril Navarro Chang</h3>
          <p>{{t('developments.description-alicia')}}</p>
          <div class="social-links">
            <a href="https://twitter.com/jose" target="_blank">Twitter</a>
            <a href="https://linkedin.com/in/jose" target="_blank">LinkedIn</a>
          </div>
        </div>
      </div>

      <div class="card">
        <img src="@/assets/developmets/Alex.jpg" alt="Alex foto de perfil" class="member-photo" />

        <div class="member-info">
          <h3>Alexander Auden Aliaga Ocampo</h3>
          <p>{{t('developments.description-alex')}}</p>
          <div class="social-links">
            <a href="https://twitter.com/carlos" target="_blank">Twitter</a>
            <a href="https://linkedin.com/in/carlos" target="_blank">LinkedIn</a>
          </div>
        </div>
      </div>

      <div class="card">
        <img src="@/assets/developmets/Cristhian.jpg" alt="Cristhian´s profile photo" class="member-photo" />

        <div class="member-info">
          <h3>Cristhian Joel Huanca Zevallos</h3>
          <p>{{t('developments.description-cristhian')}}</p>
          <div class="social-links">
            <a href="https://twitter.com/cristian" target="_blank">Twitter</a>
            <a href="https://linkedin.com/in/cristian" target="_blank">LinkedIn</a>
          </div>
        </div>
      </div>

      <div class="card">
        <img src="@/assets/developmets/Marcelo.jpg" alt="Cristhian´s profile photo" class="member-photo" />

        <div class="member-info">
          <h3>Marcelo Alessandro Mazuelos Callirgos</h3>
          <p>{{t('developments.description-marcelo')}}</p>
          <div class="social-links">
            <a href="https://twitter.com/otro" target="_blank">Twitter</a>
            <a href="https://linkedin.com/in/otro" target="_blank">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
body, html {
  margin: 0;
  padding: 0;
}

.team-section {
  margin-top: 0;
  text-align: center;
  background: linear-gradient(135deg, #004aad, #00b894);
  color: white;
  padding: 3rem 2rem;
  border-radius: 0px;
  margin-bottom: 0;
  width: 100%;
  box-sizing: border-box;
}

.section-title {
  font-size: 2.5em;
  font-weight: bold;
  color: white;
  margin-bottom: 30px;
}

.team-cards {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  width: 220px;
  background-color: #ffffff;
  border-radius: 0px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 20px;
  transition: background-color 0.3s, transform 0.3s;
}

.card:hover {
  background-color: #f1f1f1;
  transform: translateY(-5px);
}

.member-photo {
  width: 100%;
  border-radius: 0px;
  height: 150px;
  object-fit: cover;
}

.member-info h3 {
  font-size: 1.2em;
  margin-top: 10px;
  color: #004aad;
}

.member-info p {
  color: #333333;
  margin-bottom: 10px;
}

.social-links a {
  text-decoration: none;
  color: #004aad;
  margin: 5px;
  font-weight: bold;
  transition: color 0.3s;
}

.social-links a:hover {
  color: #38bdf8;
}
</style>

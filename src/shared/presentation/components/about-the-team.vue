<script setup>

import {useI18n} from "vue-i18n";
const {t}=useI18n();

const videoUrl = 'https://www.youtube.com/embed'; // Modificar a embed
</script>

<template>
  <div class="about-team-section">
    <h2 class="section-title">{{t('team.title')}}</h2>
    <div class="video-container">
      <iframe
          width="560"
          height="315"
          :src="videoUrl"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<style scoped>

.about-team-section {
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

.video-container iframe {
  width: 100%;
  max-width: 800px;
  height: 450px;
  border-radius: 8px;
}
</style>

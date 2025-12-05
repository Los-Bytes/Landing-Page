<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <footer class="footer">
      <div class="footer-container">
        <div class="footer-brand">
          <h2>LabIoT</h2>
          <p>{{ t('footer.description') }}</p>
        </div>
        <div class="footer-links">
          <a href="#"><span class="material-symbols-outlined">language</span> {{ t('footer.web') }}</a>
          <a href="mailto:info@labiot.com"><span class="material-symbols-outlined">mail</span> {{ t('footer.email') }}</a>
          <a href="#"><span class="material-symbols-outlined">share</span> {{ t('footer.share') }}</a>
        </div>
      </div>
      <div class="footer-copy">
        © 2025 LabIoT - {{ t('footer.rights') }}
      </div>
    </footer>
</template>

<style scoped>
.footer {
  background-color: #222;
  color: #aaa;
  padding: 1rem;
  text-align: center;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  text-align: center;
}

@media (min-width: 768px) {
  .footer-container {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
}
.footer-brand h2 {
  color: #00B894;
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 8px;
}

.footer-brand p {
  color: #00B894; /* Celeste suave */
  max-width: 400px;
}

.footer-links {
  display: flex;
  gap: 24px;
}

.footer-links a {
  color: #00B894;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: white;
}

.footer-copy {
  text-align: center;
  color: #00B894;
  font-size: 0.85rem;
  margin-top: 20px;
}
</style>

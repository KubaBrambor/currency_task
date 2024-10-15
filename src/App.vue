<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <header class="header">
      <div class="navWrapper">
        <nav>
          <RouterLink to="/" class="link">Currency exchange</RouterLink>
        </nav>
      </div>
    </header>
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.header {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
}

.navWrapper nav {
  display: flex;
  justify-content: center;
}

.link {
  font-weight: bold;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-grow: 1;
}
</style>

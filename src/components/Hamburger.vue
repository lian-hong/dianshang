<template>
  <div class="hamburger">
    <svg-icon icon="hamburger-opened" class=""></svg-icon>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.hamburger {
  width: 50px;
  height: 50px;
  text-align: center;
  cursor: pointer;
  transition: 0.2s;
}
.hamburger:hover {
  background-color: rgba(0, 0, 0, 0.121);
}
</style>

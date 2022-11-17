<script setup lang="ts">
import { ref } from 'vue';
import vInput from './components/v-input.vue'

let value = ref('')
</script>

<template>
  <div>
    <div style="width: 100%; display: flex; align-items: center; justify-content: center; margin-top: 30px;">
      <v-input :value='value' placeholder="Ism familya" type="text"/>
    </div>
  </div>
</template>

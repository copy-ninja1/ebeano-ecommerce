<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>Bluop App</q-toolbar-title>

        <div>Bluop v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-page-container class>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style>
</style>
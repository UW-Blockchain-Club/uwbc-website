<template>
  <div id="app">
    <router-view name="header"/>
    <main>
      <router-view/>
    </main>
    <router-view name="footer"/>
  </div>
</template>
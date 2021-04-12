<template>
  <router-view v-slot="{ Component }">
    <transition appear name="fade">
      <component :is="Component" :key="$route.path" />
    </transition>
  </router-view>
</template>

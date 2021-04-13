<template>
  <router-view v-slot="{ Component }">
    <transition appear name="fade">
      <keep-alive>
        <component :is="Component" :key="$route.path" />
      </keep-alive>
    </transition>
  </router-view>
</template>

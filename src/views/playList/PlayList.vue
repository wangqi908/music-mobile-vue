<template>
  <section class="head" v-if="!loading">
    <div
      class="bg-img"
      :style="{
        'background-image': `url(${coverImg}?imageView=1&type=webp&thumbnail=252x0)`
      }"
    ></div>
    <div class="content">
      <div class="left">
        <img :src="coverImg" alt="" srcset="" class="cover-img" />
      </div>
      <div class="right">
        <div class="name ellipsis-text-line-2">{{ name }}</div>
        <div class="avatar">
          <img :src="avatarImg" alt="" class="avatar-img" />
          <div class="avatar-name ellipsis-text">{{ nickname }}</div>
        </div>
      </div>
    </div>
  </section>
  <Loading v-else />
  <SongList :id="id" @getInfo="getInfo" />
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import SongList from '@/components/SongList/SongList.vue'
import { SongListInfo } from '@/interface/song'

export default defineComponent({
  components: { SongList },
  setup () {
    const state = reactive({
      loading: false,
      name: '',
      nickname: '',
      coverImg: '',
      avatarImg: ''
    })

    const route = useRoute()
    const { id } = route.params

    state.loading = true
    function getInfo (info: SongListInfo) {
      const { creator, coverImgUrl, name } = info
      state.loading = false
      state.name = name
      state.coverImg = coverImgUrl
      state.nickname = creator.nickname
      state.avatarImg = creator.avatarUrl
    }

    return {
      id,
      getInfo,
      ...toRefs(state)
    }
  }
})
</script>

<style scoped lang="less">
.head {
  overflow: hidden;
  position: relative;
  .bg-img {
    width: 100%;
    height: 180px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    -webkit-filter: blur(20px);
    filter: blur(20px);
    transform: scale(1.5);
  }
  .content {
    position: absolute;
    top: 0;
    width: 100%;
    height: 180px;
    z-index: 10;
    display: flex;
    padding: 30px;
    .left {
      width: 110px;
      height: 110px;
      margin-right: 20px;
      .cover-img {
        width: 100%;
        height: 100%;
      }
    }
    .right {
      height: 110px;
      flex: 1;
      display: flex;
      flex-direction: column;
      .name {
        font-size: 17px;
        line-height: 1.3;
        color: #fefefe;
      }
      .avatar {
        flex: 1;
        display: flex;
        align-items: center;
      }
      .avatar-img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        vertical-align: middle;
        margin-right: 5px;
      }
      .avatar-name {
        color: hsla(0, 0%, 100%, 0.7);
      }
    }
  }
}
</style>

<!--
 * @Author: ruixin
 * @Date: 2021-06-08 09:23:33
 * @LastEditors: ruixin
 * @LastEditTime: 2021-07-26 09:29:48
 * @Description: 
-->
<template>
  <scroll-view scroll-y class="container">
    <view class="content">
      <uni-badge size="small" absolute="rightTop" :text="100" type="primary">
        <view class="title">{{ title }}</view>
      </uni-badge>
      <uni-list class="list-box">
        <uni-list-item
          v-for="item in list"
          :key="item.id"
          :show-extra-icon="true"
          link
          :extra-icon="item.icon"
          @click="onClick($event, 1)"
          :title="item.name"
        />
      </uni-list>
    </view>
  </scroll-view>
</template>

<script>
import globalService from '@/api/global';
export default {
  data() {
    return {
      title: 'Hello',
      list: []
    };
  },
  onLoad() {
    this.getData();
  },
  methods: {
    getData() {
      globalService.getData().then(res => {
        this.title = res.title;
        this.list = res.list;
      });
    },

    onClick(e) {
      console.log(e);
    }
  }
};
</script>

<style lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  box-sizing: border-box;

  .content {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 60rpx;

    .title {
      font-size: 36rpx;
      color: #222;
      display: inline-block;
      position: relative;
    }

    .list-box {
      width: 100vw;
      margin-top: 50rpx;
    }
  }
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}
</style>

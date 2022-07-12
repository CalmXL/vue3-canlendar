<template>
  <li class="card-item">
    <div class="card">
      <div class="img-wrap">
        <img :src="require(`@/assets/images/${item.name}.jpg`)" :alt="item.name">
        <div class="mask">
          <h1>{{ item.name }}</h1>
          <h2>{{ item.festival }}</h2>
        </div>
      </div>
      <div class="content-wrap">
        <h1>假期描述: {{ item.desc || '无说明' }}</h1>
        <h2>拼假建议: {{ item.rest || '无说明' }}</h2>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'CardItem',
  props: {
    item: Object
  }
}
</script>

<style lang="scss" scoped>
  .card-item {
    padding: .1rem .15rem;
    box-sizing: border-box;

    .card {
      border: solid 1px #ddd;
      border-radius: .15rem;
      background-color: #fff;
      box-shadow: .01rem .03rem .05rem #999;
      overflow: hidden;

      .img-wrap {
        position: relative;
        height: 2.15rem;

        .mask {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgab(0, 0, 0, .4);
        }
      }

      .content-wrap {
        h1 {
          font-size: .16rem;
          line-height: .2rem;
        }

        h2 {
          font-size: .14rem;
          line-height: .2rem;
          margin-top: .1rem;
        }
      }
    }
  }
</style>
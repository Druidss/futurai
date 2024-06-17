<!-- 操作按钮组件，包含“向下移动”和“向右移动”的按钮。
提供“向下移动”和“向右移动”的按钮。
控制玩家的移动方向，并触发相应卡牌的事件。 -->

<template>
  <div>
    <button @click="moveDown"> moving down</button>
    <button @click="moveRight">moving right</button>
  </div>
</template>

<script>
export default {
    data() {
    return {
      selectedDirection: '', // Track the currently selected direction
    };
  },
  methods: {
    moveDown() {
      // Add your logic for moving down here
    },
    moveRight() {
      // Add your logic for moving right here
    }
  }
}
</script>
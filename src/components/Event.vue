<!-- 事件组件，展示当前事件的详细信息和选项，处理玩家的选择和对 Rate Me System 的影响
显示当前事件的详细信息。
提供事件选项（单选题或多选题）。
根据玩家的选择更新 Rate Me System 的分数。 -->


<template>
  <div>
    <h2>{{ event.title }}</h2>
    <p>{{ event.description }}</p>

    <h3>Options:</h3>
    <ul>
      <li v-for="option in event.options" :key="option.id">
        <button @click="selectOption(option)">{{ option.text }}</button>
      </li>
    </ul>
  </div>
</template>
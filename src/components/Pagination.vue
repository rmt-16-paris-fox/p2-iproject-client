<template>
  <div>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="itemList"
      align="center"
    ></b-pagination>
    <ul id="itemList">
      <li v-for="item in itemsForList" :key="item.id">
        <h1>{{ item.header }}</h1>
        <span>{{ item.text }}</span>
      </li>
    </ul>
  </div>
</template>

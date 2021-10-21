<template>
  <div id="draft" class="container">
    <div id="draft-header">
      <h1>Draft</h1>
    </div>
    <div id="draft-nav">
      <ul id="draft-nav-ul">
        <router-link :to="{ name: 'DraftAnalyzer' }" class="draft-nav-li" active-class="active">
          Analyzer
        </router-link>
        <router-link :to="{ name: 'DraftComposer' }" class="draft-nav-li" active-class="active">
          Composer
        </router-link>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Draft'
}
</script>

<style scoped>
  #draft-header {
    height: 150px;
    display: flex;
    align-items: center;
  }

  #draft-nav {
    text-align: left;
    margin: 0;
    padding: 0;
  }

  #draft-nav-ul {
    margin: 0;
    padding: 0;
  }

  .draft-nav-li {
    font-size: 1.1rem;
    display: inline-block;
    text-align: left;
    list-style: none;
    margin: 12px 48px 12px 0;
    font-weight: 500;
    color: #6b6b6b;
    text-decoration: none;
  }

  .active {
    font-weight: 900;
    color: #cacaca;
  }
</style>
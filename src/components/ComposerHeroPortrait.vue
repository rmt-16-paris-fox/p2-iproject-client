<template>
  <div @click="clickHandler" :class="`hero-container ${isSelected ? 'selected' : ''}`" :style="`background-image: url('${heroImage}')`">
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'ComposerHeroPortrait',
  props: ['hero'],
  data() {
    return {
      isSelected: false
    }
  },
  computed: {
    ...mapState(['radiantDraft', 'direDraft']),
    heroImage() {
      const heroImagePath = this.hero.img.replace('full', 'vert').replace('png', 'jpg');

      return 'https://steamcdn-a.akamaihd.net/' + heroImagePath;
    }
  },
  methods: {
    ...mapMutations({
      setDraftComposerEnemy: 'SET_DRAFT_COMPOSER_ENEMY'
    }),
    clickHandler() {
      this.setDraftComposerEnemy(this.hero.id)
    }
  }
}
</script>

<style scoped>
  .hero-container {
    display: inline-block;
    margin: 4px;
    position: relative;
    width: 72px;
    height: 83.33px;
    background-size: cover;
    border-radius: 6px;
    cursor: pointer;
  }

  .selected {
    pointer-events: none;
    cursor: not-allowed;
  }

  .hero-container:hover {
    transform: scale(1.5);
    z-index: 99;
  }

  .team-container {
    position: relative;
    width: 100%;
    height: 100%;
    display: none;
    border-radius: 6px;
  }
  
  .hero-container:hover > .team-container {
    display: inline-block;
  }

  .radiant, .dire {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    border-radius: 6px 0 0 6px;
  }

  .dire {
    border-radius: 0 6px 6px 0;
  }

  .radiant:hover {
    background: rgb(89,173,100);
    background: linear-gradient(90deg, rgba(89,173,100,0) 0%, rgba(89,173,100,0.8) 70%, rgba(89,173,100,0.8) 100%);
  }

  .dire:hover {
    background: rgb(86, 23, 10);
    background: linear-gradient(90deg, rgba(86, 23, 10,0.8) 0%, rgba(86, 23, 10,0.8) 30%, rgba(86, 23, 10,0) 100%);
  }

  .dire {
    left: 50%;
  }
</style>
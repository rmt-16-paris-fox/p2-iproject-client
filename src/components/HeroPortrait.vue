<template>
  <div :class="`hero-container ${isSelected ? 'selected' : ''}`" :style="`background-image: url('${heroImage}')`">
    <div class="team-container">
      <div @click.stop="radiantHandler" class="radiant-portrait d-flex justify-content-center align-items-center">A</div>
      <div @click.stop="direHandler" class="dire-portrait d-flex justify-content-center align-items-center">B</div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'HeroPortrait',
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
      setRadiantDraft: 'SET_RADIANT_DRAFT',
      setDireDraft: 'SET_DIRE_DRAFT'
    }),
    radiantHandler() {
      this.setRadiantDraft(this.hero.id);
      
      for (let hero of this.radiantDraft) {
        if (hero === this.hero.id) this.isSelected = true;
      }
    },
    direHandler() {
      this.setDireDraft(this.hero.id);
      
      for (let hero of this.direDraft) {
        if (hero === this.hero.id) this.isSelected = true;
      }
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

  .radiant-portrait, .dire-portrait {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    border-radius: 6px 0 0 6px;
  }

  .dire-portrait {
    border-radius: 0 6px 6px 0;
  }

  .radiant-portrait:hover {
    background: rgb(89,173,100);
    background: linear-gradient(90deg, rgba(89,173,100,0) 0%, rgba(89,173,100,0.8) 70%, rgba(89,173,100,0.8) 100%);
  }

  .dire-portrait:hover {
    background: rgb(86, 23, 10);
    background: linear-gradient(90deg, rgba(86, 23, 10,0.8) 0%, rgba(86, 23, 10,0.8) 30%, rgba(86, 23, 10,0) 100%);
  }

  .dire-portrait {
    left: 50%;
  }
</style>
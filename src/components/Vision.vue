<template>
  <div class="row mt-3">
    <div class="col-6 d-flex align-items-center justify-content-center">
      <div id="map">
          <div v-for="(coord, idx) in obs" :key="'obs' + idx" class="observer-ward radiant" :style="`left: ${(550 / 127) * (coord.x - 64) - (86.2745 / 2)}px; top: ${(550 / 127) * (127 - (coord.y - 64)) - (86.2745 / 2)}px;`">
            <img v-if="heroSelector < 5" src="../assets/goodguys_observer.png" alt="" width="18">
            <img v-if="heroSelector >= 5" src="../assets/badguys_observer.png" alt="" width="18">
          </div>
          <div v-for="(coord, idx) in sens" :key="'sen' + idx" class="sentry-ward radiant" :style="`left: ${(550 / 127) * (coord.x - 64) - (45.8333 / 2)}px; top: ${(550 / 127) * (127 - (coord.y - 64)) - (45.8333 / 2)}px;`">
            <img v-if="heroSelector < 5" src="../assets/goodguys_sentry.png" alt="" width="18">
            <img v-if="heroSelector >= 5" src="../assets/badguys_sentry.png" alt="" width="18">
          </div>
      </div>
    </div>
    <div class="col-6">
      <div id="heroSelector">
        <h2>Radiant</h2>
        <ul>
          <li v-for="player in radiantHeroImage" :key="player.heroId">
            <input v-model="heroSelector" @change="heroSelectorHandler" :value="player.id" class="form-check-input" type="radio" :name="player.id" :id="player.id">
            <label :for="player.id"><img :src="player.img" class="hero-image" :alt="player.name" /> {{ player.name }}</label>
          </li>
        </ul>
        <h2>Dire</h2>
        <ul>
          <li v-for="player in direHeroImage" :key="player.heroId">
            <input v-model="heroSelector" @change="heroSelectorHandler" :value="player.id" class="form-check-input" type="radio" :name="player.id" :id="player.id">
            <label :for="player.id"><img :src="player.img" class="hero-image" :alt="player.name" /> {{ player.name }}</label>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { heroes } from 'dotaconstants';

export default {
  name: 'Vision',
    data() {
    return {
      heroSelector: 0,
      obs: [],
      sens: []
    }
  },
  methods: {
    heroSelectorHandler() {
      const obs = [];
      const sens = [];

      if (this.matchData.players) {
        for (let coordinate of this.matchData.players[this.heroSelector].obs_log) {
          obs.push({
            x: coordinate.x, 
          y: coordinate.y
        });
      }

        for (let coordinate of this.matchData.players[this.heroSelector].sen_log) {
          sens.push({
            x: coordinate.x, 
            y: coordinate.y
          });
        }
      }

      this.obs = obs;
      this.sens = sens;
    }
  },
  computed: {
    ...mapState(['matchData']),
    radiantHeroImage() {
      let players = [];
      let heroImg = [];

      if (this.matchData.players) {
        players = [...this.matchData.players];
        heroImg = [];

        for (let i = 0; i < 5; i++) {
          const heroObj = {
            img: 'https://steamcdn-a.akamaihd.net/' + heroes[players[i].hero_id].img,
            id: i,
            heroId: players[i].hero_id,
            name: heroes[players[i].hero_id].localized_name
          };

          heroImg.push(heroObj);
        }

      }

      return heroImg;
    },
    direHeroImage() {
      let players = [];
      let heroImg = [];

      if (this.matchData.players) {
        players = [...this.matchData.players];
        heroImg = [];

        for (let i = 5; i < 10; i++) {
          const heroObj = {
            img: 'https://steamcdn-a.akamaihd.net/' + heroes[players[i].hero_id].img,
            id: i,
            heroId: players[i].hero_id,
            name: heroes[players[i].hero_id].localized_name
          };

          heroImg.push(heroObj);
        }
      }

      return heroImg;
    }
  },
  mounted() {
    this.heroSelectorHandler();
  },
}
</script>

<style>
  #map {
    width: 550px;
    height: 550px;
    background-image: url('../assets/map.jpeg');
    background-size: cover;
    position: relative;
  }

  #heroSelector {
    height: 100%;
  }

  ul {
    text-align: left;
    list-style: none;
  }

  li {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }

  .hero-image {
    width: 80px;
    margin-left: 10px;
  }

  .observer-ward {
    position: absolute;
    height: 86.2745px;
    width: 86.2745px;
    background-color: rgba(255, 171, 64, 0.3);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: content-box;
  }

  .sentry-ward {
    position: absolute;
    height: 45.8333px;
    width: 45.8333px;
    background-color: rgba(102, 187, 255, 0.3);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: content-box;
  }

  .radiant {
    border: 2.5px solid rgb(102, 187, 106);
  }

  .dire {
    border: 2px solid rgb(255, 76, 76);
  }
</style>
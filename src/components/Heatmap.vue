<template>
  <div class="row mt-3">
    <div class="col-6 d-flex align-items-center justify-content-center">
      <div id="heatmapContainer"></div>
    </div>
    <div class="col-6">
      <div id="heroSelector">
        <h2>Radiant</h2>
        <ul>
          <li v-for="player in radiantHeroImage" :key="player.id">
            <input v-model="heroSelector" @change="heroSelectorHandler" :value="player.id" class="form-check-input" type="radio" :name="player.id" :id="player.id">
            <label :for="player.id"><img :src="player.img" class="hero-image" :alt="player.name" /> {{ player.name }}</label>
          </li>
        </ul>
        <h2>Dire</h2>
        <ul>
          <li v-for="player in direHeroImage" :key="player.id">
            <input v-model="heroSelector" @change="heroSelectorHandler" :value="player.id" class="form-check-input" type="radio" :name="player.id" :id="player.id">
            <label :for="player.id"><img :src="player.img" class="hero-image" :alt="player.name" /> {{ player.name }}</label>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import h337 from 'heatmap.js';
import { mapState } from 'vuex';
import { heroes } from 'dotaconstants';

export default {
  name: 'Heatmap',
  data() {
    return {
      heroSelector: 0,
      heatmapInstance: null
    }
  },
  methods: {
    heroSelectorHandler() {
      const dataPoints = []

      if (this.matchData) {
        for (let x in this.matchData.players[this.heroSelector].lane_pos) {
          for (let y in this.matchData.players[this.heroSelector].lane_pos[x]) {
            const dataPoint = {
              x: ((550 / 127) * (x - 64)).toFixed(0),
              y: ((550 / 127) * (127 - (y - 64))).toFixed(0),
              value: this.matchData.players[this.heroSelector].lane_pos[x][y]
            }
    
            dataPoints.push(dataPoint);
          }
        }
      }

      this.heatmapInstance.setData({
        max: 29,
        min: 1,
        data: dataPoints 
        });
    }
  },
  computed: {
    ...mapState(['matchData']),
    radiantHeroImage() {
      const players = [...this.matchData.players];
      const heroImg = [];
      
      for (let i = 0; i < 5; i++) {
        const heroObj = {
          img: 'https://steamcdn-a.akamaihd.net/' + heroes[players[i].hero_id].img,
          id: i,
          name: heroes[players[i].hero_id].localized_name
        };

        heroImg.push(heroObj);
      }

    return heroImg;
    },
    direHeroImage() {
      const players = [...this.matchData.players];
      const heroImg = [];
      
      for (let i = 5; i < 10; i++) {
        const heroObj = {
          img: 'https://steamcdn-a.akamaihd.net/' + heroes[players[i].hero_id].img,
          id: i,
          name: heroes[players[i].hero_id].localized_name
        };

        heroImg.push(heroObj);
      }

    return heroImg;
    }
  },
  mounted() {
    const config = {
      container: document.getElementById('heatmapContainer'),
      radius: 25,
      maxOpacity: 0.8,
      minOpacity: 0,
      blur: .75,
      gradient: {
        '.5': 'blue',
        '.8': 'red',
      }
    };

    this.heatmapInstance = h337.create(config);

    const dataPoints = []

    if (this.matchData) {
      for (let x in this.matchData.players[this.heroSelector].lane_pos) {
        for (let y in this.matchData.players[this.heroSelector].lane_pos[x]) {
          const dataPoint = {
            x: ((550 / 127) * (x - 64)).toFixed(0),
            y: ((550 / 127) * (127 - (y - 64))).toFixed(0),
            value: this.matchData.players[this.heroSelector].lane_pos[x][y]
          }
  
          dataPoints.push(dataPoint)
        }
      }
    }

    this.heatmapInstance.addData(dataPoints);
  }
}
</script>

<style scoped>
  #heatmapContainer {
    width: 550px;
    height: 550px;
    background-image: url('../assets/map.jpeg');
    background-size: cover;
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
</style>
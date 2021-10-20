<template>
  <div>
    <div :class="`team ${teamName === 'Radiant' ? 'radiant' : 'dire'}`">
      <div class="team-content">
        <div class="team-img-container">
          <img v-if="teamName === 'Radiant'" src="../assets/radiant_icon.png" class="team-img" />
          <img v-if="teamName === 'Dire'" src="../assets/dire_icon.png" class="team-img" />
        </div>
        <div class="team-name-container">
          <span class="team-name">{{ teamName }}</span>
        </div>
        <div class="team-score-container">
          <span v-if="teamName ==='Radiant'" class="team-score">{{ matchData.radiant_score }}</span>
          <span v-if="teamName ==='Dire'" class="team-score">{{ matchData.dire_score }}</span>
        </div>
      </div>
    </div>
    <div id="overview-table">
      <table ref="table" @scroll="hideScroll" style="position: relative">
        <thead>
          <tr>
            <th class="first-col">Hero</th>
            <th class="second-col"></th>
            <th class="third-col">
              <span class="kill">K</span>
              /
              <span class="death">D</span>
              /
              <span class="assist">A</span>
            </th>
            <th class="fourth-col">KP</th>
            <th class="fifth-col">Net Worth</th>
            <th class="sixth-col center-text">Inventory</th>
            <th class="seventh-col center-text">Backpack</th>
            <th class="eigth-col center-text">Buffs</th>
            <th class="ninth-col center-text">
              <span class="lh">LH</span>
              /
              <span class="dn">DN</span>
            </th>
            <th class="tenth-col">GPM</th>
            <th class="eleventh-col">XPM</th>
            <th class="twelveth-col">Hero Damage</th>
            <th class="thirtenth-col">Building Damage</th>
            <th class="fourtenth-col">Heal</th>
            <th class="fiftenth-col">Support Contribution</th>
            <th class="sixtenth-col">
              <img src="../assets/camp_stacks.png" />
            </th>
          </tr>
        </thead>
        <tbody v-if="teamName === 'Radiant'" style="position: relative">
          <OverviewRow v-for="player in radiant" :data="player" :team="teamName" :key="player.id"/>
        </tbody>
        <tbody v-if="teamName === 'Dire'">
          <OverviewRow v-for="player in dire" :data="player" :team="teamName" :key="player.id"/>
        </tbody>
        <div class="scroll-div" ref="scroll">
          <div style="width: 100%; text-align: center; margin-bottom: 12px">
            <img src="../assets/next.png" width="18" />
          </div>
          <div style="width: 100%; text-align: center">
            <span>Scroll for more...</span>
          </div>
        </div>
      </table>
    </div>
  </div>
</template>

<script>
import OverviewRow from '@/components/OverviewRow.vue';
import { mapState } from 'vuex';

export default {
  name: 'OverviewTable',
  components: { OverviewRow },
  props: ['teamName'],
  computed: {
    ...mapState(['matchData', 'radiant', 'dire'])
  },
  methods: {
    hideScroll() {
      if (this.$refs.table.scrollLeft > 0) this.$refs.scroll.style.display = 'none';
      else if (this.$refs.table.scrollLeft === 0) this.$refs.scroll.style.display = 'flex';
    }
  }
}
</script>

<style scoped>
  .scroll-div {
    background: rgb(10,10,10);
    background: linear-gradient(90deg, rgba(10,10,10,0) 0%, rgba(10,10,10,1) 75%, rgba(10,10,10,1) 100%);
    position: absolute; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
    right: 0;  
    top: 0;
    height: 100%; 
    width: 200px; 
    z-index: 3;
  }

  #level {
    border: 2px solid rgb(56, 56, 56);
    display: inline-block;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    padding-top: 5px;
    text-align: center;
  }

  #displayname {
    margin-left: 8px;
  }

  .team {
    margin: 14px 0;
    border: 1px solid rgb(37, 37, 37);
    border-radius: 8px;
    overflow: hidden;
    height: 42px;
    padding: 0;
    background-size: cover;
  }

  .radiant {
    background-image: url('../assets/radiant_icon.png');
  }

  .dire {
    background-image: url('../assets/dire_icon.png');
  }

  .team-content {
    position: relative;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }

  .team-img-container {
    display: inline-block;
    height: 100%;
  }

  .team-img {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  .team-name-container {
    display: inline-block;
    margin-left: 10px;
  }

  .team-name {
    display: inline-block;
    font-size: 1.2rem;
    font-weight: 900;
  }

  .team-score-container {
    position: absolute;
    right: 24px;
    top: 4px;
    font-size: 24px;
    display: inline-block;
    align-items: flex-start;
    margin-left: auto;
  }

  .team-score {
    font-weight: 900;
  }

  .kill {
    display: inline-block;
    text-align: right;
    width: 18px;
  }

  .death {
    display: inline-block;
    text-align: center;
    width: 18px;
  }

  .assist {
    display: inline-block;
    text-align: left;
    width: 18px;
  }

  .lh {
    display: inline-block;
    text-align: right;
    width: 42px;
  }

  .dn {
    display: inline-block;
    text-align: left;
    width: 42px;
  }

  table {
    display: block;
    overflow-x: scroll;
    white-space: nowrap;
    -ms-overflow-style: none;
    scrollbar-width: none;
    position: relative;
  }

  td, th {
    background-color: #1f1f1f;
  }

  table::-webkit-scrollbar {
    display: none;
  }

  .center-text {
    text-align: center;
  }

  .first-col {
    position: sticky;
    z-index: 1;
    left: 0;
    position: -webkit-sticky;
    background: rgb(31,31,31);
    background: linear-gradient(90deg, rgba(31,31,31,1) 0%, rgba(31,31,31,1) 90%, rgba(31,31,31,0) 100%);
  }

  .second-col {
    min-width: 200px;
  }

  .third-col {
    min-width: 125px;
    text-align: center;
  }

  .fourth-col {
    min-width: 50px;
    text-align: center;
  }

  .fifth-col {
    min-width: 110px;
    text-align: center;
  }

  .sixth-col {
    min-width: 110px;
  }

  .seventh-col {
    min-width: 110px;
  }

  .eigth-col {
    min-width: 80px;
  }

  .ninth-col {
    min-width: 100px;
  }

  .tenth-col {
    min-width: 80px;
    text-align: center;
  }

  .eleventh-col {
    min-width: 80px;
    text-align: center;
  }

  .twelveth-col {
    min-width: 120px;
    text-align: center;
  }

  .thirtenth-col {
    min-width: 120px;
    text-align: center;
  }

  .fourtenth-col {
    min-width: 90px;
    text-align: center;
  }

  .fiftenth-col {
    min-width: 100px;
    text-align: center;
  }

  .sixtenth-col {
    min-width: 60px;
    text-align: center;
  }

  .hero-image {
    width: 82px;
    border: 2px solid rgb(17, 17, 17);
    border-radius: 6px;
    margin-right: 32px;
  }

  .item {
    display: inline-block;
    width: 32px;
    height: 24px;
    border: 1px solid rgb(17, 17, 17);
    border-radius: 6px;
    background-color: #353535;
    overflow: hidden;
    padding: 0;
    position: relative;
    margin: 0 2px;
  }

  .item:first-of-type {
    margin-left: 0;
  }

  .item-image {
    width: 100%;
    padding: 0;
    margin: 0;
    position: absolute;
    z-index: 0;
  }
</style>
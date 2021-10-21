<template>
  <div id="match-detail">
    <div class="spinner-border mt-5" role="status" v-if="!isLoaded">
      <span class="sr-only"></span>
    </div>
    <div id="match-main-header" :class="`match-main-header-bg ${winningTeam === 'Radiant' ? 'radiant' : 'dire'}`">
      <div class="blur">  
        <div id="match-header" class="container" v-if="isLoaded">
          <h1>{{ winningTeam }} Victory</h1>
        </div>
        <div id="match-nav" class="container" v-if="isLoaded">
          <ul id="match-nav-ul" class="container" >
            <router-link :to="{ name: 'MatchOverview' }" class="match-nav-li" active-class="active">
              Overview
            </router-link>
            <router-link :to="{ name: 'Heatmap' }" class="match-nav-li" active-class="active">
              Heatmap
            </router-link>
            <router-link :to="{ name: 'Vision' }" class="match-nav-li" active-class="active">
              Vision
            </router-link>
          </ul>
        </div>
      </div>
    </div>
    <div v-if="isLoaded" class="container" >
      <div class="box" v-if="isLoaded">
        <BoxIdentifier title="ID" :content="matchData.match_id" />
        <BoxIdentifier title="Lobby Type" :content="lobbyType" />
        <BoxIdentifier title="Game Mode" :content="gameMode" />
        <BoxIdentifier title="Region" :content="region" />
        <BoxIdentifier title="Duration" :content="duration" />
        <BoxIdentifier title="Date" :content="date" />
      </div>
      <div class="container">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import BoxIdentifier from '@/components/BoxIdentifier.vue';
import { mapState, mapActions } from 'vuex';
import { lobby_type, game_mode, region } from 'dotaconstants';
import timestamp from 'unix-timestamp';
import date from 'date-and-time';

export default {
  name: 'MatchDetail',
  components: { BoxIdentifier },
  computed: {
    ...mapState(['matchData']),
    isLoaded() {
      return this.matchData.players;
    },
    winningTeam() {
      let result = 'Radiant';

      if (!this.matchData.radiant_win) result = 'Dire';

      return result;
    },
    lobbyType() {
      let lobby_type_name = '';

      for (const lobbyId in lobby_type) {
        if (+lobbyId === this.matchData.lobby_type) {
          lobby_type_name = lobby_type[lobbyId].name;
        }
      }

      if (lobby_type_name === 'lobby_type_normal') lobby_type_name = 'Unranked';
      else if (lobby_type_name === 'lobby_type_practice') lobby_type_name = 'Lobby';
      else if (lobby_type_name === 'lobby_type_ranked_team_mm' || lobby_type_name === 'lobby_type_ranked_solo_mm' || lobby_type_name === 'lobby_type_ranked') lobby_type_name = 'Ranked';

      return lobby_type_name;
    },
    gameMode() {
      let game_mode_name = '';

      for (const gameModeId in game_mode) {
        if (+gameModeId === this.matchData.game_mode) {
          game_mode_name = game_mode[gameModeId].name;
        }
      }

      if (game_mode_name === 'game_mode_all_draft') game_mode_name = 'All Pick';
      else if (game_mode_name === 'game_mode_captains_mode') game_mode_name = "Captain's Mode";
      else if (game_mode_name === 'game_mode_random_draft') game_mode_name = "Random Draft";
      else if (game_mode_name === 'game_mode_single_draft') game_mode_name = "Single Draft";
      else if (game_mode_name === 'game_mode_all_random') game_mode_name = "All Random";

      return game_mode_name;
    },
    region() {
      let region_name = [];

      for (const regionId in region) {

        if (+regionId === this.matchData.region) {
          region_name = region[regionId].split(' ');

          for (let i = 0; i < region_name.length; i++) {
            region_name[i] = region_name[i].slice(0, 1) + region_name[i].toLowerCase().slice(1);
          }

          region_name = region_name.join(' ');
        }
      }
        return region_name;
    },
    duration() {
      const minutes = Math.floor(this.matchData.duration / 60);
      let seconds = (this.matchData.duration % 60);

      if (seconds < 10) seconds = '0' + seconds;

      return minutes + ':' + seconds; 
    },
    date() {
      let dateConvert = '';

      if (this.matchData.start_time) dateConvert = date.format(timestamp.toDate(this.matchData.start_time), 'YYYY/MM/DD HH:mm:ss'); 
      
      return dateConvert;
    }
  },
  methods: {
    ...mapActions(['fetchMatchData'])
  },
  async created() {
    await this.fetchMatchData(this.$route.params.matchId);
  }
}
</script>

<style scoped>
  .box {
    text-align: left;
  }

  .match-main-header-bg {
    background-size: cover;
    background-position: center;
  }

  .dire {
    background-image: url('../assets/dire_header.jpg');
  }

  .radiant {
    background-image: url('../assets/radiant_header.jpg');
  }

  .blur {
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(6px);
  }

  #match-header {
    height: 150px;
    display: flex;
    align-items: center;
  }

  #match-nav {
    text-align: left;
  }

  #match-nav-ul {
    margin: 0;
    padding: 0;
  }

  .match-nav-li {
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
<template>
  <div>
    <div>
      <HeroPortrait v-for="hero in heroes" :key="hero.hero_id" :hero="hero" />
    </div>
    <div class="row">
      <div class="col-6">
        Radiant (Team A)
        <div class="d-flex justify-content-around align-items-center nowrap">
          <div class="hero-image" @click="heroClickHandler(hero.id)" v-for="hero in radiantImage" :key="hero.id" :style="`background-image: url('${hero.img}'); background-size: cover;`"></div>
        </div>
      </div>
      <div class="col-6">
        Dire (Team B)
        <div class="d-flex justify-content-around align-items-center nowrap">
          <div class="hero-image" @click="heroDireClickHandler(hero.id)" v-for="hero in direImage" :key="hero.id" :style="`background-image: url('${hero.img}'); background-size: cover;`"></div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <form @submit.prevent="analyzeHandler">
          <input type="submit" value="Analyze" class="btn btn-primary btn-lg" />
        </form>
      </div>
    </div>
    <div v-if="draftAnalyzed.radiantTotalSynergy">
    <div class="row mt-4">
      <div class="col-4"><h3>Radiant Synergy</h3></div>
      <div class="col-4"><h3>Radiant to Dire Synergy</h3></div>
      <div class="col-4"><h3>Dire Synergy</h3></div>
    </div>
    <div class="row">
      <div class="col-4"><h5>{{ draftAnalyzed.radiantTotalSynergy.toFixed(2) }}</h5></div>
      <div class="col-4"><h5>{{ draftAnalyzed.radiantToDireAdvantage.toFixed(2) }}</h5></div>
      <div class="col-4"><h5>{{ draftAnalyzed.direTotalSynergy.toFixed(2)}}</h5></div>
    </div>
    <div class="row">
      <div class="col-6"><h3>Radiant Team Composition</h3></div>
      <div class="col-6"><h3>Dire Team Composition</h3></div>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="row">
          <div class="col">
            <h5>Carry</h5>
            <div class="progress">
              <div class="progress-bar" role="progressbar" :style="`width: ${draftAnalyzed.radiantComposition.Carry / 8 * 100}%;`" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{draftAnalyzed.radiantComposition.Carry}}</div>
            </div>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col">
            <h5>Escape</h5>
            <div class="progress">
              <div class="progress-bar" role="progressbar" :style="`width: ${draftAnalyzed.radiantComposition.Escape / 8 * 100}%;`" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{draftAnalyzed.radiantComposition.Escape}}</div>
            </div>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col">
            <h5>Nuker</h5>
            <div class="progress">
              <div class="progress-bar" role="progressbar" :style="`width: ${draftAnalyzed.radiantComposition.Nuker / 8 * 100}%;`" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{draftAnalyzed.radiantComposition.Nuker}}</div>
            </div>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col">
            <h5>Initiator</h5>
            <div class="progress">
              <div class="progress-bar" role="progressbar" :style="`width: ${draftAnalyzed.radiantComposition.Initiator / 8 * 100}%;`" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{draftAnalyzed.radiantComposition.Initiator}}</div>
            </div>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col">
            <h5>Durable</h5>
            <div class="progress">
              <div class="progress-bar" role="progressbar" :style="`width: ${draftAnalyzed.radiantComposition.Durable / 8 * 100}%;`" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{draftAnalyzed.radiantComposition.Durable}}</div>
            </div>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col">
            <h5>Disabler</h5>
            <div class="progress">
              <div class="progress-bar" role="progressbar" :style="`width: ${draftAnalyzed.radiantComposition.Disabler / 8 * 100}%;`" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{draftAnalyzed.radiantComposition.Disabler}}</div>
            </div>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col">
            <h5>Jungler</h5>
            <div class="progress">
              <div class="progress-bar" role="progressbar" :style="`width: ${draftAnalyzed.radiantComposition.Jungler / 8 * 100}%;`" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{draftAnalyzed.radiantComposition.Jungler}}</div>
            </div>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col">
            <h5>Support</h5>
            <div class="progress">
              <div class="progress-bar" role="progressbar" :style="`width: ${draftAnalyzed.radiantComposition.Support / 8 * 100}%;`" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{draftAnalyzed.radiantComposition.Support}}</div>
            </div>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col">
            <h5>Pusher</h5>
            <div class="progress">
              <div class="progress-bar" role="progressbar" :style="`width: ${draftAnalyzed.radiantComposition.Pusher / 8 * 100}%;`" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{draftAnalyzed.radiantComposition.Pusher}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="row">
          <div class="col">
            <h5>Carry</h5>
            <div class="progress">
              <div class="progress-bar" role="progressbar" :style="`width: ${draftAnalyzed.direComposition.Carry / 8 * 100}%;`" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{draftAnalyzed.direComposition.Carry}}</div>
            </div>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col">
            <h5>Escape</h5>
            <div class="progress">
              <div class="progress-bar" role="progressbar" :style="`width: ${draftAnalyzed.direComposition.Escape / 8 * 100}%;`" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{draftAnalyzed.direComposition.Escape}}</div>
            </div>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col">
            <h5>Nuker</h5>
            <div class="progress">
              <div class="progress-bar" role="progressbar" :style="`width: ${draftAnalyzed.direComposition.Nuker / 8 * 100}%;`" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{draftAnalyzed.direComposition.Nuker}}</div>
            </div>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col">
            <h5>Initiator</h5>
            <div class="progress">
              <div class="progress-bar" role="progressbar" :style="`width: ${draftAnalyzed.direComposition.Initiator / 8 * 100}%;`" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{draftAnalyzed.direComposition.Initiator}}</div>
            </div>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col">
            <h5>Durable</h5>
            <div class="progress">
              <div class="progress-bar" role="progressbar" :style="`width: ${draftAnalyzed.direComposition.Durable / 8 * 100}%;`" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{draftAnalyzed.direComposition.Durable}}</div>
            </div>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col">
            <h5>Disabler</h5>
            <div class="progress">
              <div class="progress-bar" role="progressbar" :style="`width: ${draftAnalyzed.direComposition.Disabler / 8 * 100}%;`" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{draftAnalyzed.direComposition.Disabler}}</div>
            </div>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col">
            <h5>Jungler</h5>
            <div class="progress">
              <div class="progress-bar" role="progressbar" :style="`width: ${draftAnalyzed.radiantComposition.Jungler / 8 * 100}%;`" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{draftAnalyzed.radiantComposition.Jungler}}</div>
            </div>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col">
            <h5>Support</h5>
            <div class="progress">
              <div class="progress-bar" role="progressbar" :style="`width: ${draftAnalyzed.radiantComposition.Support / 8 * 100}%;`" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{draftAnalyzed.radiantComposition.Support}}</div>
            </div>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col">
            <h5>Pusher</h5>
            <div class="progress">
              <div class="progress-bar" role="progressbar" :style="`width: ${draftAnalyzed.radiantComposition.Pusher / 8 * 100}%;`" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{draftAnalyzed.radiantComposition.Pusher}}</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeroPortrait from '@/components/HeroPortrait.vue';
import { heroes } from 'dotaconstants';
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'DraftAnalyzer',
  components: { HeroPortrait },
  computed: {
    ...mapState(['radiantDraft', 'direDraft', 'draftAnalyzed']),
    heroes() {
      return heroes;
    },
    radiantImage() {
      const radiantImageArr = [];
  
      for (let hero of this.radiantDraft) {
        const payload = { id: hero, img: 'https://steamcdn-a.akamaihd.net/' + heroes[hero].img };

        radiantImageArr.push(payload);
      }

      return radiantImageArr;
    },
    direImage() {
      const direImageArr = [];
  
      for (let hero of this.direDraft) {
        const payload = { id: hero, img: 'https://steamcdn-a.akamaihd.net/' + heroes[hero].img };

        direImageArr.push(payload);
      }

      return direImageArr;
    }
  },
  methods: {
    ...mapMutations({
      setRemoveRadiantDraft: 'SET_REMOVE_RADIANT_DRAFT',
      setRemoveDireDraft: 'SET_REMOVE_DIRE_DRAFT'
    }),
    ...mapActions(['analyzeDraft']),
    heroDireClickHandler(id) {
      this.setRemoveDireDraft(id);
    },
    heroClickHandler(id) {
      this.setRemoveRadiantDraft(id);
    },
    async analyzeHandler() {
      await this.analyzeDraft();
    }
  },
  mounted() {
    console.log(heroes)
  }
}
</script>

<style scoped>
  .hero-image {
    height: 60px;
    width: 106px;
    background-color: #313131;
    border-radius: 4px;
    margin: 10px 0;
    box-sizing: content-box;
  }
</style>
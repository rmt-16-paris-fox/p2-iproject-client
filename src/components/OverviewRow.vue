<template>
  <tr>
    <td class="first-col">
      <div>
        <img :src="heroImage" class="hero-image"/>
      </div>
    </td>
    <td class="second-col">
      <span id="level">{{ data.level }}</span>
      <span id="displayname">{{ displayName }}</span>
    </td>
    <td class="third-col">
      <span class="kill">{{ data.kills }}</span>
      /
      <span class="death">{{ data.deaths }}</span>
      /
      <span class="assist">{{ data.assists }}</span>
    </td>
    <td class="fourth-col">
      {{ killParticipation }}%
    </td>
    <td class="fifth-col">{{ data.net_worth.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</td>
    <td class="sixth-col">
      <div class="item">
        <img :src="item0" class="item-image" />
      </div>
      <div class="item">
        <img :src="item1" class="item-image" />
      </div>
      <div class="item">
        <img :src="item2" class="item-image" />
      </div>
      <div class="item">
        <img :src="item3" class="item-image" />
      </div>
      <div class="item">
        <img :src="item4" class="item-image" />
      </div>
      <div class="item">
        <img :src="item5" class="item-image" />
      </div>
      <div class="item-neutral">
        <img :src="item_neutral" class="item-image-neutral" />
      </div>
    </td>
    <td class="seventh-col">
      <div class="item">
        <img :src="backpack_0" class="item-image" />
      </div>
      <div class="item">
        <img :src="backpack_1" class="item-image" />
      </div>
      <div class="item">
        <img :src="backpack_2" class="item-image" />
      </div>
    </td>
    <td class="eigth-col">
      <div class="buffs" v-for="(buff, idx) in permanentBuff" :key="idx">
        <img :src="buff.buff_img" class="buffs-image" />
        <span class="buffs-count">{{ buff.count }}</span>
      </div>
    </td>
    <td class="ninth-col">       
      <span class="lh">{{ data.last_hits }}</span>
      /
      <span class="dn">{{ data.denies }}</span>
    </td>
    <td class="tenth-col">{{ (data.player_lane_efficiency * 100).toFixed(2) }}%</td>
    <td class="tenth-col">{{ (data.last_hit_efficiency * 100).toFixed(2) }}%</td>
    <td class="tenth-col">{{ data.gold_per_min }}</td>
    <td class="eleventh-col">{{ data.xp_per_min }}</td>
    <td class="twelveth-col">{{ data.hero_damage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</td>
    <td class="thirtenth-col">{{ data.tower_damage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</td>
    <td class="fourtenth-col">{{ data.hero_healing.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</td>
    <td class="fiftenth-col">
      <div class="support-container" v-for="(contribution, idx) in supportContributions" :key="idx">
        <div class="item-support">
          <img :src="contribution.img" class="item-image" />
        </div>
        <div class="item-count">
          x{{ contribution.count }}
        </div>
      </div>
    </td>
    <td class="sixtenth-col">{{ data.camps_stacked }}</td>
  </tr>
</template>

<script>
import { mapState } from 'vuex';
import { heroes, items, item_ids, permanent_buffs, abilities } from 'dotaconstants';

export default {
  name: 'OverviewRow',
  props: ['data', 'team'],
  computed: {
    ...mapState(['matchData']),
    displayName() {
      return this.data.personaname || 'Private User';
    },
    killParticipation() {
      let kp = 0;

      if (this.team === 'Radiant') kp = (this.data.kills / this.matchData.radiant_score * 100).toFixed(0);
      if (this.team === 'Dire') kp = (this.data.kills / this.matchData.radiant_score * 100).toFixed(0);

      return kp;
    },
    heroImage() {
      return 'https://steamcdn-a.akamaihd.net/' + heroes[this.data.hero_id].img;
    },
    item0() {
      let item = '';
      let item_name = '';

      if (this.data.item_0) {
        item_name = item_ids[this.data.item_0];
        item = 'https://steamcdn-a.akamaihd.net/' + items[item_name].img;
      }

      return item;
    },
    item1() {
      let item = '';
      let item_name = '';

      if (this.data.item_1) {
        item_name = item_ids[this.data.item_1];
        item = 'https://steamcdn-a.akamaihd.net/' + items[item_name].img;
      }

      return item;
    },
    item2() {
      let item = '';
      let item_name = '';

      if (this.data.item_2) {
        item_name = item_ids[this.data.item_2];
        item = 'https://steamcdn-a.akamaihd.net/' + items[item_name].img;
      }

      return item;
    },
    item3() {
      let item = '';
      let item_name = '';

      if (this.data.item_3) {
        item_name = item_ids[this.data.item_3];
        item = 'https://steamcdn-a.akamaihd.net/' + items[item_name].img;
      }

      return item;
    },
    item4() {
      let item = '';
      let item_name = '';

      if (this.data.item_4) {
        item_name = item_ids[this.data.item_4];
        item = 'https://steamcdn-a.akamaihd.net/' + items[item_name].img;
      }

      return item;
    },
    item5() {
      let item = '';
      let item_name = '';

      if (this.data.item_5) {
        item_name = item_ids[this.data.item_5];
        item = 'https://steamcdn-a.akamaihd.net/' + items[item_name].img;
      }

      return item;
    },
    item_neutral() {
      let item = '';
      let item_name = '';

      if (this.data.item_neutral) {
        item_name = item_ids[this.data.item_neutral];
        item = 'https://steamcdn-a.akamaihd.net/' + items[item_name].img;
      }

      return item;
    },
    backpack_0() {
      let item = '';
      let item_name = '';

      if (this.data.backpack_0) {
        item_name = item_ids[this.data.backpack_0];
        item = 'https://steamcdn-a.akamaihd.net/' + items[item_name].img;
      }

      return item;
    },
    backpack_1() {
      let item = '';
      let item_name = '';

      if (this.data.backpack_1) {
        item_name = item_ids[this.data.backpack_1];
        item = 'https://steamcdn-a.akamaihd.net/' + items[item_name].img;
      }

      return item;
    },
    backpack_2() {
      let item = '';
      let item_name = '';

      if (this.data.backpack_2) {
        item_name = item_ids[this.data.backpack_2];
        item = 'https://steamcdn-a.akamaihd.net/' + items[item_name].img;
      }

      return item;
    },
    permanentBuff() {
      const buffs = [];

      if (this.data.permanent_buffs) {
        for (let buff of this.data.permanent_buffs) {
          const buffName = permanent_buffs[buff.permanent_buff];
          let buff_img_path = '';

          buff_img_path = abilities[buffName];


          if (!buff_img_path) buff_img_path = items[buffName];

          const buffObj = {
            buff_img: 'https://steamcdn-a.akamaihd.net/' + buff_img_path.img,
            count: buff.stack_count === 0 ? '' : buff.stack_count
          }

          buffs.push(buffObj);
        }
      }

      return buffs;
    },
    supportContributions() {
      const contributions = [];

      for (let item in this.data.purchase) {
        if (item === 'ward_observer' || item === 'ward_sentry' || item === 'smoke_of_deceit' || item === 'dust' || item === 'gem') {
          const itemObj = {
            img: 'https://steamcdn-a.akamaihd.net/' + items[item].img,
            count: this.data.purchase[item]
          }

          contributions.push(itemObj)
        }
      }

      return contributions;
    }
  }
}
</script>

<style scoped>
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

  .item-neutral {
    display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #353535;
    overflow: hidden;
    padding: 0;
    position: relative;
    margin: 0 2px;
  }

  .item-image-neutral {
    height: 100%;
    padding: 0;
    margin: 0;
    position: absolute;
    z-index: 0;
  }

  .item-support {
    display: inline-block;
    width: 32px;
    height: 24px;
    border-radius: 6px 0 0 6px;
    background-color: #353535;
    overflow: hidden;
    padding: 0;
    position: relative;
    margin: 0;
  }

  .item-count {
    display: inline-block;
    text-align: center;
    font-size: 14px;
    width: 38px;
    height: 24px;
    border-radius: 0 6px 6px 0;
    background-color: #353535;
    overflow: hidden;
    padding: 0;
    padding-top: 2px;
    position: relative;
    margin-right: 2px;
  }

  .buffs {
    display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 6px;
    background-color: #353535;
    overflow: hidden;
    padding: 0;
    position: relative;
    margin: 0 2px;
  }

  .buffs-image {
    height: 100%;
    padding: 0;
    margin: 0;
    position: absolute;
    z-index: 0;
  }

  .buffs-count {
    font-size: 12px;
    display: inline-block;
    height: 24px;
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: rgba(31,31,31,0.8);
  }

  .support-container {
    display: inline-block;
    margin: 0 2px;
  }

  .support-container:first-of-type {
    margin-left: 0;
  }
</style>
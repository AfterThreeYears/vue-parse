<template>
  <div :class="classWraps">
    <transition-group name="flip-list" tag="ul" @leave="leave">
      <li v-for="item in tree" :key="item.idCardNum">
        <div
          v-show="isShow(item)"
        >
          <p :class="classnames(item)" @click="handleClick(item, $event)">{{ item.idCardNum }}-{{ item.name }}--{{index}}--{{codes[index]}}</p>
          <picker
            v-if="item.c"
            :tree="item.c"
            :codes="codes"
            :index="index + 1"
            @setCode="outSetCode"
          />
        </div>
      </li>
    </transition-group>
  </div>
</template>

<script>


export default {
  name: 'Picker',
  props: {
    tree: {
      type: Array,
      default: () => ([]),
    },
    codes: {
      type: Array,
      default: () => ([]),
    },
    index: {
      type: Number,
      default: 0,
    }
  },
  mounted() {
  },
  methods: {
    handleClick(item, event) {
      console.time('jump');
      console.log(event.target);
      this.$emit('setCode', { code: item.idCardNum, index: this.index });
      console.timeEnd('jump');
      if (!item.c) return;
      var bodySH = document.documentElement.clientHeight / 2 + document.querySelector('.picker-wrap').scrollTop
      var elSH = event.target.getBoundingClientRect().y + document.querySelector('.picker-wrap').scrollTop
      document.querySelector('.picker-wrap').scrollTop += (elSH - bodySH);
    },
    outSetCode(args) {
      this.$emit('setCode', args);
    },
    isShow(item) {
      if (this.index === 0) return true;
      return String(item.idCardNum).startsWith(this.codes[this.index - 1])
    },
    classnames(item) {
      let classes = `level${this.index}`;
      if (+item.idCardNum === +this.codes[this.index]) return `${classes} current`;
      return classes;
    },
    leave(el, done) {
      done();
      console.log('1111');
    },
  },
  computed: {
    classWraps() {
      if (this.index === 0) return 'picker-wrap';
    }
  }
}
</script>

<style>
.level0 {
  color: red
}
.level1 {
  color: blue
}
.level2 {
  color: green
}
.current {
  background: #ccc;
}
.flip-list-move {
  transition: transform .2s;
}
.picker-wrap {
  height: 500px;
  overflow: scroll;
}
</style>


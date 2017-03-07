<template lang="pug">
  div
    loading(v-model="isLoading")
    .vux-demo
      img.logo(src="../assets/vux_logo.png")
    panel(:header="msg", :footer="footer", :list="list")
    x-button.mt-10(text="change panel header text", type="primary", @click.native="handleClick()")

</template>

<script>
import { Panel, Loading, XButton } from 'vux'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    Panel,
    Loading,
    XButton
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      // msg: 'Hello World!',
      footer: {
        title: 'hello footer',
        url: ''
      },
      list: [{
        title: 'hello cell 1',
        desc: 'just for test'

      }]
    }
  },
  methods: {
    ...mapActions([
      'TEST'
    ]),
    handleClick () {
      console.log('click me')
      this.TEST()
      console.log(this.$store.state.keyword)
    }
  },
  computed: {
    ...mapState({
      isLoading: state => state.pageLoad.isLoading,
      msg: state => state.keyword
    })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}

.mt-10 {
  margin-top:10px;
}
</style>

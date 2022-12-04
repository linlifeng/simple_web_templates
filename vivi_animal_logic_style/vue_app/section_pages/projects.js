const app = Vue.createApp({
  data() {
    return {
      message: 'Hello Ha!!',
      current_section: "foodiee"
    }
  },
  methods: {
    update_current_section(target_element_id) {
      this.current_section=target_element_id;
    }
  }
})



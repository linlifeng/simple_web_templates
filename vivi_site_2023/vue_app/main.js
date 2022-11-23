const app = Vue.createApp({
  data() {
    return {
      message: 'Hello Ha!!',
      current_section: "home",
      hideSubmenu: true,
      current_project_section: ''
    }
  },
  methods: {
    update_current_section(target_element_id) {
      this.current_section=target_element_id;
    },
    update_current_project_section(target_element_id) {
      this.current_section="projects";
      this.current_project_section=target_element_id;
    },
  }
})



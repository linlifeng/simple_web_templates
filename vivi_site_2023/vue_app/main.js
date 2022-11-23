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
      this.current_project_section='';
    },
    update_current_project_section(target_element_id) {
      this.current_section="home";
      this.current_project_section=target_element_id;
      // alert(target_element_id + ";;;" + this.current_section + ';;;' + this.current_project_section);
    }
  }
})



app.component('navigation_button', {
    props: {
      name: {
        type: String,
        required: true
      },
      display_text: {
        type: String,
        required: true
      },
      target_element_id: {
        type: String,
        required: true
      },
      current_section: {
        type: String,
        required: true
      },
      current_project_section: {
        type: String,
        required: true
      }
    },

    computed: {
      isCurrent() {
        if (this.current_section=="home" && (this.current_project_section=="foodiee" || this.current_project_section=="gallerypal"  || this.current_project_section=="neptune")) {
          return this.current_section == this.target_element_id;
        }else if(this.current_project_section=="foodiee" || this.current_project_section=="gallerypal" || this.current_project_section=="neptune") {
          return this.current_project_section == this.target_element_id;
        }else{
          return this.current_section == this.target_element_id;
        }
      },
      isCurrentProject() {
        return this.current_project_section == this.target_element_id;
      },
      computed_display_text() {
        if (this.current_section=="home" && this.target_element_id=="home" && (this.current_project_section=="foodiee" || this.current_project_section=="gallerypal" || this.current_project_section=="neptune")) {
          return this.display_text + " | " + this.current_project_section;
        }else{
          return this.display_text;
        }
      },
    },

    template: /*html*/
    `
    <!--
    <button v-if="isCurrent" class="active_menu_button" @click="update_current_section()" >{{ display_text }}{{ target_element_id }};;;{{ current_section }};;; {{ current_project_section }}</button>
    <button v-else class="inactive_menu_button" @click="update_current_section()" >{{ display_text }}{{ target_element_id }};;;{{ current_section }};;;{{ current_project_section }}</button>
    -->
    <button v-if="isCurrent" class="active_menu_button" @click="update_current_section()" >{{ computed_display_text }}</button>
    <button v-else class="inactive_menu_button" @click="update_current_section()" >{{ computed_display_text }}</button>
    
    `	
    ,
    methods: {
      update_current_section(){
        this.$emit("update_current_section", this.target_element_id)
      }
    }
  })

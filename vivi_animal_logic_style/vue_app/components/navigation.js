app.component('navigation', {
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
      }
    },
    data() {
      return {
        nothing:""
      }
    },

    computed: {
      isCurrent() {
        return this.current_section == this.target_element_id;
      }
    },

    template: /*html*/
    `   
    <button v-if="isCurrent" class="active_menu_button" @click="update_current_section()" @mouseover=hover_button_effect() >{{ display_text }}</button>
    <button v-else class="inactive_menu_button" @click="update_current_section()" @mouseover=hover_button_effect() >{{ display_text }}</button>
    `	
    ,
    methods: {
      hover_button_effect() {
        null
      },
      update_current_section(){
        this.$emit("update_current_section", this.target_element_id)
      }
    }
  })

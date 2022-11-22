app.component('live_background', {
    props: {
      current_section: {
        type: String,
        required: true
      },
      linked_content: {
        type: String,
        required: true
      },
      image_url: {
        type: String,
        required: true
      }
    },
    data() {
        // background_style: "background: url('./assets/bg1.jpg') no-repeat center center fixed"
    },
    template: /*html*/
    `
        <div :style=background_style v-if=isCurrent></div>
    `,

    computed: {
      isCurrent() {
        return this.current_section == this.linked_content;
      },
      background_style() {
        return "background: url('" + this.image_url + "') no-repeat center center fixed; background-size: cover; width:100%; height:100%; position:fixed; left:0; top:0; background-color:grey; z-index: -20"
      }
    },


})

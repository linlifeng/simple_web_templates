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
    data() {},
    template: /*html*/
    `
    <div v-if=isCurrent id="background0">{{ current_section }} {{ image_url }}Background!!!!!!!!
    </div>
    <style>
    #background0{
        background: url("{{ image_url }}") no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        z-index: -20;
        }
    </style>
    `,

    computed: {
      isCurrent() {
        return this.current_section == this.linked_content;
      }
    },


})

app.component('content', {
    props: {
      current_section: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      content_file_path: {
        type: String,
        required: true
      },
    },
    data() {
      return {
        contents: [
          {"title": "home", "content": "content of home"},
          {"title": "gallery", "content": "gallery content"},
          {"title": "projects", "content": "projects content"}
        ]}
    },
    template: /*html*/
    `
    <div v-if=isCurrent>
      <h1>{{ this.title }}</h1>
      <p>{{ this.content_file_path }}</p>
    </div>
    `,

    computed: {
      isCurrent() {
        return this.current_section == this.title;
      }
    },

})

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
      // return {
      //   contents: [
      //     {"title": "home", "content": "content of home"},
      //     {"title": "about", "content": "about content"},
      //     {"title": "projects", "content": "projects content"},
      //     {"title": "resume", "content": "resume content"}
      //   ]}
    },
    template: /*html*/
    `
    <!--
    <div v-show=isCurrent class="content_box">
      <h1>{{ this.title }}</h1>
      <p>{{ this.content_file_path }}</p>
    </div>
    -->
  
    <div v-if=isCurrent class="content_box">
      <!--<h1>{{ this.title }} {{ this.current_section }} .{{ this.current_project_section }} .{{ isCurrent }}</h1>-->
      <embed type="text/html" :src=this.content_file_path width="100%" height="100%" />
    </div>
    
    `,

    computed: {
      isCurrent() {
        return this.current_section == this.title;
      }
    },

})

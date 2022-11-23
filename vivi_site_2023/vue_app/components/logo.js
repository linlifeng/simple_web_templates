app.component('logo', {
    props: {
        logo_image: {
          type: String,
          required: true
        },
        slogan:{
            type: String,
            required: true
        }
    },
    template: /*html*/
    `
    <div id="logo"><img :src=logo_image /> <span id="slogan">{{ slogan }}</span>
    
    `
  }
)
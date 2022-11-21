app.component('logo', {
    props: {
        logo_image: {
          type: String,
          requireed: true
        }
    },
    template: /*html*/
    `
    <img :src=logo_image id="logo"/>
    
    `
  }
)
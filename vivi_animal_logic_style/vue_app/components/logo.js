app.component('logo', {
    data() {
      return {
        logo_image: "https://animallogic.com/wp-content/uploads/2022/01/AL_Logo-585x425.png"
      }
    },
    template: 
    /*html*/
    `<img :src=logo_image />`
  }
)
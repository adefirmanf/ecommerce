export default {
  state: {
    categories: [
      {
        group: "Fashion Wanita",
        link: "",
        data: [
          {
            name: "Gaun",
            link: ""
          },
          {
            name: "Atasan",
            link: ""
          },
          {
            name: "Gaun",
            link: ""
          },
          { name: "Atasan", link: "" },
          { name: "Bawahan", link: "" },
          { name: "Baju Luaran", link: "" },
          { name: "Jumpsuit & Playsuit", link: "" },
          { name: "Baju Muslim", link: "" },
          { name: "Batik", link: "" },
          { name: "Pakaian Dalam", link: "" },
          { name: "Pakaian Tidur", link: "" },
          { name: "Pakaian Hamil & Menyusui", link: "" }
        ]
      },
      {
        group: "Fashion Pria",
        link: "",
        data: [
          { name: "Atasan", link: "" },
          { name: "Bawahan", link: "" },
          { name: "Baju Luaran", link: "" },
          { name: "Pakaian Dalam", link: "" },
          { name: "Baju Muslim", link: "" },
          { name: "Batik", link: "" }
        ]
      },
      {
        group: "Tas Wanita",
        link: "",
        data: [
          { name: "Ransel", link: "" },
          { name: "Tas Tangan", link: "" },
          { name: "Tas Bahu / Tas Selempang", link: "" },
          { name: "Tas Tote", link: "" },
          { name: "Tas Satchel", link: "" },
          { name: "Clutches", link: "" },
          { name: "Pouch", link: "" }
        ]
      },
      {
        group: "Tas Pria",
        link: "",
        data: [
          { name: "Ransel", link: "" },
          { name: "Tas Messenger", link: "" },
          { name: "Tas Selempang / Tas Bahu", link: "" },
          { name: "Tas Kantor", link: "" },
          { name: "Tas Duffel", link: "" },
          { name: "Tas Pinggang", link: "" },
          { name: "Tas Clutch", link: "" }
        ]
      },
      {
        group: "Sepatu Wanita",
        link: "",
        data: [
          { name: "Sepatu Sneakers Wanita", link: "" },
          { name: "Sepatu Hak Tinggi", link: "" },
          { name: "Sepatu Flat dan Sepatu Balet", link: "" },
          { name: "Wedges", link: "" },
          { name: "Sepatu Boots", link: "" },
          { name: "Sepatu Slip On", link: "" },
          { name: "Sandal Wanita", link: "" }
        ]
      },
      {
        group: "Sepatu Pria",
        link: "",
        data: [
          { name: "Sepatu Sneakers Pria", link: "" },

          { name: "Sepatu Formal Pria", link: "" },

          { name: "Sandal Pria", link: "" },

          { name: "Sepatu Loafers Pria", link: "" },

          { name: "Sepatu Boots Pria", link: "" }
        ]
      },
      {
        group: "Tas Travel & Koper",
        link: "",
        data: [
          { name: "Koper Kabin", link: "" },
          { name: "Koper Bagasi", link: "" },
          { name: "Tas Travel", link: "" },
          { name: "Aksesoris Travel", link: "" }
        ]
      }
    ]
  },
  getters: {
    GET_CATEGORIES: state => state.categories
  }
};

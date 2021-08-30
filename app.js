const app = Vue.createApp({
  data() {
    return {
      url: "https://numint.net",
      showBooks: true,
        books: [
            {title: "The Kingdom of Copper", author: "S. A. Chakraborty", url: "assets/1.png", isFav: true},
            {title: "The City of Brass", author: "S. A. Chakraborty", url: "assets/2.png", isFav: false},
            {title: "The Final Empire", author: "Brandon Sanderson", url: "assets/3.png", isFav: true}
        ]
    };
  },
  methods: {
    toggleShowBooks() {
        this.showBooks = !this.showBooks;
    },
    toggleFavBook(book) {
      book.isFav = !book.isFav;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter(book => {
        return book.isFav;
      });
    }
  }
});

app.mount("#app");


var appH = new Vue({ // header link
  el: '#app-header',
  data: {
    
    logo: "images/logo.png",
    headerLinks: [{
      text: "Home",
      imgA: "images/home.png",
      imgB: "images/home-2.png"
    },
    {
      text: "Pages",
      imgA: "images/document.png",
      imgB: ""
    },
    {
      text: "Blog",
      imgA: "images/printer.png",
      imgB: ""
    },
    {
      text: "Shop",
      imgA: "images/cart.png",
      imgB: ""
    },
    {
      text: "Shortcodes",
      imgA: "images/lab.png",
      imgB: ""
    },
    {
      text: "Support",
      imgA: "images/chat.png",
      imgB: ""
    },
    {
      text: "Contact",
      imgA: "images/envelope.png",
      imgB: ""
    }]

  }

});

var appF = new Vue({ // footer link
  el: '#app-footer',
  data: {
    
    logo: "images/logo_footer.png",
    archivesLinks: [
      "October 2014 (2)",
      "September 2014 (2)",
      "August 2014 (2)",
      "July 2014 (2)",
      "June 2014 (2)",
      "May 2014 (1)"
    ],
    postIcon: "images/date_footer.png",
    postLinks: [{
        img: "images/blog_09-150x150.jpg",
        text: "Drawing and Painting",
        date: "October 03, 2014"
      },
      {
        img: "images/blog_10-150x150.jpg",
        text: "Fall Parents Meeting Day",
        date: "October 03, 2014"
      },
      {
        img: "images/blog_08-150x150.jpg",
        text: "Birthday in Kindergarten",
        date: "September 20, 2014"
      }
    ],
    socialLinks: [
      "images/behance.png",
      "images/dribbble.png",
      "images/envato.png",
      "images/facebook.png",
      "images/twitter.png"
    ]
  }

});
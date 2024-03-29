const data = [
  {
    id: 1,
    category: "Appliances",
    name: "Apple Watch Series 5",
    price: 339.99,
    rating: 4,
    img: "/assets/images/apple-watch-series-5.jpg",
    discription:
      "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
    brand: "apple",
    available: true,
    colors: ["red", "purple", "green"],
  },
  {
    id: 2,
    category: "Cell Phones",
    name: "Apple iPhone 11 (64GB, Black)",
    price: 669.99,
    rating: 5,
    img: "/assets/images/apple-iphone-11.jpg",
    discription:
      "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
    brand: "apple",
    available: true,
    colors: ["red", "purple", "green"],
  },
  {
    id: 3,
    category: "Computers & Tablets",
    name: "Apple iMac 27-inch",
    price: 999.99,
    rating: 4,
    img: "/assets/images/apple-imac-27-inch.jpg",
    discription:
      "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
    brand: "apple",
    available: true,
    colors: ["red", "purple", "green"],
  },
  {
    id: 4,
    category: "Audio",
    name: "OneOdio A71 Wired Headphones",
    price: 49.99,
    rating: 3,
    img: "/assets/images/oneodio-a71-wired-headphones.jpg",
    discription:
      "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
    brand: "apple",
    available: true,
    colors: ["red", "purple", "green"],
  },
  {
    id: 5,
    category: "Computers & Tablets",
    name: "Apple - MacBook Air® (Latest Model) - 13.3 Display - Silver",
    price: 999.99,
    rating: 4,
    img: "/assets/images/apple-macbook-air-13.3-display-silver.jpg",
    discription:
      "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
    brand: "apple",
    available: true,
    colors: ["red", "purple", "green"],
  },
  {
    id: 6,
    category: "Video Games",
    name: "Switch Pro Controller",
    price: 429.99,
    rating: 3,
    img: "/assets/images/switch-pro-controller.jpg",
    discription:
      "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
    brand: "apple",
    available: true,
    colors: ["red", "purple", "green"],
  },
  {
    id: 7,
    category: "Appliances",
    name: "Google - Google Home - White/Slate fabric",
    price: 129.29,
    rating: 4,
    img: "/assets/images/google-home-white-slate-fabric.jpg",
    discription:
      "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
    brand: "google",
    available: true,
    colors: ["red", "purple", "green"],
  },
  {
    id: 8,
    category: "TV & Home Theater",
    name: "Sony 4K Ultra HD LED TV",
    price: 7999.99,
    rating: 5,
    img: "/assets/images/sony-4K-ultra-hd-led-tv.jpg",
    discription:
      "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
    brand: "apple",
    available: true,
    colors: ["red", "purple", "green"],
  },
  {
    id: 9,
    category: "Cell Phones",
    name: "OnePlus 7 Pro",
    price: 14.99,
    rating: 4,
    img: "/assets/images/oneplus-7-pro.jpg",
    discription:
      "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
    brand: "Philips",
    available: true,
    colors: ["red", "purple", "green"],
  },
  {
    id: 10,
    category: "Computers & Tablets",
    name: "Logitech K380 Wireless Keyboard",
    price: 81.99,
    rating: 4,
    img: "/assets/images/logitech-k380-wireless-keyboard.jpg",
    discription:
      "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
    brand: "Logitech",
    available: true,
    colors: ["red", "purple", "green"],
  },
  {
    id: 11,
    category: "Health, Fitness & Beauty",
    name: "Nike Air Max",
    price: 81.99,
    rating: 5,
    img: "/assets/images/nike-air-max.jpg",
    discription:
      "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
    brand: "Nike",
    available: true,
    colors: ["red", "purple", "green"],
  },
  {
    id: 12,
    category: "Computers & Tablets",
    name: "New Apple iPad Pro",
    price: 799.99,
    rating: 4,
    img: "/assets/images/new-apple-ipad-pro.jpg",
    discription:
      "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
    brand: "apple",
    available: true,
    colors: ["red", "purple", "green"],
  },
  {
    id: 13,
    category: "Cameras & Camcorders",
    name: "Vankyo leisure 3 mini projector",
    price: 99.99,
    rating: 2,
    img: "/assets/images/vankyo-leisure-3-mini-projector.jpg",
    discription:
      "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
    brand: "Vankyo Store",
    available: true,
    colors: ["red", "purple", "green"],
  },
  {
    id: 14,
    category: "Appliances",
    name: "Wireless Charger 5W Max",
    price: 10.83,
    rating: 4,
    img: "/assets/images/wireless-charger-5w-max.jpg",
    discription:
      "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
    brand: "3M",
    available: true,
    colors: ["red", "purple", "green"],
  },
  {
    id: 15,
    category: "Computers & Tablets",
    name: "Laptop Bag",
    price: 29.99,
    rating: 5,
    img: "/assets/images/laptop-bag.jpg",
    discription:
      "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
    brand: "TAS",
    available: true,
    colors: ["red", "purple", "green"],
  },
  {
    id: 16,
    name: "Adidas Mens Tech Response Shoes",
    category: "Health, Fitness & Beauty",
    price: 54.59,
    rating: 5,
    img: "/assets/images/adidas-mens-tech-response-shoes.jpg",
    discription:
      "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
    brand: "Adidas",
    available: true,
    colors: ["red", "purple", "green"],
  },
  {
    id: 17,
    category: "Appliances",
    name: "Oculus Quest All-in-one VR",
    price: 645,
    rating: 1,
    img: "/assets/images/oculus-quest-all-in-one-vr.jpg",
    discription:
      "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
    brand: "Oculus",
    available: true,
    colors: ["red", "purple", "green"],
  },
  {
    id: 18,
    category: "Health, Fitness & Beauty",
    name: "Handbags for Women Large Designer bag",
    price: 39.99,
    rating: 4,
    img: "/assets/images/handbags-for-women-large-designer-bag.jpg",
    discription:
      "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
    brand: "Hobo",
    available: true,
    colors: ["red", "purple", "green"],
  },
  {
    id: 19,
    category: "Health, Fitness & Beauty",
    name: "Giotto 32oz Leakproof BPA Free Drinking Water",
    price: 16.99,
    rating: 4,
    img: "/assets/images/giotto-32oz-leakproof-bpa-free-drinking-water.jpg",
    discription:
      "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
    brand: "3M",
    available: true,
    colors: ["red", "purple", "green"],
  },
  {
    id: 20,
    category: "Video Games",
    name: "PlayStation 4 Console",
    price: 339.95,
    rating: 4,
    img: "/assets/images/playstation-4.jpg",
    discription:
      "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
    brand: "Sony",
    available: true,
    colors: ["red", "purple", "green"],
  },
  {
    id: 21,
    category: "Car Electronics & GPS",
    name: "Bugani M90 Portable Bluetooth Speaker",
    price: 56,
    rating: 4,
    img: "/assets/images/bugani-m90-portable-bluetooth-speaker.jpg",
    discription:
      "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
    brand: "Bugani",
    available: true,
    colors: ["red", "purple", "green"],
  },
  {
    id: 22,
    category: "Office & School Supplies",
    name: "Toshiba Canvio Advance 2TB Portable External Hard Drive",
    price: 69.99,
    rating: 4,
    img: "/assets/images/toshiba-canvio.jpg",
    discription:
      "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
    brand: "Toshiba",
    available: true,
    colors: ["red", "purple", "green"],
  },
  {
    id: 23,
    category: "Office & School Supplies",
    name: "Tile Pro - High Performance Bluetooth Tracker",
    price: 29.99,
    rating: 3,
    img: "/assets/images/tile-pro-high-performance-bluetooth-tracker.jpg",
    discription:
      "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
    brand: "Tile",
    available: true,
    colors: ["red", "purple", "green"],
  },
  {
    id: 24,
    category: "Office & School Supplies",
    name: "Ronyes Unisex College Bag Bookbags for Women",
    price: 23.99,
    rating: 2,
    img: "/assets/images/ronyes-unisex-college-bag.jpg",
    discription:
      "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
    brand: "Ronyes",
    available: true,
    colors: ["red", "purple", "green"],
  },
  {
    id: 25,
    category: "Appliances",
    name: "Willful Smart Watch for Men Women 2020,",
    price: 29.99,
    rating: 5,
    img: "/assets/images/willful-smart-watch.jpg",
    discription:
      "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
    brand: "Willful",
    available: true,
    colors: ["red", "purple", "green"],
  },
  {
    id: 26,
    category: "Computers & Tablets",
    name: "VicTsing Wireless Mouse",
    price: 10.99,
    rating: 3,
    img: "/assets/images/victsing-wireless-mouse.jpg",
    discription:
      "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
    brand: "VicTsing",
    available: true,
    colors: ["red", "purple", "green"],
  },
  {
    id: 27,
    category: "Audio",
    name: "Bose Frames Tenor - Rectangular Polarized, Bluetooth Audio Sunglasses",
    price: 249,
    rating: 4,
    img: "/assets/images/bose-frames-tenor.jpg",
    discription:
      "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
    brand: "Bose",
    available: true,
    colors: ["red", "purple", "green"],
  },
];
export default data;

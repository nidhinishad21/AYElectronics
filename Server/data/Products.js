const products = [
  {
    name: "Apple iPhone 11 (Black, 128 GB) Model 2",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144418",
    description:
      "Easy remote access with the Siri Remote Watch your favorite apps like Netflix, Hulu, HBO Now with easy streaming 64 GB of storage, for saving your favorite movies and TV shows Rechargeable battery provides months of battery life HDMI, Ethernet ports available for easy linking to your TV or other devices",
    price: 850,
    countInStock: 1,
    rating: 4.1,
    numReviews: 4,
  },
  {
    name: "Apple iPhone 11 Pro (Silver, 64 GB)",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-silver-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954989256",
    description:
      "Design: An Obsession over Details Four new textured matt glass finishes and stainless-steel design. Featuring a 14.73cm (5.8) Super Retina XDR display, the iPhone 11 Pro is as beautiful as it gets. The IP68 rating ensures that is water-resistant up to 4 meters for 30 minutes.64 GB ROM | 14.73 cm (5.8 inch) Super Retina XDR Display 12MP + 12MP + 12MP | 12MP Front Camera A13 Bionic Chip Processor",
    price: 1216,
    countInStock: 10,
    rating: 3.5,
    numReviews: 2,
  },
  {
    name: "Apple iPhone 11 Pro Max (Midnight Green, 256 GB)",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-midnight-green-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954990073",
    description:
      "Design: An Obsession over Details Four new textured matt glass finishes and stainless-steel design. Featuring a 16.51cm (6.5) Super Retina XDR display, the iPhone 11 Pro Max is as beautiful as it gets. The IP68 rating ensures that is water-resistant up to 4 meters for 30 minutes.64 GB ROM | 16.51 cm (6.5 inch) Super Retina XDR Display 12MP + 12MP + 12MP | 12MP Front Camera A13 Bionic Chip Processor",
    price: 1507,
    countInStock: 0,
    rating: 4.1,
    numReviews: 3,
  },
  {
    name: "Oppo Reno3 Pro",
    image: "https://images-na.ssl-images-amazon.com/images/I/81dxd7vkdZL._SX679_.jpg",
    description:
      "OPPO Reno 3 Pro comes with a premium price tag and loaded with lots of best in class features. The smartphone has several mandatory features including an admirable display, giant storage capacity and a huge battery back up. It is also backed with VOOC fast charging technology so the battery gets recharged in a short duration. These features make it one of the best smartphones around this price. DISPLAY AND CAMERA - OPPO Reno 3 Pro comes with a 6.5 inch AMOLED display. The screen features a resolution of 1,080 x 2400 pixels and a pixel density of 405 PPI to add sharpness to the content streaming.   For the camera, the smartphone comes with a quad-primary lens setup which consists of a 60MP, a 13MP, an 8MP and 2MP lens. The camera set up also allows the users to capture pictures in low lighting conditions. At the front, it has a 32MP lens for clicking superb selfies.",
    price: 339,
    countInStock: 10,
    rating: 4.4,
    numReviews: 9,
  },
  {
    name: "Oppo F11 Pro",
    image: "https://images-na.ssl-images-amazon.com/images/I/51XGenRaMeL._SL1100_.jpg",
    description:
      "Design and Display : The OPPO F11 Pro flaunts a 6.5 inches (16.51 cm) screen with 1080 x 2340 pixels resolution and a pixel density of 396ppi Thanks to the elevating selfie camera, the screen offers an impressive screen-to-body ratio of 90.9 percent. Additionally, the display is protected with Corning Gorilla Glass v5.   OPPO is offering the plastic-clad smartphone in two colour variants - Aurora Green and Thunder Black | Cameras: The OPPO F11 Pro gets a dual rear camera, comprising of 48MP lens and a 5 MP depth camera along with LED flash set up. For the selfie lovers, OPPO has added a 16 MP pop-up camera. Both the cameras can shoot a video at 1920x1080 resolution, at a speed of 30fps. The camera app is loaded with features like  48 MP AI Ultra-clear Engine, Ultra Night Mode, and Dazzle Color Mode",
    price: 245,
    countInStock: 7,
    rating: 4.4,
    numReviews: 2,
  },
  {
    name: "Samsung Galaxy S10 Plus (512GB)",
    image: "https://www.ispyprice.com/static/nwprd_model/samsung-galaxy-s10-plus-512gb-8928.jpg",
    description:
      "Display and Camera :OPPO F15 comes with a 6.4-inch AMOLED display with a waterdrop notch finish. The screen bears a resolution of 1080 x 2400 pixels and a pixel density of 411PPI. There is a Corning Gorilla Glass v5 to safeguard the screen against scratches and marks.  As for the camera, it has a 48MP main lens along with an 8MP, 2MP and a 2MP lens to provide stunning pictures. There is a 16MP at the front to support video calling and selfie features.",
    price: 850,
    countInStock: 0,
    rating: 4.6,
    numReviews: 0,
  },
  {
    name: "Apple MacBook Air Core i5 5th Gen",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=892&hei=820&&qlt=80&.v=1541713862468",
    description:
      "It is fun to use, it is powerful and it looks incredible, meet the Apple MacBook Air. This Sleek and Lightweight laptop is powered by Intel Core i5 5th Gen processor with 8 GB DDR3 RAM and 128 GB of SSD capacity to make multitasking smooth and easy. It is designed with a Backlit Keyboard and its Multi-Touch Trackpad will be an absolute pleasure to use.",
    price: 790,
    countInStock: 0,
    rating: 4.7,
    numReviews: 2,
  },
  {
    name: "Apple MacBook Pro Core i5 8th Gen",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp13touch-space-select-201807?wid=892&hei=820&&qlt=80&.v=1529520060550",
    description:
      "Touchscreen No Screen Size 33.78 cm (13.3 inch) Screen Resolution 2560 x 1600 Pixel Screen Type Quad HD LED Backlit IPS Retina Display (True Tone Technology, Wide Color (P3), 500 nits Brightness) Speakers Built-in Speakers Internal Mic Built-in Three Microphones Sound Properties Stereo Speakers with High Dynamic Range",
    price: 1715,
    countInStock: 0,
    rating:4.5,
    numReviews: 0,
  },
  {
    name: "Lenovo Ideapad 130 Core i5 8th Gen",
    image: "https://rukminim1.flixcart.com/image/416/416/jz7az680/computer/b/3/k/lenovo-na-laptop-original-imafj9wscwkeyu45.jpeg?q=70",
    description:
      "The Lenovo Ideapad 130 is a durable and tough powerhouse of a machine that is designed to be long-lasting. A powerful machine that is equipped with Intel’s i5 processor, you can multitask like a pro on this laptop without feeling any lag in its performance. It also comes with a 39.62 cm HD resolution, wide-angle display and Dolby Audio that let you enjoy your favourite movies and TV shows without straining your eyes. Running on Windows 10, equipped with a number of connectivity options, the Lenovo Ideapad 130 is your daily driver - be it at work or home.",
    price: 1715,
    countInStock: 0,
    rating: 4.1,
    numReviews: 0,
  },
];

export default products;

-- Seeds for the Pins table

INSERT INTO pins (user_id, map_id, title, description, image_url, latitude, longitude, created_at)

-- Values for first map ((1, 'Bing bongs!', 'United Kingdom', 'London', 51.5072, 0.1276, '2022-03-01'))
VALUES (1, 1, 'Big Ben', 'The classic one you all know and love', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Clock_Tower_-_Palace_of_Westminster%2C_London_-_May_2007.jpg/640px-Clock_Tower_-_Palace_of_Westminster%2C_London_-_May_2007.jpg', 51.5007, -0.1246, '2022-03-01'),
       (1, 1, 'St. Annes Limehouse', 'The second highest clock tower in London', 'https://lookup.london/wp-content/uploads/2017/09/Photo-13-09-2017-13-35-33.jpg', 51.5117, -0.0306, '2022-02-01'),
       (1, 1, 'Little Ben', 'Little brother to Big Ben!', 'https://lookup.london/wp-content/uploads/2016/03/FullSizeRender-11-e1458053422352.jpg', 51.4965, -0.1427, '2022-03-01'),

-- Values for second map ((2, 'Cool restaurants', 'Canada', 'Vancouver', 49.2872, 123.1207, '2022-05-02'))
       (2, 2, 'The Naam', 'A vegetarian restaurant with a great atmosphere', 'https://www.thenaam.com/wp-content/uploads/2019/03/Naam-Exterior-1.jpg', 49.26820238076975, -123.16702577269524, '2022-05-02'),
       (2, 2, 'The Acorn', 'A vegan restaurant with a great atmosphere', 'https://www.theacornrestaurant.com/wp-content/uploads/2019/03/IMG_20190307_183000.jpg', 49.2496058860444, -123.10124152666589, '2022-05-02'),
       (2, 2, 'Nook', 'A nice little Italian restaurant', 'https://www.nookrestaurant.ca/wp-content/uploads/2019/03/IMG_20190307_183000.jpg', 49.26953188039269, -123.1092501168743, '2022-05-02'),

-- Values for third map ((3, 'Good dispensaries', 'Canada', 'Toronto', 43.6532, 79.3832, '2022-07-03'))
       (3, 3, 'ShinyBuds Cannabis', 'A great dispensary with a great selection', 'https://lh5.googleusercontent.com/p/AF1QipMBMFpT5JMJ2o5xkUOGQu_2HR17en4zvT8dg897=w408-h306-k-no', 43.711628846940215, -79.53156539291942, '2022-07-03'),
       (3, 3, 'Sessions Cannabis', 'Friendly staff, great bud', 'https://lh5.googleusercontent.com/p/AF1QipNDAQ2mtzNqQgd3FzeHno5InRPM4TGcZWlw1SRS=w408-h306-k-no', 43.73370412470473, -79.53311460362227, '2022-07-03'),
       (3, 3, 'Utopia Cannabis', 'A true utopia for the green', 'https://lh5.googleusercontent.com/p/AF1QipO3Bysy_oHBGDhSJ0xQ7gyGU-pC2pCx-eRQligr=w408-h306-k-no', 43.741726419258434, -79.31803967085865 '2022-07-03'),

-- Values for fourth map ((4, 'Nice beaches', 'United States', 'Miami', 25.7617, 80.1918, '2021-09-04'))
       (4, 4, 'South Pointe Beach', 'A great beach with a great atmosphere', 'https://lh5.googleusercontent.com/p/AF1QipMs0PVundRTVEA46gxp0MEkyvopTedGBXugM_Qk=w408-h306-k-no', 25.767209341487664, -80.13077672074935, '2021-09-04'),
       (4, 4, 'Haulover Beach', 'A beautiful place to relax', 'https://lh5.googleusercontent.com/p/AF1QipM0QS6XaZ6f2L_hG9a13MqtND4u5CVCnKTxd6sY=w426-h240-k-no', 25.912449374948164, -80.12125351017126, '2021-09-04'),
       (4, 4, 'Virginia Key Beach Park', 'An amazing beach park to soak up rays!', 'https://lh5.googleusercontent.com/p/AF1QipMt-GyBFjIyxwnTU4EhPJQV8NA4a2GkNDgWLGG2=w408-h305-k-no', 25.739930615941876, -80.15675728275407, '2021-09-04'),

      --  Values for fifth map ((1, 'Best coffee shops', 'United States', 'New York', 40.7128, -74.0060, '2021-11-05')
        (1, 5, 'Stumptown Coffee Roasters', 'A great coffee shop with a great atmosphere', 'https://lh5.googleusercontent.com/p/AF1QipNtnPBJ2Oi_C2YNamHTXyqU9I8mRBarCIvM5g5v=w408-h272-k-no', 40.7460000054453, -73.98796970948548, '2021-11-05'),
        (1, 5, 'Blue Bottle Coffee', 'A hip chain of coffee shops, this one has the best staff', 'https://lh5.googleusercontent.com/p/AF1QipNDupL6BNw13DiNKEzVyEJC8eLeALxaYQhlB0p9=w408-h306-k-no', 40.752361687887884, -73.97852835953275, '2021-11-05'),
        (1, 5, 'Intelligentsia Coffee', 'An amazing coffee shop to hang out and chill at', 'https://lh5.googleusercontent.com/p/AF1QipOxJyatRS7YpEc4Ol-DT8vFLT0O8vyAOsZb8qmo=w408-h285-k-no', 40.746368993430245, -74.00496423657172, '2021-11-05'),



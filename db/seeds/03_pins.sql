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

-- Values for sixth map ((Best bars', 'Canada', 'Montreal', 45.5019, -73.5674, '2021-12-06'))
       (2, 6, 'Atwater Cocktail Club', 'Cool, dark atmosphere with great cocktails', 'https://lh5.googleusercontent.com/p/AF1QipMbOBfYsSkDixAJvTcZvnSgBP7ZZxiWY_IvbO3B=w426-h240-k-no', 45.48153945861845, -73.5783872161159, '2021-12-06'),
       (2, 6, 'Nacarat Bar', 'Great bar in the Queen Elizabeth Hotel', 'https://lh5.googleusercontent.com/p/AF1QipPBUTuvWGqc7T3Hn7yftVdyalZecrfwQ4ZgaGS4=w408-h271-k-no', 45.50079352591184, -73.56817336441259, '2021-12-06'),
       (2, 6, 'The Coldroom', 'A retro bar for the expensive taste', 'https://lh5.googleusercontent.com/p/AF1QipPUn50bdQiFDkMB_GO_NtVNr-HuqTx7QRW66yt1=w408-h306-k-no', 45.50725165180707, -73.55298145474272, '2021-12-06'),

-- Values for seventh map ((3, 'Best parks', 'United States', 'Chicago', 41.8781, -87.6298, '2022-01-07'))
       (3, 7, 'Grant Park', 'Nice park on the water', 'https://lh5.googleusercontent.com/p/AF1QipOXFwJwbv1E2yxRTzjwAGh4DySf4IHm0qeEoG7O=w408-h306-k-no', 41.87411781171253, -87.61838644843802, '2022-01-07'),
       (3, 7, 'Millenium Park', 'The home of the reflective bean!', 'https://lh5.googleusercontent.com/p/AF1QipNr0_J34QPvK2bUGcWURqJAUXTGxi7a9vt2DMCA=w426-h240-k-no', 41.88269772179942, -87.62225427754194, '2022-01-07'),
       (3, 7, 'Lincoln Park', 'A great park to hang out in, home to a zoo!', 'https://lh5.googleusercontent.com/p/AF1QipM7BMmqIN_dOwk9xEVWKlUa9a-eLz7lvA5bX-JQ=w408-h306-k-no', 41.91579097322775, -87.63064335679078, '2022-01-07'),

-- Values for eighth map ((4, 'Best landmarks', 'Brazil', 'Rio de Janeiro', -22.9068, -43.1729, '2022-02-08'))

       (4, 8, 'Miranto de Leblon', 'A beautiful seaside observation deck', 'https://lh5.googleusercontent.com/p/AF1QipMcU6VX4H5U8HTaBVrIonSOXHLc3V_-BTzug3G1=w408-h306-k-no', -22.989334825019558, -43.226988751520764, '2022-02-08'),
       (4, 8, 'Cristo Redentor', 'A beautiful statue of Jesus Christ', 'https://rederiohoteis.com/wp-content/uploads/2017/09/2017-10-29-cristo-redentor-conhe%C3%A7a-a-historia-dessa-maravilha-do-mundo-moderno2.jpg', -22.951925879459743, -43.21047110679454, '2022-02-08'),
       (4, 8, 'Pao de Acucar', 'A beautiful mountain with a cable car', 'https://lh5.googleusercontent.com/p/AF1QipM-FyxZyoAmsvy3BIo_svP_3-vgmkOa-gao7MKl=w408-h271-k-no', -22.949337045874127, -43.15470447972882, '2022-02-08'),

-- Values for ninth map ((3, 'Best shopping', 'Japan', 'Tokyo', 35.6762, 139.6503, '2022-04-09'))

       (3, 9, '2K540 Aki-Oka Artisan', 'A collection of 50 boutiques selling handcrafted items', 'https://www.g-mark.org/media/award/2011/11G15012/11G15012_01_880x660.jpg?w=880&h=660&m=0', 35.7032091050059, 139.77405845764073, '2022-04-09'),
       (3, 9, 'Tokyo Midtown', 'A large shopping mall with a variety of shops', 'https://lh5.googleusercontent.com/p/AF1QipM12fafaAQDw8qEfjQhx_SA5WHiaCepe34E6l2F=w408-h461-k-no', 35.67365551775211, 139.75922892694095, '2022-04-09'),
       (3, 9, 'Akihabara Radio Center', 'Mall specializing in electronics and vintage items', 'https://lh5.googleusercontent.com/p/AF1QipODmhEGn3z6xjhS6Ffx2WX2d0rEmr3qhn01TWmm=w408-h272-k-no', 35.69839419181165, 139.77150900128962, '2022-04-09');

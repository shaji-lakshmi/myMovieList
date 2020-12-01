//store library
var store = [

witcher = {
    title: 'The Witcher 3: Wild Hunt',
    developer: "CD Projekt RED",
    releaseDate: "May 18, 2015",
    description: "The Witcher 3: Wild Hunt is an action role - playing game with a third-person perspective.Players control Geralt of Rivia, a monster slayer known as a Witcher.Geralt walks, runs, rolls and dodges, and(for thefirst time in the series) jumps, climbs and swims.",
    price: "$39.99",
    genre: "RPG",
    rating: "4/5",
    Platform: "PS",
    image: "imgs/thewitcher.png"
},

FFVII = {
    title: "Final Fantasy VII Remake",
    developer: "Square Enix",
    releaseDate: "March 2, 2020",
    description: "Set in the dystopian cyberpunk metropolis of Midgar, it puts players in the role of a mercenary named Cloud Strife.",
    price: "$59.99",
    genre: "RPG",
    rating: "4.6/5",
    Platform: "PS",
    image: "imgs/FFVII.png"

},

skyrim = {
    title: "The Elder Scrolls V: Skyrim",
    developer: "Bethesda Game Studios, Iron Galaxy",
    releaseDate: "November 11, 2011",
    description: "The game's main story revolves around the player's character, the Dragonborn, on their quest to defeat Alduin the World-Eater, a dragon who is prophesied to destroy the world.",
    price: "$39.99",
    genre: "RPG",
    rating: "4/5",
    Platform: "PC",
    image: "imgs/skyrim.png"

},

monsterHunter = {
    title: "Monster Hunter: World",
    developer: "Capcom",
    releaseDate: "December 22, 2017",
    description: "the player takes the role of a Hunter, tasked to hunt down and either kill or trap monsters that roam in one of several environmental spaces.",
    price: "$29.99",
    genre: "RPG",
    rating: "3/5",
    Platform: "PC",
    image: "imgs/monsterHunter.png"

},

bloodbourne = {
    title: "Bloodborne",
    developer: "FromSoftware, Inc.",
    releaseDate: " March 24, 2015",
    description: " Bloodborne follows the player's character, a Hunter, through the decrepit Gothic, Victorian era–inspired city of Yharnam, whose inhabitants are afflicted with a blood-borne disease. ",
    price: "$34.99",
    genre: "RPG",
    rating: "3/5",
    Platform: "PS",
    image: "imgs/bloodbourne.png"

},

botw = {
    title: "The Legend of Zelda: Breath of the Wild",
    developer: " Nintendo Entertainment Planning & Development",
    releaseDate: "March 3, 2017",
    description: "Breath of the Wild is an action-adventure game set in an open world where players are tasked with exploring the kingdom of Hyrule while controlling Link.",
    price: "$59.99",
    genre: "Action",
    rating: "4/5",
    Platform: "Switch",
    image: "imgs/botw.png"

},

ghostofTsushima = {
    title: "The Ghost of Tsushima",
    developer: "Sucker Punch Development",
    releaseDate: "July 17, 2020",
    description: "Featuring an open world, it follows Jin Sakai, a samurai on a quest to protect Tsushima Island during the first Mongol invasion of Japan.",
    price: "$59.99",
    genre: "Action",
    rating: "4/5",
    Platform: "PS",
    image: "imgs/tsushima.png"

},

amongUS = {
    title: "Among Us",
    developer: "Sucker Punch Development",
    releaseDate: "July 17, 2020",
    description: "The goal of the Crewmates is to identify the Impostors, eliminate them, and complete tasks around the map; the Impostors' goal is to covertly sabotage and kill the Crewmates before they complete all their tasks.",
    price: "$4.99",
    genre: "Action",
    rating: "2/5",
    Platform: "Mobile",
    image: "imgs/amongus.png"
},

minecraft = {
    title: "Minecraft",
    developer: "Mojang Studios, Other Ocean Interactive, 4J Studios, Xbox Game Studios",
    releaseDate: " May 17, 2009",
    description: "Players explore a blocky, procedurally-generated 3D world with infinite terrain, and may discover and extract raw materials, craft tools and items, and build structures or earthworks",
    price: "$26.95",
    genre: "Action",
    rating: "5/5",
    Platform: "XBOX",
    image: "imgs/minecraft.png"

},

PUBG = {
    title: "PlayerUnknown's Battlegrounds",
    developer: "PUBG Corporation, KRAFTON",
    releaseDate: "July 17, 2020",
    description: "In the game, up to one hundred players parachute onto an island and scavenge for weapons and equipment to kill others while avoiding getting killed themselves.",
    price: "$29.99",
    genre: "Action,FPS",
    rating: "3/5",
    Platform: "XBOX",
    image: "imgs/PUBG.png"

},

blackDesert = {
    title: "Black Desert Online",
    developer: " Pearl Abyss",
    releaseDate: " December 2014",
    description: "A sandbox-oriented fantasy massively multiplayer online role-playing game (MMORPG) developed by Korean video game developer Pearl Abyss ",
    price: "$10.00",
    genre: "MMO",
    rating: "3/5",
    Platform: "PC",
    image: "imgs/blackDesert.png"

},

dota = {
    title: "Dota 2",
    developer: "Valve Corporation",
    releaseDate: "July 9, 2013",
    description: "Dota 2 is played in matches between two teams of five players, with each team occupying and defending their own separate base on the map.",
    price: "FREE",
    genre: "MMO",
    rating: "5/5",
    Platform: "PC",
    image: "imgs/dota.png"

},

starcraft = {
    title: "StarCraft II",
    developer: "Blizzard Entertainment, Saffire, nStigate Games, Swingin' Ape Studios",
    releaseDate: " March 31, 1998",
    description: "StarCraft is a 1998 military science fiction real-time strategy game developed and published by Blizzard Entertainment for Microsoft Windows.",
    price: "$29.99",
    genre: "MMO",
    rating: "4/5",
    Platform: "PC",
    image: "imgs/starcraft.png"

},

lol = {
    title: "League of Legends",
    developer: "Riot Games",
    releaseDate: "October 27, 2009",
    description: "In League of Legends, players form a team of five and assume the role of a champion, characters with unique abilities, generally varying around a type of class, and battle against a team of player- or computer-controlled champions. ",
    price: "FREE",
    genre: "MMO",
    rating: "2/5",
    Platform: "PC",
    image: "imgs/LoL.png"

},

phantasyStar = {
    title: "Phantasy Star Online 2",
    developer: "Sega, Online R&D",
    releaseDate: "July 4, 2012",
    description: " Phantasy Star Online 2 is action-oriented, and features a diverse selection of weapon types and playstyles for the player to choose from",
    price: "FREE",
    genre: "MMO",
    rating: "5/5",
    Platform: "PC",
    image: "imgs/phantasyStar.png"

},

genshinImpact = {
    title: "Genshin Impact",
    developer: "miHoYo",
    releaseDate: "September 28, 2020",
    description: "Like Nintendo's The Legend of Zelda: Breath of the Wild – which it heavily resembles, at least on a surface level – Genshin Impact is an action-packed role-playing game with a huge world, chock-full of gorgeous vistas to explore by running, climbing and gliding. ",
    price: "FREE",
    genre: "MMO",
    rating: "3/5",
    Platform: "Mobile",
    image: "imgs/genshinImpact.png"

},

overwatch = {
    title: "Overwatch",
    developer: " Blizzard Entertainment, Iron Galaxy",
    releaseDate: "October 27, 2015",
    description: "Overwatch assigns players into two teams of six, with each player selecting from a roster of over 30 characters, known as heroes, each with a unique style of play that is divided into three general roles that fit their purpose. ",
    price: "$39.99",
    genre: "FPS",
    rating: "4/5",
    Platform: "PS4",
    image: "imgs/overwatch.png"

},

valorant = {
    title: "Valorant",
    developer: "Riot Games",
    releaseDate: "June 2, 2020",
    description: "Agents have unique abilities, each requiring charges, as well as a unique ultimate ability which requires charging through kills, deaths, or spike actions. ",
    price: "FREE",
    genre: "FPS",
    rating: "5/5",
    Platform: "PC",
    image: "imgs/valorant.png"

},

csgo = {
    title: "Phantasy Star Online 2",
    developer: "Sega, Online R&D",
    releaseDate: "August 21, 2012",
    description: "The game pits two teams against each other: the Terrorists and the Counter-Terrorists. Both sides are tasked with eliminating the other while also completing separate objectives.",
    price: "FREE",
    genre: "FPS",
    rating: "4/5",
    Platform: "PC",
    image: "imgs/csgo.png"

},

seige = {
    title: "Tom Clancy's Rainbow Six Siege",
    developer: "Ubisoft Montreal",
    releaseDate: "April 7, 2015",
    description: "Each player assumes control of an attacker or a defender in different gameplay modes such as rescuing a hostage, defusing a bomb, and taking control of an objective within a room.",
    price: "FREE",
    genre: "FPS",
    rating: "5/5",
    Platform: "XBOX",
    image: "imgs/seige.png"

},

osu = {
    title: "Osu!",
    developer: "Dean Herbert",
    releaseDate: "September 16, 2007",
    description: "These are played with beatmaps (or maps for short). For osu!standard, maps consist of three items – hit circles, sliders, and spinners..",
    price: "FREE",
    genre: "Rhythm",
    rating: "5/5",
    Platform: "XBOX",
    image: "imgs/osu.png"

},

mikuMegaMix = {
    title: "Hatsune Miku: Project DIVA MegaMix",
    developer: "Sega AM2",
    releaseDate: " February 13, 2020",
    description: "Hatsune Miku makes her Nintendo Switch debut in Hatsune Miku: Project DIVA Mega Mix! Take the stage!",
    price: "$39.99",
    genre: "Rhythm",
    rating: "5/5",
    Platform: "Switch",
    image: "imgs/mikuswitch.png"

},

museDash = {
    title: "Muse Dash",
    developer: "PeroPeroGames",
    releaseDate: "Muse Dash",
    description: "Are you ready to literally kick it to the beats?!",
    price: "$2.99",
    genre: "Rhythm",
    rating: "5/5",
    Platform: "Switch",
    image: "imgs/museDash.png"

},

beatSaber = {
    title: "Beat Saber",
    developer: "Beat Games, Beat Games s.r.o.",
    releaseDate: "May 1, 2018",
    description: "The game takes place in a surrealistic neon noir environment and features the player slicing blocks representing musical beats with a pair of contrasting colored sabers",
    price: "$29.99",
    genre: "Rhythm",
    rating: "4/5",
    Platform: "PS4",
    image: "imgs/beatSaber.png"

},

mikuFutureTone = {
    title: "Hatsune Miku: Project DIVA Arcade Future Tone",
    developer: "Sega",
    releaseDate: "November 21, 2013",
    description: "Explore the infinite world of Hatsune Miku through the most comprehensive Project DIVA game ever released! ",
    price: "$59.99",
    genre: "Rhythm",
    rating: "5/5",
    Platform: "PS4",
    image: "imgs/mikuPS4.png"

    }

];


window.onload = function () {

    function getPlatform(platform) {

        for (var i = 0; i < store.length; i++) {

            //searches the array for matching platforms
            if (store[i].Platform == platform) {

                //adds title and price to results
                var title = document.createElement("h1");
                title.innerHTML = store[i].title + ", " + store[i].price;

               

                var info = document.createElement("p");
                info.innerHTML = "<br />Full Title: " + store[i].title + "<br />Developer: " + store[i].releaseDate + "<br />Description: " + store[i].description + "<br />Price: " + store[i].price + "<br />Genre: " + store[i].genre + "<br />Rating: " + store[i].rating + "<br />Platform: " + store[i].Platform


                //adds image to results
                var pic = document.createElement("img");
                pic.setAttribute("src", store[i].image);
                pic.style.width = "25%";
                

                //displays results
                var div = document.createElement("div");
                div.appendChild(title);
                div.appendChild(info);
                div.appendChild(pic);
                document.getElementById("results").appendChild(div);

            }
        }

    };



    function getGenre(genre) {

        for (var i = 0; i < store.length; i++) {


            //searches the array for matching platforms
            if (store[i].genre == genre) {
                //clears results


                //adds title and price to results
                var title = document.createElement("h1");
                title.innerHTML = store[i].title + ", " + store[i].price;

                /*var open = document.createElement("button");
                open.setAttribute("id" + "open");
                open.style.width = "50px";

                open.onclick = function () {

                    var info = document.createElement("p");
                    info.innerHTML = "<br />Full Title: " + store[i].title + "<br />Developer: " + store[i].releaseDate + "<br />Description: " + store[i].description + "<br />Price: " + store[i].price + "<br />Genre: " + store[i].genre + "<br />Rating: " + store[i].rating + "<br />Platform: " + store[i].Platform

                };*/

                //adds image to results
                var pic = document.createElement("img");
                pic.setAttribute("src", store[i].image);
                pic.style.width = "25%";



                //displays results
                var div = document.createElement("div");
                div.appendChild(title);
                div.appendChild(pic);
                document.getElementById("results").appendChild(div);

                /*var p = document.createElement("p");
                p.appendChild(open);
                document.getElementById("gameInfo").appendChild(p);*/

            }

        }
    };

    var ddlPlatform_Changed = function () {

        //clears results when ddl is changed
        document.getElementById("results").innerHTML = "";

        document.getElementById("artGallery").innerHTML = "";

        // Get the platform selected from the drop-down list
        var platform = document.getElementById("ddlPlatform").value;
        getPlatform(platform);
        

    };

    var ddlGenre_Changed = function () {

        //clears results when ddl is changed
        document.getElementById("results").innerHTML = "";

        document.getElementById("artGallery").innerHTML = "";


        // Get the platform selected from the drop-down list
        var genre = document.getElementById("ddlGenre").value;
        getGenre(genre);


    };

    // Attach the  platform drop-down list's on change event handler
    document.getElementById("ddlPlatform").onchange = ddlPlatform_Changed;

    // Attach the platform drop-down list's on change event handler
    document.getElementById("ddlGenre").onchange = ddlGenre_Changed;
};









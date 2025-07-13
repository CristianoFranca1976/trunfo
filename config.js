// cards

const cards = [
    {
        name: "London",
        image: "image/london.jpg",
        attributes: {
            area: 1572,
            population: 8945309,
            density: 5690,
            postcodeAreas: 120,
            rankUK: 1
        }
    },
    {
        name: "Nottingham",
        image: "image/nottingham.jpg",
        attributes: {
            area: 74.36,
            population: 321500,
            density: 4325,
            postcodeAreas: 12,
            rankUK: 9
        }
    },
    {
        name: "Manchester",
        image: "image/manchester.jpg",
        attributes: {
            area: 115.6,
            population: 553230,
            density: 4785,
            postcodeAreas: 35,
            rankUK: 6
        }
    },
    {
        name: "Birmingham",
        image: "image/birmingham.jpg",
        attributes: {
            area: 103.3,
            population: 1141374,
            density: 11500,
            postcodeAreas: 40,
            rankUK: 2
        }
    },
    {
        name: "Liverpool",
        image: "image/liverpool.jpg",
        attributes: {
            area: 2.5,
            population: 1500,
            density: 600,
            postcodeAreas: 15,
            rankUK: 9
        }
    },
    {
        name: "Bristol",
        image: "image/bristol.jpg",
        attributes: {
            area: 37,
            population: 463400,
            density: 12500,
            postcodeAreas: 20,
            rankUK: 10
        }
    },
    {
        name: "Oxford",
        image: "image/oxford.jpg",
        attributes: {
            area: 45.59,
            population: 154326,
            density: 3390,
            postcodeAreas: 12,
            rankUK: 5
        }
    },
    {
        name: "Coventry",
        image: "image/conventry.jpg",
        attributes: {
            area: 102.93,
            population: 371521,
            density: 3600,
            postcodeAreas: 12,
            rankUK: 12
        }
    },
    {
        name: "Brington",
        image: "image/brington.jpg",
        attributes: {
            area: 50,
            population: 200000,
            density: 4000,
            postcodeAreas: 10,
            rankUK: 12
        }
    },
    {
        name: "Newcastle upon Tyne",
        image: "image/newcastle.jpg",
        attributes: {
            area: 114.9,
            population: 149000,
            density: 1300,
            postcodeAreas: 12,
            rankUK: 16
        }
    },
    {
        name: "Sheffield",
        image: "image/sheffield.jpg",
        attributes: {
            area: 367.6,
            population: 584853,
            density: 1600,
            postcodeAreas: 28,
            rankUK: 11
        }
    },
    {
        name: "Cambridge",
        image: "image/cambridge.jpg",
        attributes: {
            area: 40.70,
            population: 130818,
            density: 3215,
            postcodeAreas: 12,
            rankUK: 6
        }
    },
    {
        name: "Leeds",
        image: "image/leeds.jpg",
        attributes: {
            area: 113.5,
            population: 789194,
            density: 6950,
            postcodeAreas: 33,
            rankUK: 4
        }
    },
    {
        name: "Bath",
        image: "image/bath.jpg",
        attributes: {
            area: 9.83,
            population: 89000,
            density: 2900,
            postcodeAreas: 12,
            rankUK: 14
        }
    },
    {
        name: "Leicester",
        image: "image/leicester.jpg",
        attributes: {
            area: 116.2,
            population: 354224,
            density: 3050,
            postcodeAreas: 16,
            rankUK: 10
        }
    },
    {
        name: "Southampton",
        image: "image/southampton.jpg",
        attributes: {
            area: 51.3,
            population: 252796,
            density: 4900,
            postcodeAreas: 2,
            rankUK: 18
        }
    },
    {
        name: "Plymouth",
        image: "image/plymouth.jpg",
        attributes: {
            area: 364.0,
            population: 262000,
            density: 720,
            postcodeAreas: 1,
            rankUK: 22
        }
    },
    {
        name: "Portsmouth",
        image: "image/portsmouth.jpg",
        attributes: {
            area: 40.3,
            population: 205000,
            density: 5080,
            postcodeAreas: 1,
            rankUK: 24
        }
    },
    {
        name: "Kingston upon Hull",
        image: "image/KingstonUponHull.jpg",
        attributes: {
            area: 71.45,
            population: 260000,
            density: 3600,
            postcodeAreas: 1,
            rankUK: 25
        }
    },
    {
        name: "Bradford",
        image: "image/bradford.jpg",
        attributes: {
            area: 365.2,
            population: 537173,
            density: 1500,
            postcodeAreas: 1,
            rankUK: 26
        }
    },
    {
        name: "Cardiff",
        image: "image/cardiff.jpg",
        attributes: {
            area: 140.3,
            population: 362756,
            density: 2580,
            postcodeAreas: 1,
            rankUK: 28
        }
    },
    {
        name: "Derby",
        image: "image/derby.jpg",
        attributes: {
            area: 78.03,
            population: 257174,
            density: 3300,
            postcodeAreas: 1,
            rankUK: 28
        }
    },
    {
        name: "Stoke-on-Trent",
        image: "image/stokeontrent.jpg",
        attributes: {
            area: 92.74,
            population: 249008,
            density: 2685,
            postcodeAreas: 1,
            rankUK: 30
        }
    },
    {
        name: "Bournemouth",
        image: "image/bournemouth.jpg",
        attributes: {
            area: 46.8,
            population: 197700,
            density: 4200,
            postcodeAreas: 1,
            rankUK: 32
        }
    },
    {
        name: "Whitby",
        image: "image/whitby.jpg",
        attributes: {
            area: 12.0,
            population: 13213,
            density: 1100,
            postcodeAreas: 1,
            rankUK: 34
        }
    },
    {
        name: "Durham",
        image: "image/durham.jpg",
        attributes: {
            area: 223.0,
            population: 48069,
            density: 215,
            postcodeAreas: 1,
            rankUK: 36
        }
    },
    {
        name: "Harrogate",
        image: "image/harrogate.jpg",
        attributes: {
            area: 88.0,
            population: 75070,
            density: 853,
            postcodeAreas: 1,
            rankUK: 38
        }
    },
    {
        name: "Edinburgh",
        image: "image/edinburgh.jpg",
        attributes: {
            area: 264,
            population: 540000,
            density: 2045,
            postcodeAreas: 1,
            rankUK: 40
        }
    },
    {
        name: "Reading",
        image: "image/reading.jpg",
        attributes: {
            area: 40.2,
            population: 163203,
            density: 4000,
            postcodeAreas: 1,
            rankUK: 42
        }
    },
    {
        name: "Doncaster",
        image: "image/doncaster.jpg",
        attributes: {
            area: 360.0,
            population: 310000,
            density: 861,
            postcodeAreas: 22,
            rankUK: 65
        }
    },
     {
        name: "St Albans",
        image: "image/StAlbans.jpg",
        attributes: {
            area: 40.6,
            population: 147000,
            density: 3600,
            postcodeAreas: 8,
            rankUK: 73
        }
    },
    {
        name: "Alnwick",
        image: "image/alnwick.jpg",
        attributes: {
            area: 1.0,
            population: 8000,
            density: 8000,
            postcodeAreas: 4,
            rankUK: 99
        }
    },
    {
        name: "Carlisle",
        image: "image/carlisle.jpg",
        attributes: {
            area: 104.0,
            population: 75000,
            density: 721,
            postcodeAreas: 10,
            rankUK: 92
        }
    },
    {
        name: "York",
        image: "image/york.jpg",
        attributes: {
            area: 271.9,
            population: 208000,
            density: 765,
            postcodeAreas: 14,
            rankUK: 52
        }
    },
    {
        name: "Salisbury",
        image: "image/salisbury.jpg",
        attributes: {
            area: 39.0,
            population: 40302,
            density: 1000,
            postcodeAreas: 6,
            rankUK: 105
        }
    },
    {
        name: "Glasgow",
        image: "image/glasgow.jpg",
        attributes: {
            area: 175.5,
            population: 635640,
            density: 3620,
            postcodeAreas: 45,
            rankUK: 5
        }
    },
    {
        name: "Norwich",
        image: "image/norwich.jpg",
        attributes: {
            area: 39.0,
            population: 213166,
            density: 5000,
            postcodeAreas: 18,
            rankUK: 50
        }
    },
    {
        name: "Burford",
        image: "image/burford.jpg",
        attributes: {
            area: 1.0,
            population: 1000,
            density: 1000,
            postcodeAreas: 3,
            rankUK: 145
        }
    },
    {
        name: "Gloucester",
        image: "image/gloucester.jpg",
        attributes: {
            area: 5.0,
            population: 32000,
            density: 6400,
            postcodeAreas: 7,
            rankUK: 85
        }
    },
    {
        name: "Chelmsford",
        image: "image/chelmsford.jpg",
        attributes: {
            area: 88.0,
            population: 180000,
            density: 2045,
            postcodeAreas: 13,
            rankUK: 42
        }
    },
    {
        name: "Berwick-upon-Tweed",
        image: "image/BerwickUponTweed.jpg",
        attributes: {
            area: 51.0,
            population: 32000,
            density: 627,
            postcodeAreas: 5,
            rankUK: 142
        }
    },
    {
        name: "Sunderland",
        image: "image/sunderland.jpg",
        attributes: {
            area: 362.0,
            population: 174000,
            density: 482,
            postcodeAreas: 15,
            rankUK: 80
        }
    },
    {
        name: "Milton Keynes",
        image: "image/MiltonKeynes.jpg",
        attributes: {
            area: 89.0,
            population: 270000,
            density: 3000,
            postcodeAreas: 12,
            rankUK: 45
        }
    },
    {
        name: "Exeter",
        image: "image/exeter.jpg",
        attributes: {
            area: 47.0,
            population: 130428,
            density: 2775,
            postcodeAreas: 11,
            rankUK: 91
        }
    },
    {
        name: "Ripon",
        image: "image/ripon.jpg",
        attributes: {
            area: 28.0,
            population: 16000,
            density: 571,
            postcodeAreas: 4,
            rankUK: 153
        }
    },
    {
        name: "Windsor",
        image: "image/windsor.jpg",
        attributes: {
            area: 40.0,
            population: 32000,
            density: 800,
            postcodeAreas: 5,
            rankUK: 120
        }
    },
    {
        name: "Stamford",
        image: "image/stamford.jpg",
        attributes: {
            area: 10.0,
            population: 20000,
            density: 2000,
            postcodeAreas: 3,
            rankUK: 160
        }
    },
    {
        name: "Sandwich",
        image: "image/sandwich.jpg",
        attributes: {
            area: 5.0,
            population: 4000,
            density: 800,
            postcodeAreas: 2,
            rankUK: 170
        }
    }
];

console.log( cards.length );


cards.forEach(card => {
    console.log(`Name: ${card.name}, Area: ${card.attributes.area}, Population: ${card.attributes.population}`);
});

export { cards };
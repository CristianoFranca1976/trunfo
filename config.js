// cards

const cards = [
    {
        name: "London",
        image: "image/london.jpg",
        attributes: {
            area: 1737.9,
            population: 9787.426,
            density: 5.630,
            postcodeAreas: 120,
            rankUK: 1
        }
    },
    {
        name: "Nottingham",
        image: "image/nottingham.jpg",
        attributes: {
            area: 176.4,
            population: 729.977,
            density: 4.139,
            postcodeAreas: 12,
            rankUK: 9
        }
    },
    {
        name: "Manchester",
        image: "image/manchester.jpg",
        attributes: {
            area: 630.3,
            population: 2553.379,
            density: 4.051,
            postcodeAreas: 35,
            rankUK: 2
        }
    },
    {
        name: "Birmingham",
        image: "image/birmingham.jpg",
        attributes: {
            area: 598.9,
            population: 2440.986,
            density: 4.076,
            postcodeAreas: 40,
            rankUK: 3
        }
    },
    {
        name: "Liverpool",
        image: "image/liverpool.jpg",
        attributes: {
            area: 199.6,
            population: 864.122,
            density: 4.329,
            postcodeAreas: 15,
            rankUK: 6
        }
    },
    {
        name: "Bristol",
        image: "image/bristol.jpg",
        attributes: {
            area: 144.4,
            population: 617.280,
            density: 4.274,
            postcodeAreas: 20,
            rankUK: 11
        }
    },
    {
        name: "Oxford",
        image: "image/oxford.jpg",
        attributes: {
            area: 37.4,
            population: 171.380,
            density: 4.585,
            postcodeAreas: 12,
            rankUK: 45
        }
    },
    {
        name: "Coventry",
        image: "image/conventry.jpg",
        attributes: {
            area: 81.3,
            population: 359.262,
            density: 4.420,
            postcodeAreas: 12,
            rankUK: 20
        }
    },
    {
        name: "Brington",
        image: "image/brington.jpg",
        attributes: {
            area: 89.4,
            population: 474.485,
            density: 5.304,
            postcodeAreas: 10,
            rankUK: 15
        }
    },
    {
        name: "Newcastle upon Tyne",
        image: "image/newcastle.jpg",
        attributes: {
            area: 180.5,
            population: 774.891,
            density: 4.292,
            postcodeAreas: 12,
            rankUK: 8
        }
    },
    {
        name: "Sheffield",
        image: "image/sheffield.jpg",
        attributes: {
            area: 167.5,
            population: 685.368,
            density: 4.092,
            postcodeAreas: 28,
            rankUK: 10
        }
    },
    {
        name: "Cambridge",
        image: "image/cambridge.jpg",
        attributes: {
            area: 42.1,
            population: 158.434,
            density: 3.760,
            postcodeAreas: 12,
            rankUK: 49
        }
    },
    {
        name: "Leeds",
        image: "image/leeds.jpg",
        attributes: {
            area: 487.8,
            population: 1777.934,
            density: 6950,
            postcodeAreas: 33,
            rankUK: 4
        }
    },
    {
        name: "Bath",
        image: "image/bath.jpg",
        attributes: {
            area: 29.0,
            population: 94.092,
            density: 3.214,
            postcodeAreas: 12,
            rankUK: 14
        }
    },
    {
        name: "Leicester",
        image: "image/leicester.jpg",
        attributes: {
            area: 109.4,
            population: 508.916,
            density: 4.653,
            postcodeAreas: 16,
            rankUK: 13
        }
    },
    {
        name: "Southampton",
        image: "image/southampton.jpg",
        attributes: {
            area: 192.0,
            population: 855.569,
            density: 4.455,
            postcodeAreas: 2,
            rankUK: 7
        }
    },
    {
        name: "Plymouth",
        image: "image/plymouth.jpg",
        attributes: {
            area: 59.7,
            population: 260.263,
            density: 4.356,
            postcodeAreas: 1,
            rankUK: 30
        }
    },
    {
        name: "Tyneside",
        image: "image/tyneside.jpg",
        attributes: {
            area: 180.5,
            population: 774.891,
            density: 4.292,
            postcodeAreas: 1,
            rankUK: 8
        }
    },
    {
        name: "Kingston upon Hull",
        image: "image/KingstonUponHull.jpg",
        attributes: {
            area: 82.6,
            population: 314.018,
            density: 3.802,
            postcodeAreas: 1,
            rankUK: 24
        }
    },
    {
        name: "Belfast",
        image: "image/belfast.jpg",
        attributes: {
            area: 960,
            population: 595.879,
            density: 620,
            postcodeAreas: 1,
            rankUK: 12
        }
    },
    {
        name: "Cardiff",
        image: "image/cardiff.jpg",
        attributes: {
            area: 102.3,
            population: 447.287,
            density: 4.370,
            postcodeAreas: 1,
            rankUK: 17
        }
    },
    {
        name: "Derby",
        image: "image/derby.jpg",
        attributes: {
            area: 64.1,
            population: 270.468,
            density: 4.219,
            postcodeAreas: 1,
            rankUK: 29
        }
    },
    {
        name: "Stoke-on-Trent",
        image: "image/stokeontrent.jpg",
        attributes: {
            area: 103.9,
            population: 372.775,
            density: 3.588,
            postcodeAreas: 1,
            rankUK: 19
        }
    },
    {
        name: "Bournemouth",
        image: "image/bournemouth.jpg",
        attributes: {
            area: 131.0,
            population: 466.266,
            density: 4200,
            postcodeAreas: 1,
            rankUK: 16
        } // atualizado ate aqui.
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
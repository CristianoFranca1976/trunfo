// cards

const cards = [
    {
        name: "London",
        image: "image/london.jpg",
        attributes: {
            area: 1737.9,
            population: 9787.426,
            density: 5.630,
            subdivisions: 8,
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
            subdivisions: 6,
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
            subdivisions: 11,
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
            subdivisions: 6,
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
            subdivisions: 7,
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
            subdivisions: 9,
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
            subdivisions: 3,
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
            subdivisions: 2,
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
            subdivisions: 4,
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
            subdivisions: 4,
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
            subdivisions: 3,
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
            subdivisions: 4,
            rankUK: 49
        }
    },
    {
        name: "Leeds",
        image: "image/leeds.jpg",
        attributes: {
            area: 487.8,
            population: 1777.934,
            density: 6.950,
            subdivisions: 7,
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
            subdivisions: 3,
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
            subdivisions: 8,
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
            subdivisions: 6,
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
            subdivisions: 1,
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
            subdivisions: 4,
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
            subdivisions: 3,
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
            subdivisions: 6,
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
            subdivisions: 4,
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
            subdivisions: 3,
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
            subdivisions: 3,
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
            subdivisions: 6,
            rankUK: 16
        } 
    },
    {
        name: "Teesside",
        image: "image/teesside.jpg",
        attributes: {
            area: 108.2,
            population: 376.633,
            density: 3.482,
            subdivisions: 4,
            rankUK: 18        }
    },
    {
        name: "Birkenhead",
        image: "image/birkenhead.jpg",
        attributes: {
            area: 88.2,
            population: 325.264,
            density: 3.687,
            subdivisions: 2,
            rankUK: 22
        }
    },
    {
        name: "Preston",
        image: "image/Preston.jpg",
        attributes: {
            area: 82.4,
            population: 313.322,
            density: 3.802,
            subdivisions: 5,
            rankUK: 25
        }
    },
    {
        name: "Edinburgh",
        image: "image/edinburgh.jpg",
        attributes: {
            area: 125,
            population: 482.270,
            density: 4.172,
            subdivisions: 3,
            rankUK: 14
        }
    },
    {
        name: "Reading",
        image: "image/reading.jpg",
        attributes: {
            area: 83.7,
            population: 318.014,
            density: 3.800,
            subdivisions: 4,
            rankUK: 23
        }
    },
    {
        name: "Doncaster",
        image: "image/doncaster.jpg",
        attributes: {
            area: 43.5,
            population: 158.141,
            density: 3.634,
            subdivisions: 4,
            rankUK: 50
        }
    },
     {
        name: "Newport",
        image: "image/newport.jpg",
        attributes: {
            area: 84.2,
            population: 306.844,
            density: 3.643,
            subdivisions: 6,
            rankUK: 26
        }
    },
    {
        name: "Swansea",
        image: "image/alnwick.jpg",
        attributes: {
            area: 87.6,
            population: 300.352,
            density: 3.431,
            subdivisions: 5,
            rankUK: 27
        }
    },
    {
        name: "Luton",
        image: "image/luton.jpg",
        attributes: {
            area: 50.7,
            population: 258.018,
            density: 5.088,
            subdivisions: 3,
            rankUK: 31
        }
    },
    {
        name: "York",
        image: "image/york.jpg",
        attributes: {
            area: 34.0,
            population: 153.717,
            density: 4.518,
            subdivisions: 6,
            rankUK: 52
        }
    },
    {
        name: "Blackpool",
        image: "image/blackpool.jpg",
        attributes: {
            area: 61.3,
            population: 239.409,
            density: 3.908,
            subdivisions: 5,
            rankUK: 34
        }
    },
    {
        name: "Aberdeen",
        image: "image/aberdeen.jpg",
        attributes: {
            area: 69.5,
            population: 208.190,
            density: 3.050,
            subdivisions: 1,
            rankUK: 39
        }
    },
    {
        name: "Swindon",
        image: "image/swindon.jpg",
        attributes: {
            area: 47.1,
            population: 185.609,
            density: 3.945,
            subdivisions: 6,
            rankUK: 40
        }
    },
    {
        name: "Crawley",
        image: "image/crawley.jpg",
        attributes: {
            area: 58.1,
            population: 180.508,
            density: 3.107,
            subdivisions: 5,
            rankUK: 41
        }
    },
    {
        name: "Gloucester",
        image: "image/gloucester.jpg",
        attributes: {
            area: 40.4,
            population: 150.053,
            density: 3.718,
            subdivisions: 2,
            rankUK: 53
        }
    },
    {
        name: "Chelmsford",
        image: "image/chelmsford.jpg",
        attributes: {
            area: 26.2,
            population: 111.511,
            density: 4.259,
            subdivisions: 2,
            rankUK: 72
        }
    },
    {
        name: "Ipswich",
        image: "image/ipswich.jpg",
        attributes: {
            area: 49.1,
            population: 178.835,
            density: 3.639,
            subdivisions: 3,
            rankUK: 42
        }
    },
    {
        name: "Sunderland",
        image: "image/sunderland.jpg",
        attributes: {
            area: 137.5,
            population: 335.415,
            density: 4.018,
            subdivisions: 4,
            rankUK: 21
        }
    },
    {
        name: "Milton Keynes",
        image: "image/MiltonKeynes.jpg",
        attributes: {
            area: 62.5,
            population: 229.941,
            density: 3.678,
            subdivisions: 4,
            rankUK: 35
        }
    },
    {
        name: "Exeter",
        image: "image/exeter.jpg",
        attributes: {
            area: 28.5,
            population: 117.763,
            density: 4.133,
            subdivisions: 2,
            rankUK: 67
        }
    },
    {
        name: "Wigan",
        image: "image/wigan.jpg",
        attributes: {
            area: 43.8,
            population: 175.405,
            density: 4.009,
            subdivisions: 4,
            rankUK: 43
        }
    },
    {
        name: "Mansfield",
        image: "image/mansfield.jpg",
        attributes: {
            area: 48.4,
            population: 171.958,
            density: 3.556,
            subdivisions: 4,
            rankUK: 44
        }
    },
    {
        name: "Warrington",
        image: "image/warrington.jpg",
        attributes: {
            area: 44.9,
            population: 165.456,
            density: 3.686,
            subdivisions: 1,
            rankUK: 46
        }
    },
    {
        name: "Slough",
        image: "image/slough.jpg",
        attributes: {
            area: 34.1,
            population: 163.777,
            density: 4.797,
            subdivisions: 3,
            rankUK: 47
        }
    }
];


export { cards };
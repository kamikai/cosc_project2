var BUILDING_DATA;

BUILDING_DATA = [
    {
        name: "Forgan Smith",
        number: 1,
        levels: 3,
        position: new THREE.Vector2(860, 1000),
        rotation: 0,
        points: [
            new THREE.Vector2(0, 0),
            new THREE.Vector2(0, 23),
            new THREE.Vector2(280, 23),
            new THREE.Vector2(280, 0)
        ]
    },
    {
        name: "Duhig Tower",
        number: 2,
        levels: 9,
        position: new THREE.Vector2(1140, 990),
        rotation: 0,
        points: [
            new THREE.Vector2(0, 0),
            new THREE.Vector2(0, 50),
            new THREE.Vector2(30, 50),
            new THREE.Vector2(30, 0)
        ]
    },
    {
        name: "Steele",
        number: 3,
        levels: 3,
        position: new THREE.Vector2(1140, 1070),
        rotation: 32,
        points: [
            new THREE.Vector2(0, 0),
            new THREE.Vector2(0, 83),
            new THREE.Vector2(70, 83),
            new THREE.Vector2(70, 0)
        ]
    },
    {
        name: "Bookstore",
        number: 4,
        levels: 1,
        position: new THREE.Vector2(1100, 1150),
        rotation: 32,
        points: [
            new THREE.Vector2(0, 0),
            new THREE.Vector2(0, 42),
            new THREE.Vector2(42, 42),
            new THREE.Vector2(42, 0)
        ]
    },
    {
        name: "Richards",
        number: 5,
        levels: 2,
        position: new THREE.Vector2(1010, 1160),
        rotation: 0,
        points: [
            new THREE.Vector2(0, 0),
            new THREE.Vector2(0, 40),
            new THREE.Vector2(30, 40),
            new THREE.Vector2(30, 20),
            new THREE.Vector2(50, 20),
            new THREE.Vector2(50, 0)
        ]
    },
    {
        name: "Physics Annexe",
        number: 6,
        levels: 4,
        position: new THREE.Vector2(960, 1220),
        rotation: 0,
        points: [
            new THREE.Vector2(0, 0),
            new THREE.Vector2(0, 14),
            new THREE.Vector2(80, 14),
            new THREE.Vector2(80, 0)
        ]
    },
    {
        name: "Parnel",
        number: 7,
        levels: 2,
        position: new THREE.Vector2(935, 1160),
        rotation: 0,
        points: [
            new THREE.Vector2(0, 0),
            new THREE.Vector2(0, 50),
            new THREE.Vector2(52, 50),
            new THREE.Vector2(52, 0)
        ]
    },
    {
        name: "Goddard",
        number: 8,
        levels: 4,
        position: new THREE.Vector2(810, 1100),
        rotation: -32,
        points: [
            new THREE.Vector2(0, 0),
            new THREE.Vector2(0, 80),
            new THREE.Vector2(60, 80),
            new THREE.Vector2(60, 0)
        ]
    },
    {
        name: "Michie",
        number: 9,
        levels: 4,
        position: new THREE.Vector2(830, 985),
        rotation: 0,
        points: [
            new THREE.Vector2(0, 0),
            new THREE.Vector2(0, 65),
            new THREE.Vector2(30, 65),
            new THREE.Vector2(30, 0)
        ]
    },
    {
        name: "James and Mary Emelia Mayne Centre	",
        number: 11,
        levels: 4,
        position: new THREE.Vector2(860, 900),
        rotation: 0,
        points: [
            new THREE.Vector2(0, 0),
            new THREE.Vector2(0, 39),
            new THREE.Vector2(13, 39),
            new THREE.Vector2(13, 45),
            new THREE.Vector2(67, 45), // BR Corner
            new THREE.Vector2(67, 12),
            new THREE.Vector2(22, 12),
            new THREE.Vector2(22, 5),
            new THREE.Vector2(13, 5),
            new THREE.Vector2(13, 0)
        ]
    },
    {
        name: "Duhig North",
        number: 12,
        levels: 4,
        position: new THREE.Vector2(1070, 905),
        rotation: 0,
        points: [
            new THREE.Vector2(0, 0),
            new THREE.Vector2(0, 49),
            new THREE.Vector2(50, 49),
            new THREE.Vector2(50, 0)
        ]
    },
    {
        name: "Sir Llew Edwards",
        number: 14,
        levels: 4,
        position: new THREE.Vector2(1068, 813),
        rotation: 0,
        points: [
            new THREE.Vector2(22, 0),
            new THREE.Vector2(7, 34),
            new THREE.Vector2(24, 34),
            new THREE.Vector2(0, 86),
            new THREE.Vector2(66, 86),
            new THREE.Vector2(62, 79),
            new THREE.Vector2(77, 79),
        ]
    },
    {
        name: "Pavillion",
        number: 16,
        levels: 1,
        position: new THREE.Vector2(909, 1164),
        rotation: 24,
        points: [
            new THREE.Vector2(0, 0),
            new THREE.Vector2(0, 5),
            new THREE.Vector2(12, 5),
            new THREE.Vector2(12, 10),
            new THREE.Vector2(20, 10),
            new THREE.Vector2(20, 0),
        ]
    },
    {
        name: "Learning Innovation Building",
        number: 17,
        levels: 3,
        position: new THREE.Vector2(1042, 1188),
        rotation: 0,
        points: [
            new THREE.Vector2(0, 12),
            new THREE.Vector2(0, 53),
            new THREE.Vector2(6, 48),
            new THREE.Vector2(7, 52),
            new THREE.Vector2(33, 39),
            new THREE.Vector2(25, 21),
            new THREE.Vector2(25, 0),
            new THREE.Vector2(6, 12),
        ]
    },
    {
        name: "Union Building",
        number: 21,
        levels: 2,
        position: new THREE.Vector2(1204, 1080),
        rotation: 0,
        points: [
            new THREE.Vector2(28, 0),
            new THREE.Vector2(12, 24),
            new THREE.Vector2(19, 29),
            new THREE.Vector2(17, 39),
            new THREE.Vector2(11, 39),
            new THREE.Vector2(0, 76),
            new THREE.Vector2(9, 80),
            new THREE.Vector2(9, 85),
            new THREE.Vector2(22, 87),
            new THREE.Vector2(49, 6),
        ]
    },
    {
        name: "Main Refectory",
        number: 21,
        levels: 1,
        position: new THREE.Vector2(1235, 1133),
        rotation: 0,
        points: [
            new THREE.Vector2(13, 0),
            new THREE.Vector2(0, 46),
            new THREE.Vector2(37, 56),
            new THREE.Vector2(52, 11),
        ]
    },
    {
        name: "Main Refectory (Other bit)",
        number: 21,
        levels: 2,
        position: new THREE.Vector2(1249, 1186),
        rotation: 0,
        points: [
            new THREE.Vector2(8, 0),
            new THREE.Vector2(0, 26),
            new THREE.Vector2(25, 34),
            new THREE.Vector2(27, 28),
            new THREE.Vector2(37, 31),
            new THREE.Vector2(43, 10),
        ]
    },
    {
        name: "Aung San Suu Kyi Conference Centre",
        number: 21,
        levels: 3,
        position: new THREE.Vector2(1284, 1144),
        rotation: 0,
        points: [
            new THREE.Vector2(10, 0),
            new THREE.Vector2(0, 45),
            new THREE.Vector2(22, 50),
            new THREE.Vector2(33, 9),
        ]
    },
    {
        name: "Student Support Services Building",
        number: 21,
        levels: 2,
        position: new THREE.Vector2(1247, 1087),
        rotation: 0,
        points: [
            new THREE.Vector2(7, 0),
            new THREE.Vector2(0, 23),
            new THREE.Vector2(35, 35),
            new THREE.Vector2(43, 11),
        ]
    },

];

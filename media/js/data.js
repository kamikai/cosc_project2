var BUILDING_DATA, LAKE_DATA;

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
        levels: 7,
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
        levels: 7,
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
    {
        name: "Schonell Theatre",
        number: 22,
        levels: 2,
        position: new THREE.Vector2(1284, 1080),
        rotation: 0,
        points: [
            new THREE.Vector2(25, 0),
            new THREE.Vector2(17, 25),
            new THREE.Vector2(6, 23),
            new THREE.Vector2(0, 39),
            new THREE.Vector2(49, 55),
            new THREE.Vector2(61, 14),
        ]
    },
    {
        name: "Able Smith",
        number: 23,
        levels: 2,
        position: new THREE.Vector2(1220, 1020),
        rotation: 0,
        points: [
            new THREE.Vector2(11, 0),
            new THREE.Vector2(0, 19),
            new THREE.Vector2(0, 33),
            new THREE.Vector2(18, 40),
            new THREE.Vector2(28, 31),
            new THREE.Vector2(29, 8)
        ]
    },
    {
        name: "Social Sciences Building",
        number: 24,
        levels: 3,
        position: new THREE.Vector2(1191, 911),
        rotation: 0,
        points: [
            new THREE.Vector2(0, 5),
            new THREE.Vector2(32, 102),
            new THREE.Vector2(47, 97),
            new THREE.Vector2(16, 0),
        ]
    },
    {
        name: "McElwain Building",
        number: 24,
        levels: 2,
        position: new THREE.Vector2(1208, 892),
        rotation: 0,
        points: [
            new THREE.Vector2(14, 0),
            new THREE.Vector2(6, 16),
            new THREE.Vector2(0, 18),
            new THREE.Vector2(2, 25),
            new THREE.Vector2(22, 25), // Inner point.
            new THREE.Vector2(16, 38), // Spike tip.
            new THREE.Vector2(28, 46), // Inner point.
            new THREE.Vector2(12, 57),
            new THREE.Vector2(13, 63),
            new THREE.Vector2(20, 62),
            new THREE.Vector2(34, 68), // Lowest corner.
            new THREE.Vector2(61, 24),
        ]
    },
    {
        name: "UQ Sport Fitness Centre",
        number: 25,
        levels: 3,
        position: new THREE.Vector2(1270, 930),
        rotation: 0,
        points: [
            new THREE.Vector2(0, 76),
            new THREE.Vector2(33, 97),
            new THREE.Vector2(85, 19),
            new THREE.Vector2(51, 0),
        ]
    },
    {
        name: "Connell Building",
        number: 26,
        levels: 2,
        position: new THREE.Vector2(1294, 845),
        rotation: 0,
        points: [
            new THREE.Vector2(0, 41),
            new THREE.Vector2(37, 63),
            new THREE.Vector2(30, 87),
            new THREE.Vector2(62, 104),
            new THREE.Vector2(76, 86),
            new THREE.Vector2(76, 53),
            new THREE.Vector2(59, 44),
            new THREE.Vector2(61, 40),
            new THREE.Vector2(84, 51),
            new THREE.Vector2(90, 41),
            new THREE.Vector2(27, 0),
            new THREE.Vector2(18, 9),
            new THREE.Vector2(57, 38),
            new THREE.Vector2(56, 44),
            new THREE.Vector2(18, 23),
        ]
    },
    {
        name: "UQ Centre",
        number: 27,
        levels: 3,
        position: new THREE.Vector2(1330, 937),
        rotation: 0,
        points: [
            new THREE.Vector2(0, 117),
            new THREE.Vector2(49, 137),
            new THREE.Vector2(110, 39),
            new THREE.Vector2(71, 0),
            new THREE.Vector2(67, 6),
            new THREE.Vector2(60, 0),
            new THREE.Vector2(15, 68),
            new THREE.Vector2(21, 73),
        ]
    },
    {
        name: "UQ Tennis Pavilion",
        number: 28,
        levels: 1,
        position: new THREE.Vector2(1323, 778),
        rotation: 0,
        points: [
            new THREE.Vector2(0, 17),
            new THREE.Vector2(19, 27),
            new THREE.Vector2(27, 12),
            new THREE.Vector2(7, 1),
        ]
    },
    {
        name: "UQ Tennis Centre",
        number: 29,
        levels: 1,
        position: new THREE.Vector2(1295, 759),
        rotation: 0,
        points: [
            new THREE.Vector2(0, 18),
            new THREE.Vector2(21, 33),
            new THREE.Vector2(33, 12),
            new THREE.Vector2(11, 0),
        ]
    },
    {
        name: "Social Sciences Annexe",
        number: "37B",
        levels: 1,
        position: new THREE.Vector2(1259, 937),
        rotation: 0,
        points: [
            new THREE.Vector2(0, 21),
            new THREE.Vector2(7, 29),
            new THREE.Vector2(31, 8),
            new THREE.Vector2(24, 0),
        ]
    },
    {
        name: "ISSR Research Hub",
        number: "31B",
        levels: 1,
        position: new THREE.Vector2(1281, 916),
        rotation: 0,
        points: [
            new THREE.Vector2(0, 10),
            new THREE.Vector2(24, 23),
            new THREE.Vector2(28, 14),
            new THREE.Vector2(4, 0),
        ]
    },
    {
        name: "Gordon Greenwood Building",
        number: 32,
        levels: 5,
        position: new THREE.Vector2(1254, 1016),
        rotation: 0,
        points: [
            new THREE.Vector2(0, 35),
            new THREE.Vector2(24, 49),
            new THREE.Vector2(46, 19),
            new THREE.Vector2(16, 0),
            new THREE.Vector2(8, 10),
            new THREE.Vector2(10, 19),
        ]
    },
    {
        name: "Building 33",
        number: 33,
        levels: 2,
        position: new THREE.Vector2(1353, 1084),
        rotation: 0,
        points: [
            new THREE.Vector2(0, 36),
            new THREE.Vector2(38, 24),
            new THREE.Vector2(6, 3),
        ]
    },
    {
        name: "Chamberlain Building",
        number: 35,
        levels: 3,
        position: new THREE.Vector2(1177, 857),
        rotation: 0,
        points: [
            new THREE.Vector2(0, 0),
            new THREE.Vector2(0, 21),
            new THREE.Vector2(90, 21),
            new THREE.Vector2(90, 0)
        ]
    },
    {
        name: "Joyce Ackroyd Building",
        number: 37,
        levels: 2,
        position: new THREE.Vector2(1224, 809),
        rotation: 0,
        points: [
            new THREE.Vector2(0, 0),
            new THREE.Vector2(0, 18),
            new THREE.Vector2(63, 18),
            new THREE.Vector2(63, 0),
        ]
    },
    {
        name: "Colin Clark Building",
        number: 39,
        levels: 4,
        position: new THREE.Vector2(1169, 759),
        rotation: 0,
        points: [
            new THREE.Vector2(0, 0),
            new THREE.Vector2(0, 42),
            new THREE.Vector2(69, 42),
            new THREE.Vector2(69, 8),
            new THREE.Vector2(56, 8),
            new THREE.Vector2(56, 29),
            new THREE.Vector2(15, 27),
            new THREE.Vector2(14, 0),
        ]
    },
    {
        name: "General Purpose North 3",
        number: "39A",
        levels: 3,
        position: new THREE.Vector2(1102, 761),
        rotation: 0,
        points: [
            new THREE.Vector2(0, 19),
            new THREE.Vector2(7, 22),
            new THREE.Vector2(0, 34),
            new THREE.Vector2(44, 85),
            new THREE.Vector2(54, 87),
            new THREE.Vector2(54, 71),
            new THREE.Vector2(20, 31),
            new THREE.Vector2(47, 54),
            new THREE.Vector2(43, 0),
            new THREE.Vector2(13, 11),
            new THREE.Vector2(6, 11),
        ]
    }
];

LAKE_DATA = [
    {
        position: new THREE.Vector2(1320, 1254),
        points: [
            new THREE.Vector2(0, 0),
            new THREE.Vector2(0, 15),
            new THREE.Vector2(27, 66),
            new THREE.Vector2(67, 24),
            new THREE.Vector2(67, 8),
        ]
    },
    {
        position: new THREE.Vector2(1355, 1291),
        points: [
            new THREE.Vector2(0, 51),
            new THREE.Vector2(5, 64),
            new THREE.Vector2(9, 71),
            new THREE.Vector2(17, 80),
            new THREE.Vector2(27, 83),
            new THREE.Vector2(46, 88),
            new THREE.Vector2(60, 87),
            new THREE.Vector2(76, 84),
            new THREE.Vector2(93, 76),
            new THREE.Vector2(95, 71),
            new THREE.Vector2(82, 50),
            new THREE.Vector2(88, 35),
            new THREE.Vector2(82, 21),
            new THREE.Vector2(85, 10),
            new THREE.Vector2(85, 0),
            new THREE.Vector2(52, 9),
            new THREE.Vector2(34, 10),
            new THREE.Vector2(4, 38),

        ]
    },
    {
        position: new THREE.Vector2(1072, 1300),
        points: [
            new THREE.Vector2(0, 194),
            new THREE.Vector2(0, 209),
            new THREE.Vector2(72, 262),
            new THREE.Vector2(120, 263),
            new THREE.Vector2(194, 225),
            new THREE.Vector2(233, 175),
            new THREE.Vector2(242, 136),
            new THREE.Vector2(255, 119),
            new THREE.Vector2(272, 101),
            new THREE.Vector2(247, 50),
            new THREE.Vector2(216, 43),
            new THREE.Vector2(166, 0),
            new THREE.Vector2(129, 9),
            new THREE.Vector2(140, 36),
            new THREE.Vector2(146, 78),
            new THREE.Vector2(137, 133),
            new THREE.Vector2(133, 150),
            new THREE.Vector2(85, 172),
            new THREE.Vector2(63, 187),
            new THREE.Vector2(13, 187),
            new THREE.Vector2(7, 193),
        ]
    },
    {
        position: new THREE.Vector2(297, 18),
        points: [
            new THREE.Vector2(0, 169),
            new THREE.Vector2(599, 246),
            new THREE.Vector2(857, 342),
            new THREE.Vector2(1069, 504),
            new THREE.Vector2(1209, 728),
            new THREE.Vector2(1361, 1142),
            new THREE.Vector2(1400, 1646),
            new THREE.Vector2(1367, 1732),
            new THREE.Vector2(1239, 1800),
            new THREE.Vector2(1430, 1852),
            new THREE.Vector2(1703, 950),
            new THREE.Vector2(1730, 504),
            new THREE.Vector2(59, 0),
        ]
    }
];

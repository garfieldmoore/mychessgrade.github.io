'use strict';
var normalDistributionDifferenceLookup = [-9999, -735, -619, -559, -517, -484, -456, -432, -411, -391, -374, -357, -344, -328, -315, -302, -290, -278, -267, -256, -245, -235, -225, -215, -206, -197, -188, -179, -170, -162, -153, -145, -137, -129, -121, -113, -106, -98, -91, -83, -76, -68, -61, -53, -46, -39, -32, -25, -17, -10, -3,
  0,
  4,
  11,
  18,
  26,
  33,
  40,
  47,
  54,
  62,
  69,
  77,
  84,
  92,
  99,
  107,
  114,
  122,
  130,
  138,
  146,
  154,
  163,
  171,
  180,
  189,
  198,
  207,
  216,
  226,
  236,
  246,
  257,
  268,
  279,
  291,
  303,
  316,
  329,
  345,
  358,
  375,
  392,
  412,
  433,
  457,
  485,
  518,
  560,
  620,
  735,
];

var normalDistributionExpectedResultValues = [0.00,
  0.01,
  0.02,
  0.03,
  0.04,
  0.05,
  0.06,
  0.07,
  0.08,
  0.09,
  0.10,
  0.11,
  0.12,
  0.13,
  0.14,
  0.15,
  0.16,
  0.17,
  0.18,
  0.19,
  0.20,
  0.21,
  0.22,
  0.23,
  0.24,
  0.25,
  0.26,
  0.27,
  0.28,
  0.29,
  0.30,
  0.31,
  0.32,
  0.33,
  0.34,
  0.35,
  0.36,
  0.37,
  0.38,
  0.39,
  0.40,
  0.41,
  0.42,
  0.43,
  0.44,
  0.45,
  0.46,
  0.47,
  0.48,
  0.49,
  0.50,
  0.50,
  0.51,
  0.52,
  0.53,
  0.54,
  0.55,
  0.56,
  0.57,
  0.58,
  0.59,
  0.60,
  0.61,
  0.62,
  0.63,
  0.64,
  0.65,
  0.66,
  0.67,
  0.68,
  0.69,
  0.70,
  0.71,
  0.72,
  0.73,
  0.74,
  0.75,
  0.76,
  0.77,
  0.78,
  0.79,
  0.80,
  0.81,
  0.82,
  0.83,
  0.84,
  0.85,
  0.86,
  0.87,
  0.88,
  0.89,
  0.90,
  0.91,
  0.92,
  0.93,
  0.94,
  0.95,
  0.96,
  0.97,
  0.98,
  0.99,
  1.00
];

var normalDistributionPerformance = [-800,
-677,
-589,
-538,
-501,
-470,
-444,
-422,
-401,
-383,
-366,
-351,
-336,
-322,
-309,
-296,
-284,
-273,
-262,
-251,
-240,
-230,
-220,
-211,
-202,
-193,
-184,
-175,
-166,
-158,
-149,
-141,
-133,
-125,
-117,
-110,
-102,
-95,
-87,
-80,
-72,
-65,
-57,
-50,
-43,
-36,
-29,
-21,
-14,
-7,
0,
0,
7,
14,
21,
29,
36,
43,
50,
57,
65,
72,
80,
87,
95,
102,
110,
117,
125,
133,
141,
149,
158,
166,
175,
184,
193,
202,
211,
220,
230,
240,
251,
262,
273,
284,
296,
309,
322,
336,
351,
366,
383,
401,
422,
444,
470,
501,
538,
589,
677,
800
];

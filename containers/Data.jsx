/* eslint-disable no-restricted-syntax */
const expendablesA = require('../data/expendables/kjglass-60495-expendables_A-export.json');
const expendablesB = require('../data/expendables/kjglass-60495-expendables_B-export.json');
const expendablesC = require('../data/expendables/kjglass-60495-expendables_C-export.json');
const expendablesD = require('../data/expendables/kjglass-60495-expendables_D-export.json');
const expendablesE = require('../data/expendables/kjglass-60495-expendables_E-export.json');
const expendablesF = require('../data/expendables/kjglass-60495-expendables_F-export.json');
const expendablesG = require('../data/expendables/kjglass-60495-expendables_G-export.json');
const expendablesH = require('../data/expendables/kjglass-60495-expendables_H-export.json');
const expendablesI = require('../data/expendables/kjglass-60495-expendables_I-export.json');
const expendablesJ = require('../data/expendables/kjglass-60495-expendables_J-export.json');
const expendablesK = require('../data/expendables/kjglass-60495-expendables_K-export.json');
const expendablesL = require('../data/expendables/kjglass-60495-expendables_L-export.json');
const expendablesM = require('../data/expendables/kjglass-60495-expendables_M-export.json');
const expendablesN = require('../data/expendables/kjglass-60495-expendables_N-export.json');
const expendablesO = require('../data/expendables/kjglass-60495-expendables_O-export.json');
const expendablesP = require('../data/expendables/kjglass-60495-expendables_P-export.json');
const expendablesQ = require('../data/expendables/kjglass-60495-expendables_Q-export.json');
const expendablesR = require('../data/expendables/kjglass-60495-expendables_R-export.json');
const expendablesS = require('../data/expendables/kjglass-60495-expendables_S-export.json');
const expendablesT = require('../data/expendables/kjglass-60495-expendables_T-export.json');
const expendablesU = require('../data/expendables/kjglass-60495-expendables_U-export.json');
const expendablesV = require('../data/expendables/kjglass-60495-expendables_V-export.json');
const expendablesW = require('../data/expendables/kjglass-60495-expendables_W-export.json');
const expendablesX = require('../data/expendables/kjglass-60495-expendables_X-export.json');
const expendablesY = require('../data/expendables/kjglass-60495-expendables_Y-export.json');
const expendablesZ = require('../data/expendables/kjglass-60495-expendables_Z-export.json');

const expendablesAlphabet = [expendablesA, expendablesB, expendablesC, expendablesD,
    expendablesE, expendablesF, expendablesG, expendablesH,
    expendablesI, expendablesJ, expendablesK, expendablesL,
    expendablesM, expendablesN, expendablesO, expendablesP,
    expendablesQ, expendablesR, expendablesS, expendablesT,
    expendablesU, expendablesV, expendablesW, expendablesX,
    expendablesY, expendablesZ];

const glasses = require('../data/kjglass-60495-glass-export.json');

const getExpendables = () => {
    let expendables = [];

    for (const data of expendablesAlphabet) {
        if (data) {
            expendables = expendables.concat(data);
        }
    }

    return expendables;
};

const getData = () => {
    return {
        glasses,
        expendables: getExpendables(),
    };
};

export default getData;

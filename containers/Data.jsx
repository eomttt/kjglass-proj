/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-param-reassign */
const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'undefined'];

const expendablesA = require('../data/expendables_A.json');
const expendablesB = require('../data/expendables_B.json');
const expendablesC = require('../data/expendables_C.json');
const expendablesD = require('../data/expendables_D.json');
const expendablesE = require('../data/expendables_E.json');
const expendablesF = require('../data/expendables_F.json');
const expendablesG = require('../data/expendables_G.json');
const expendablesH = require('../data/expendables_H.json');
const expendablesI = require('../data/expendables_I.json');
const expendablesJ = require('../data/expendables_J.json');
const expendablesL = require('../data/expendables_L.json');
const expendablesM = require('../data/expendables_M.json');
const expendablesO = require('../data/expendables_O.json');
const expendablesP = require('../data/expendables_P.json');
const expendablesR = require('../data/expendables_R.json');
const expendablesS = require('../data/expendables_S.json');
const expendablesT = require('../data/expendables_T.json');
const expendablesU = require('../data/expendables_U.json');
const expendablesUndefined = require('../data/expendables_undefined.json');
const expendablesV = require('../data/expendables_V.json');
const expendablesW = require('../data/expendables_W.json');
const expendablesZ = require('../data/expendables_Z.json');

const Data = {
    A: expendablesA,
    B: expendablesB,
    C: expendablesC,
    D: expendablesD,
    E: expendablesE,
    F: expendablesF,
    G: expendablesG,
    H: expendablesH,
    I: expendablesI,
    J: expendablesJ,
    L: expendablesL,
    M: expendablesM,
    O: expendablesO,
    P: expendablesP,
    R: expendablesR,
    S: expendablesS,
    T: expendablesT,
    U: expendablesU,
    undefined: expendablesUndefined,
    V: expendablesV,
    W: expendablesW,
    Z: expendablesZ,
};

const getExpendables = async () => {
    let result = [];
    for (const alphabet of ALPHABET) {
        const data = Data[alphabet];
        if (data) {
            result = [...result, ...data];
        }
    }
    return result;
};

export const getExpendable = async (alphabet, id) => Data[alphabet].filter((item) => item.id === id)[0];

const getData = async (dataBase) => ({
    expendables: await getExpendables(dataBase),
});

export default getData;

/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-param-reassign */
const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'undefined'];

const getExpendables = async (dataBase) => {
    let result = [];
    for (const alphabet of ALPHABET) {
        const data = await dataBase.ref(`/expendables_${alphabet}`).once('value');
        if (data.val()) {
            result = result.concat(data.val());
        }
    }
    return result;
};

const getData = async (dataBase) => ({
    expendables: await getExpendables(dataBase),
});

export default getData;

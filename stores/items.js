import { observable, action, toJS } from 'mobx';

const glassesData = require('../data/glass.json');

// import glassDummy from '../dummy/glassItem';
// import expendablesItemDummy from '../dummy/expendablesItem';

export default class ItemsStore {
    @observable glasses = glassesData;

    @observable expendables = [];

    @action setItems = (expendables) => {
        this.expendables = [...expendables];
    }

    @action getItemInfo = (params) => {
        const {
            type, itemId, specificationId,
        } = params;

        let selectedItems = [];

        if (type === 'glasses') {
            selectedItems = [...toJS(this.glasses)];
        } else {
            selectedItems = [...toJS(this.expendables)];
        }

        if (selectedItems.length > 0) {
            const selectedItem = selectedItems && selectedItems.filter((item) => {
                if (item) {
                    return item.id === itemId;
                }
                return false;
            })[0];
            const selectedSpecificItem = selectedItem && selectedItem.specification.filter((specificationItem) => {
                return specificationItem.id === specificationId;
            })[0];
            return {
                selectedItem,
                selectedSpecificItem,
            };
        }
        return null;
    }
}

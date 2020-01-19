import { observable, action, toJS, extendObservable } from 'mobx';

// import glassDummy from '../dummy/glassItem';
// import expendablesItemDummy from '../dummy/expendablesItem';

export default class ItemsStore {
    @observable glasses = [];

    @observable expendables = [];

    @action setItems = (glasses, expendables) => {
        this.glasses = [...glasses];
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

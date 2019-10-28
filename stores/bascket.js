import { observable, action, toJS } from 'mobx';

export default class BaskestStore {
  @action addBasket = (selectedId, specificationId, selectedCount) => {
      console.log("AAAAA");
    //   const findedItem = this.glassItems.filter((glassItem) => glassItem.id === selectedId)[0];
    //   if (findedItem) {
    //       const { specification } = findedItem;
    //       const specificationItem = specification.filter((item) => item.id === specificationId);

    //       specificationItem
    //   }
  }
}
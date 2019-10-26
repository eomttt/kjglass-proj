import { observable, action, toJS } from 'mobx';

import dummyItems from '../dummy/glassItem';

export default class GlassItemStore {
  @observable glassItems = dummyItems;

  @action addBasket = (selectedId, specificationId, selectedCount) => {
      const findedItem = this.glassItems.filter((glassItem) => glassItem.id === selectedId)[0];
      if (findedItem) {
          const { specification } = findedItem;
          const specificationItem = specification.filter((item) => item.id === specificationId);

          specificationItem
      }
  }
}

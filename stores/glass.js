import { observable, action } from 'mobx';

import dummyItems from '../dummy/glassItem';

export default class GlassItemStore {
  @observable glassItems = dummyItems;

  @action addBasket = (selectedId, specificationId, selectedCount) => {
      const findedItem = this.glassItems.filter((glassItem) => glassItem.id === selectedId)[0];
      
      if (findedItem) {
          const specificationItem = findedItem.specification.filter((specification) => specification.id === specificationId))[0];

          specification && (specification.selected = true);
      }
  }
}

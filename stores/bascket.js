import { observable, action } from 'mobx';

export default class BaskestStore {
  @observable glassItems = {
      glass: [],
      expendable: [],
  };

  @action addBasket = (params) => {
      const {
          type, itemId, count, specificatinoItemId,
      } = params;

      this.glassItems[type].push({
          itemId,
          count,
          specificatinoItemId,
      });
  }
}

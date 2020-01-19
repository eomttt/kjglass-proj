import { observable, action, toJS } from 'mobx';

export default class BaskestStore {
  @observable glassItems = {
      glass: [],
      expendables: [],
  };

  @action initBasket = () => {
      const glassLocalStorageItems = JSON.parse(localStorage.getItem('glass'));
      const expendableLocalStorageItems = JSON.parse(localStorage.getItem('expendables'));

      this.glassItems = {
          glass: glassLocalStorageItems || [],
          expendables: expendableLocalStorageItems || [],
      };
  }

  @action addBasket = (params) => {
      const {
          type, itemId, count, specificationItemId, classifiedId,
      } = params;

      console.log('type', type);

      const findedItem = this.glassItems[type] && this.glassItems[type].filter((item) => {
          const toJSItem = toJS(item);

          if (toJSItem.itemId === itemId) {
              if (toJSItem.specificationItemId === specificationItemId) {
                  return true;
              }
          }
          return false;
      })[0];

      if (toJS(findedItem)) {
          this.glassItems[type] = this.glassItems[type] && this.glassItems[type].map((item) => {
              const toJSItem = toJS(item);

              if (toJSItem.itemId === itemId) {
                  if (toJSItem.specificationItemId === specificationItemId) {
                      return {
                          itemId: item.itemId,
                          count: Number(item.count) + Number(count),
                          specificationItemId: item.specificationItemId,
                          classifiedId,
                      };
                  }
              }
              return item;
          });
      } else {
          this.glassItems[type].push({
              itemId,
              count,
              specificationItemId,
              classifiedId,
          });
      }

      localStorage.setItem(type, JSON.stringify(toJS(this.glassItems[type])));
  }

  @action removeBasket = (params) => {
      const {
          type, itemId, specificationItemId,
      } = params;

      const findedItem = this.glassItems[type] && this.glassItems[type].filter((item) => {
          const toJSItem = toJS(item);

          if (toJSItem.itemId === itemId) {
              if (toJSItem.specificationItemId === specificationItemId) {
                  return true;
              }
          }
          return false;
      })[0];

      if (toJS(findedItem)) {
          this.glassItems[type] = this.glassItems[type].filter((item) => {
              const toJSItem = toJS(item);

              if (toJSItem.itemId === itemId) {
                  if (toJSItem.specificationItemId === specificationItemId) {
                      return false;
                  }
              }
              return true;
          });
      }

      localStorage.setItem(type, JSON.stringify(toJS(this.glassItems[type])));
  }
}

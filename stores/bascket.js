/* eslint-disable prefer-destructuring */
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

      let itemType = type;

      if (type.indexOf('expendables') > -1) {
          itemType = type.split('_')[0];
      }

      const findedItem = this.glassItems[itemType] && this.glassItems[itemType].filter((item) => {
          const toJSItem = toJS(item);

          if (toJSItem.itemId === itemId) {
              if (toJSItem.specificationItemId === specificationItemId) {
                  return true;
              }
          }
          return false;
      })[0];

      if (toJS(findedItem)) {
          this.glassItems[itemType] = this.glassItems[itemType] && this.glassItems[itemType].map((item) => {
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
          this.glassItems[itemType].push({
              itemId,
              count,
              specificationItemId,
              classifiedId,
          });
      }

      localStorage.setItem(itemType, JSON.stringify(toJS(this.glassItems[itemType])));
  }

  @action removeBasket = (params) => {
      const {
          type, itemId, specificationItemId,
      } = params;

      let itemType = type;

      if (type.indexOf('expendables') > -1) {
          itemType = type.split('_')[0];
      }

      const findedItem = this.glassItems[itemType] && this.glassItems[itemType].filter((item) => {
          const toJSItem = toJS(item);

          if (toJSItem.itemId === itemId) {
              if (toJSItem.specificationItemId === specificationItemId) {
                  return true;
              }
          }
          return false;
      })[0];

      if (toJS(findedItem)) {
          this.glassItems[itemType] = this.glassItems[itemType].filter((item) => {
              const toJSItem = toJS(item);

              if (toJSItem.itemId === itemId) {
                  if (toJSItem.specificationItemId === specificationItemId) {
                      return false;
                  }
              }
              return true;
          });
      }

      localStorage.setItem(itemType, JSON.stringify(toJS(this.glassItems[itemType])));
  }
}

import axios from 'axios';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import ContactComp from '../../components/customercenter/Contact';
import useStore from '../../hooks/useStore';

const Contact = () => {
  const { bascketStore, itemsStore } = useStore();
  const { glasses, expendables } = toJS(itemsStore);
  const { glassItems } = toJS(bascketStore);

  useEffect(() => {
    // Nothing. But to update component
  }, [glasses, expendables]);

  const convertItem = (items, type) =>
    items.map((item) => {
      const itemInfo = itemsStore.getItemInfo({
        type,
        itemId: item.itemId,
        specificationId: item.specificationItemId,
      });

      return {
        ...itemInfo,
        count: item.count,
        url: `http://kjglass.co.kr/shop?id=${
          type === 'glasses' ? 1 : 2
        }&classifiedId=${encodeURI(itemInfo.selectedItem.classify)}&productId=${
          item.itemId
        }`,
      };
    });

  const submitContact = async (contactData) => {
    const { email, number } = contactData;

    if (email || number) {
      alert('장바구니에 담긴 정보가 함께 전송 됩니다.');
      try {
        await axios.post(
          'https://i6lostn24e.execute-api.ap-northeast-2.amazonaws.com/dev/send-email',
          {
            contactData,
            item: {
              glass: convertItem(glassItems.glass, 'glasses'),
              expendables: convertItem(glassItems.expendables, 'expendables'),
            },
          }
        );
        alert('성공적으로 전송 되었습니다.');
      } catch (error) {
        alert(`에러가 발생 하였습니다${error}`);
      }
    } else {
      alert('이메일 또는 전화번호를 남겨주세요.');
    }
  };

  const openKakao = () => {
    window.open('https://open.kakao.com/o/szj7uKQb');
  };

  return <ContactComp submitContact={submitContact} openKakao={openKakao} />;
};

export default observer(Contact);

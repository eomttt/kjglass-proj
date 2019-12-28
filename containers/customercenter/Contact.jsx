import React from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';

import axios from 'axios';

import useStore from '../../hooks/useStore';

import ContactComp from '../../components/customercenter/Contact';

const Contact = () => {
    const { bascketStore, itemsStore } = useStore();
    const { glassItems } = toJS(bascketStore);

    const convertItem = (items, type) => items.map((item) => {
        const itemInfo = itemsStore.getItemInfo({
            type,
            itemId: item.itemId,
            specificationId: item.specificationItemId,
        });

        return {
            ...itemInfo,
            index: `${item.itemId}${item.specificationItemId}`,
            count: item.count,
        };
    });

    const submitContact = (contactData) => {
        const { email, number } = contactData;

        if (email || number) {
            alert('장바구니에 담긴 정보가 함께 전송 됩니다.');
            axios.post('/translate-mail', {
                contactData,
                item: {
                    glass: convertItem(glassItems.glass, 'glasses'),
                    expendable: convertItem(glassItems.expendable, 'expendables'),
                },
            });
        } else {
            alert('이메일 또는 전화번호를 남겨주세요.');
        }
    };

    const openKakao = () => {
        window.open('https://open.kakao.com/o/szj7uKQb');
    };

    return (
        <ContactComp
            submitContact={submitContact}
            openKakao={openKakao}/>
    );
};

export default observer(Contact);

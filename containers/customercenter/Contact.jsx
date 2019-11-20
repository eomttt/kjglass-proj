import React from 'react';

import ContactComp from '../../components/customercenter/Contact';

const Contact = () => {
    const submitContact = (contactData) => {
        // TODO: Send mail
        console.log(contactData);
    };

    return (
        <ContactComp submitContact={submitContact} />
    );
};

export default Contact;

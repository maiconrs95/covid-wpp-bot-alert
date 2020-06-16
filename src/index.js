import fetch from 'node-fetch';
import { create, Client } from '@open-wa/wa-automate';
import dotenv from 'dotenv';

import formatMessage from './utils/formatMessage';

function getByCountry(country = 'brazil') {
    return new Promise((resolve, reject) => {
        fetch(`https://covid19-brazil-api.now.sh/api/report/v1/${country}`)
            .then(response => response.json())
            .then(response => resolve(response.data))
            .catch(reject)
    });
}

(async function () {
    dotenv.config();

    const client = await create();
    const allContacts = await client.getAllContacts();
    const sendTo = process.env.CONTACTS.split(',');
    const contactsToAlert = allContacts.filter(contact => sendTo.includes(contact.name));

    const covidInBrazil = await getByCountry();

    console.log(covidInBrazil);

    // await Promise.all(contactsToAlert.map((contact) => {
    //     return client.sendText(contact.id, formatMessage(covidInBrazil));
    // }));

    process.exit(1);
})();

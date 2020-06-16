import { create, Client } from '@open-wa/wa-automate';
import dotenv from 'dotenv';

(async function () {
    dotenv.config();

    const client = await create();
    const allContacts = await client.getAllContacts();
    const sendTo = process.env.CONTACTS.split(',');
    const contactsToAlert = allContacts.filter(contact => sendTo.includes(contact.name));

    await Promise.all(contactsToAlert.map((contact) => {
        return client.sendText(contact.id, 'Bot Test 3');
    }));

    process.exit(1);
})();

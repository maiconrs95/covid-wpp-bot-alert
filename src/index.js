import fetch from 'node-fetch';
import { create } from '@open-wa/wa-automate';
import dotenv from 'dotenv';

import formatMessage from './utils/formatMessage';

function getByUf(uf = 'SP') {
    return new Promise((resolve, reject) => {
        fetch(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${uf}`)
            .then(response => response.json())
            .then((data) => {
                let report = {};

                Object.keys(data).forEach((item) => {
                    if (typeof data[item] !== 'number') {
                        return report[item] = data[item];
                    }

                    report[item] = Intl.NumberFormat('pt-BR').format(data[item]);
                });

                resolve(report);
            })
            .catch(reject)
    });
}

function getByCountry(country = 'brazil') {
    return new Promise((resolve, reject) => {
        fetch(`https://covid19-brazil-api.now.sh/api/report/v1/${country}`)
            .then(response => response.json())
            .then(({ data }) => {
                let report = {};

                Object.keys(data).forEach((item) => {
                    if (typeof data[item] !== 'number') {
                        return report[item] = data[item];
                    }

                    report[item] = Intl.NumberFormat('pt-BR').format(data[item]);
                });

                resolve(report);
            })
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
    const covidInSP = await getByUf();
    const report = formatMessage(covidInBrazil, covidInSP);

    console.log(report);

    await Promise.all(contactsToAlert.map((contact) => {
        return client.sendText(contact.id, `
            Olá, ${contact.name}

            ${report}
        `);
    }));

    process.exit(1);
})();

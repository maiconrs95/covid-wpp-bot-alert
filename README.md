# Covid Whatsapp bot alert

[![licence mit](https://img.shields.io/badge/Licence-MIT-green.svg)](https://github.com/maiconrs95/covid-wpp-bot-alert/blob/master/LICENSE.md)

A bot to alert whatsapp contacts about covid-19 :speech_balloon:

## Prerequisites

- [nodejs](https://nodejs.org/en/)
- [wpp-account](https://www.whatsapp.com/?lang=pt_br)

## Getting Started

### Installing

```
npm i || yarn
```

### Add .env file and contacts

```
touch .env
```

Add contacts to send messages in `.env` file, ex:

```
CONTACTS="Contact 1,Contact 2,Contact 3"
```

### Run projetct

```
npm run start || yarn start
```


## Built With

* [covid-19-brazil-api](https://covid19-brazil-api.now.sh/)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [wa-automate](https://github.com/open-wa/wa-automate-nodejs)
* [date-fns](https://date-fns.org/docs/Getting-Started)

## Contributing

Please read [CONTRIBUTING.md](https://github.com/maiconrs95/covid-wpp-bot-alert/blob/master/CONTRIBUTING.MD) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Maicon Silva** - *Initial work* - [Site](https://maiconsilva.com)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - [MIT License](./LICENSE.md) © [Maicon Silva](https://maiconsilva.com/)

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

export default (name, countryCases, stateCases) => (`
    Olá, ${name}.
    Aqui está seu relatório sobre a covid-19 no seu país e cidade :D

    ${countryCases.country}:
    - ${countryCases.confirmed} confirmados;
    - ${countryCases.cases} ativos;
    - ${countryCases.deaths} mortes;
    - ${countryCases.recovered} recuperados.
    - atualizado em ${format(parseISO(countryCases.updated_at), 'dd/MM/yyyy HH:mm', { locale: pt })}

    ${stateCases.state}
    - ${stateCases.suspects} suspeitos;
    - ${stateCases.cases} ativos;
    - ${stateCases.deaths} mortes;
    - ${stateCases.refuses} recuperados.
    - atualizado em ${format(parseISO(stateCases.datetime), 'dd/MM/yyyy HH:mm', { locale: pt })}
`);

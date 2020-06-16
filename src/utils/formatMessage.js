export default (coutryCases, stateCases) => (`
    Olá, Mortal.
    Aqui está seu relatório sobre a covid-19 no seu país e cidade :D

    BRAZIL:
    - ${coutryCases.confirmed} confirmados;
    - ${coutryCases.cases} casos;
    - ${coutryCases.deaths} mortes;
    - ${coutryCases.recovered} recuperados.

    SÃO PAULO
    - ${coutryCases.confirmed} confirmados;
    - ${coutryCases.cases} casos;
    - ${coutryCases.deaths} mortes;
    - ${coutryCases.recovered} recuperados.
`);

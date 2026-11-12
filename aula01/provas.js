// CIBELY
const dayjs = require('dayjs');

const hoje = dayjs().startOf('day');

const provas = [
    {
        nome: 'Checkpoint 1',
        data: '2026-12-04'
    },
    {
        nome: 'Checkpoint 2',
        data: '2026-12-18'
    }
];

provas.forEach((prova) => {
    const faltam = dayjs(prova.data).diff(hoje, 'day');

    console.log(`${prova.nome}: faltam ${faltam} dias`);
});

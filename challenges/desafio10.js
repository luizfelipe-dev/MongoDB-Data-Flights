db.voos.find(
    { $and: [{ ano: { $eq: 2017 } }, { "empresa.nome": { $eq: "GOL" } }] }, 
    { vooId: 1,
"empresa.nome": 1, 
    "aeroportoOrigem.nome": 1, 
    "aeroportoDestino.nome": 1, 
    mes: 1, 
    ano: 1, 
    _id: 0 },
).limit(10);
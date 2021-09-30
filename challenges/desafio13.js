// #### 13 - Retorne a quantidade de documentos em que o campo `aeroportoDestino.continente` não seja igual a `EUROPA`, `ÁSIA` e `OCEANIA`.

db.voos.count({ $and: [
   { "aeroportoDestino.continente": { $ne: "EUROPA" } }, 
   { "aeroportoDestino.continente": { $ne: "ÁSIA" } },
   { "aeroportoDestino.continente": { $ne: "OCEANIA" } }],
  });

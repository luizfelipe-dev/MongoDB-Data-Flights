// Retorne o vooId do décimo ao décimo segundo documento da coleção voos.
// use("dataFlights")
db.voos.find({}, { vooId: 1, _id: 0 }).skip(9).limit(3);

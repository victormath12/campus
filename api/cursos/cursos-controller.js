
exports.findAll = (req, res, next) => {
  res.status(201).send('Requisição recebida com sucesso!');
};

exports.findById = (req, res, next) => {
  let id = req.params.id;
  res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};

exports.add = (req, res, next) => {

  var curso = req.body;
  console.log(curso.name);

  res.status(200).json({
    curso: curso
  });

};

exports.update = (req, res, next) => {
  let id = req.params.id;
  res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
  let id = req.params.id;
  res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};

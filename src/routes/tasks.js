module.exports = app => {

    const Tasks = app.db.models.Tasks;

    app.route('/tasks')
        //trae todos los usuarios
        .get((req, res) => {
            Tasks.findAll({})
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
        })
        //crea un usuario
        .post((req, res) =>{
            Tasks.create(req.body)
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
        })
    app.route('/tasks/:id')
        //trae un usuario
        .get((req,res) => {
            Tasks.findOne({where: req.params})
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
        })
        //modifica un usuario
        .put((req, res) => {
            Tasks.update(req.body, { where: req.params})
            .then(result => res.sendStatus(204))
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
        })
        //elimina un usuario
        .delete((req, res) => {
            Tasks.destroy({ where: req.params})
            .then(result => res.sendStatus(204))
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
        })
}
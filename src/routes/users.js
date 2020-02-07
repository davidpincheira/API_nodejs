module.exports = app => {
    const Users = app.db.models.Users

    //trae un usuario
    app.get('/users/:id', (req, res) => {
        Users.findByPk(req.params.id, {
            //indico atributos que quiero obtener
            attributes: ['id', 'name', 'email']
        })
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({msg: error.message})
        });
    });
    //crea un usuario
    app.post('/users', (req, res) => {
        Users.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({msg: error.message})
        });
    });
    //elimina un usuario
    app.delete('/users/:id', (req, res) => {
        Users.destroy({ where: {id: req.params.id}})
        .then(result => res.sendStatus(204))
        .catch(error => {
            res.status(412).json({msg: error.message})
        });
    });
}
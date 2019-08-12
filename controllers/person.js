const Person = require("../models/Person")

module.exports = {
    index: function(req, res) {
        Person.find({}).then(person => res.json(person));
    },
    show: function(req, res) {
        Person.findOne({ name: req.params.name }).then(person => res.json(person));
    }
}
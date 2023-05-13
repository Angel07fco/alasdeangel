const galeriaCtrl = {};

const Galeria = require('../models/Galeria')

galeriaCtrl.getGalerias = async (req, res) => {
    const galerias = await Galeria.find();
    res.json(galerias)
};

galeriaCtrl.getGaleria = async(req, res) => {
    const galeria = await Galeria.findById(req.params.id);
    res.json(galeria);
};

galeriaCtrl.createGaleria = async (req, res) => {
    const { category, galeria, date } = req.body
    const newGaleria = new Galeria({
        category,
        galeria,
        date
    });
    await newGaleria.save();
    res.json({message: 'Galeria saved'})
};

galeriaCtrl.updateGaleria = async (req, res) => {
    const { category, galeria, date } = req.body
    const newGaleria = await Galeria.findByIdAndUpdate(req.params.id, {
        category,
        galeria,
        date
    });
    await newGaleria.save();
    res.json({message: 'Galeria Updated'});
};

galeriaCtrl.deleteGaleria = async (req, res) => {
    await Galeria.findByIdAndRemove(req.params.id);
    res.json({message: 'Galeria Deleted'});
};


module.exports = galeriaCtrl;
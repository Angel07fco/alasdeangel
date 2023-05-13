const ClienteCtrl = {};

const Cliente = require('../models/Cliente')

ClienteCtrl.getClientes = async (req, res) => {
    const clientes = await Cliente.find();
    res.json(clientes)
};

ClienteCtrl.getCliente = async(req, res) => {
    const cliente = await Cliente.findById(req.params.id);
    res.json(cliente);
};

ClienteCtrl.createCliente = async (req, res) => {
    const { cliente, domicilio, referencia, img, date } = req.body
    const newCliente = new Cliente({
        cliente,
        domicilio,
        referencia,
        img,
        date
    });
    await newCliente.save();
    res.json({message: 'Cliente saved'})
};

ClienteCtrl.updateCliente = async (req, res) => {
    const { cliente, domicilio, referencia, img } = req.body
    const newCliente = await Cliente.findByIdAndUpdate(req.params.id, {
        cliente,
        domicilio,
        referencia,
        img
    });
    await newCliente.save();
    res.json({message: 'Cliente Updated'});
};

ClienteCtrl.deleteCliente = async (req, res) => {
    await Cliente.findByIdAndRemove(req.params.id);
    res.json({message: 'Cliente Deleted'});
};


module.exports = ClienteCtrl;
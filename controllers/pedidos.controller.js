const pedidoCtrl = {};

const Pedido = require('../models/Pedido')

pedidoCtrl.getPedidos = async (req, res) => {
    const pedidos = await Pedido.find().populate("producto cliente");
    res.json(pedidos)
};

pedidoCtrl.getPedido = async(req, res) => {
    const pedidos = await Pedido.findById(req.params.id);
    res.json(pedidos);
};

pedidoCtrl.createPedido = async (req, res) => {
    const { producto, cliente, tamano, price, amount, dedicatoria, tematica, details, modeloFoto, total, fechaEntrega, horaEntrega, date } = req.body
    const newPedido = new Pedido({
        producto,
        cliente,
        tamano,
        price,
        amount,
        dedicatoria,
        tematica,
        details,
        modeloFoto,
        total, 
        fechaEntrega,
        horaEntrega,
        date
    });
    await newPedido.save();
    res.json({message: 'Pedido saved'})
};

pedidoCtrl.updatePedido = async (req, res) => {
    const { producto, cliente, tamano, price, amount, dedicatoria, tematica, details, modeloFoto, total, fechaEntrega, horaEntrega, date } = req.body
    const newPedido = await Pedido.findByIdAndUpdate(req.params.id, {
        producto,
        cliente,
        tamano,
        price,
        amount,
        dedicatoria,
        tematica,
        details,
        modeloFoto,
        total, 
        fechaEntrega,
        horaEntrega,
        date
    });
    await newPedido.save();
    res.json({message: 'Pedido Updated'});
};

pedidoCtrl.deletePedido = async (req, res) => {
    await Pedido.findByIdAndRemove(req.params.id);
    res.json({message: 'Pedido Deleted'});
};


module.exports = pedidoCtrl;



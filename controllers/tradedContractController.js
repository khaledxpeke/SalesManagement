const TradedContract = require("../models/tradedContract");
const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());

exports.createTradedContract = async (req, res) => {
    const { tradeInOffer, tradedDevice } = req.body;
    try {
        const newTradedContract = new TradedContract({
            tradeInOffer,
            tradedDevice,
        });
        await newTradedContract.save();
        res.json(newTradedContract);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Server Error" });
    }
};

exports.getTradedContracts = async (req, res) => {
    try {
        const tradedContracts = await TradedContract.find();
        res.json(tradedContracts);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Server Error" });
    }
};

exports.getTradedContractById = async (req, res) => {
    const tradedContractId = req.params.tradedContractId;
    try {
        const tradedContract = await TradedContract.findById(tradedContractId);
        if (!tradedContract) {
            return res.status(404).json({ message: "TradedContract not found" });
        }
        res.json(tradedContract);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Server Error" });
    }
};

exports.deleteTradedContract = async (req, res) => {
    const tradedContractId = req.params.tradedContractId;
    try {
        const tradedContract = await TradedContract.findById(tradedContractId);
        if (!tradedContract) {
            return res.status(404).json({ message: "TradedContract not found" });
        }
        await tradedContract.remove();
        res.json({ message: "TradedContract deleted" });
    }
    catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Server Error" });
    }
};
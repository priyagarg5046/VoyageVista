import express from 'express';
import Destination from '../model/destination.js';
import {isAdmin} from '../middlewares/isAdmin.js';
import { isLoggedIn } from '../middlewares/isLoggedin.js';
const router=express.Router();

router.get("/",isLoggedIn,async (req,res)=>{
    try{
        const destinations=await Destination.find();
        res.json(destinations);
    }

    catch(err){
        res.status(500).json({ message: "Error retrieving destinations." });
    }
})

router.get("/:id",isLoggedIn,async(req,res)=>{
    try{
        const destination=await Destination.findById(req.params.id);
        if(!destination){
            return res.status(404).json({ message: "Destination not found." });
        }
        res.json(destination);
    }catch (error) {
        res.status(500).json({ message: "Error retrieving destination." });
    }
})

router.post('/',isAdmin, async (req, res) => {
    try {
        const newDestination = new Destination(req.body);
        await newDestination.save();
        res.status(201).json(newDestination);
    } catch (error) {
        res.status(500).json({ message: "Error adding destination." });
    }
});

router.put('/:id',isAdmin, async (req, res) => {
    try {
        const updatedDestination = await Destination.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedDestination) return res.status(404).json({ message: "Destination not found." });
        res.json(updatedDestination);
    } catch (error) {
        res.status(500).json({ message: "Error updating destination." });
    }
});

router.delete('/:id',isAdmin, async (req, res) => {
    try {
        const deletedDestination = await Destination.findByIdAndDelete(req.params.id);
        if (!deletedDestination) return res.status(404).json({ message: "Destination not found." });
        res.json({ message: "Destination deleted successfully." });
    } catch (error) {
        res.status(500).json({ message: "Error deleting destination." });
    }
});

export default router;
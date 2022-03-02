const express = require('express');
const { student } = require('../models');
const Validator = require('fastest-validator');
const v = new Validator();


// findAll data
exports.findAll = async (req, res) => {
    const findAll = await student.findAll();
    
    if(!findAll){
        return  res.json({
            "status":404,
            "data":"data not found"
        });
    }
    return res.json({
        "status": 200,
        "data": findAll
    })
}

//find data by id
exports.findById = async (req, res) => {
    const id = req.params.id;
    const cek = await student.findByPk(id);

    if(!cek){
        return  res.json({
            "status":404,
            "data":"data not found"
        });
    }
    return  res.json({
        "status": 200,
        "data": cek
    });
}

// create and save data 
exports.create = async (req, res ,next) => {
    // validasi request
    const schema = {
        name:'string',
        rombel:'string',
        rayon:'string',
    }

    const validate = v.validate(req.body , schema);

    if(validate.length){
        return  res.status(400).json(validate);
    }
    
    try {
        const create = await student.create({
            name: req.body.name,
            rombel: req.body.rombel,
            rayon: req.body.rayon,
            image: req.file.originalname
        })

        if(!req.file){
            return res.send("image cannot be null");
        }
        
        if(create){
            return  res.status(200).json({
                data: create
            });
        }else{
            var err = new Error('Request body not found');
            throw err
        }
    } catch (err) {
        return res.status(500).send('Cannot add student');
    }
}

// update data and save data
exports.update = async (req, res, next) => {
    const id = req.params.id ;
    let cek = await student.findByPk(id);

    if(!cek){
        return res.json({
            "message":"data not found"
        })
    }

    const schema = {
        name:'string|optional',
        rombel:'string|optional',
        rayon:'string|optional',
        image:'string|optional'
    }

    const validate = v.validate(req.body, schema);

    if(validate.length){
        res.status(400).json(validate);
    }

    try {  
        const data = await student.update(
            {
                name: req.body.name,
                rombel: req.body.rombel,
                rayon: req.body.rayon,
                image: req.file.originalname
            },
            { 
                where: { id: id}
            }
        ); 

        if(data){
            return res.status(200).json({
                data: req.body
            })
        }else{
            const err = new Error("Cannot update student");
            throw err;
        }
    } catch (err) {
        res.status(500).send({
            message: err
        });
    }  
}

exports.delete = async (req, res) => {
    const id = req.params.id;
    const cek = await student.findByPk(id)

    try {
        if(cek){
            await student.destroy({
                where: {id:id}
            });

            return  res.json({
                status: 200,
                message: "Successfully"
            });
        }else{
            const err = new Error("student not found");
            throw err;
        }
    } catch (err) {
        return res.status(500).json({
            message: err
        });
    }
}


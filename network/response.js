exports.success = (req, res, message) =>{
    res.status(201).send({error: '', body: message})
};
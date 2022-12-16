const validateBody = (request, response, next) => {
     const { body } = request;

     if(body.title == undefined){
        return response.status(400).json({ message: 'o campo title é solicitado!' });
     }

     if(body.title == ''){
        return response.status(400).json({ message: 'o campo title não pode estar vazio!' });
    }

    next();

 };

module.exports = {
    validateBody,
}
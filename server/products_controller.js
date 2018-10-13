

module.exports = {
    getInventory: (req,res,next) => {
        const db = req.app.get('db')

        db.read_inventory()
    
        .then( inventory => {
            res.send(inventory)
            // console.log('I got hit', inventory)
        } )
        
        .catch( err => {
            console.log('Something went wrong with read_inventory', err)
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"})
        });
    },
    newItem: (req,res,next) => {
        const db = req.app.get('db');
        const {name, price , imgUrl} = req.body
          
        db.create_product([name, price, imgUrl])
        .then( () => res.sendStatus(200) )
        .catch(err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.error("error in create method", err) 
        })
    },
    deleteItem: (req,res,nex) => {
        // console.log('new delete got hit')
        const db = req.app.get('db')
        const {id} = req.params;

        db.delete_product([id])
        .then( () => res.status(200))
        .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log('---------------------Error in delete method--------------------', err)       
            })
    },
    editItem: (req,res,next) => {
        console.log(req.params, req.body)
        const db = req.app.get('db');
        const {id} = req.params;
        const {price, name, imgUrl} = req.body;

        db.edit_product()
    }
       
}

// delete: (req,res,next) => {
//     const db = req.app.get('db')
//     const {id} = req.params;

//     db.delete_product([id])
//     .then( () => res.sendStatus(200) )
//     .catch( err => {
//     res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
//     console.log('---------------------Error in delete method--------------------', err)       
//     })
// }



// db.create_product([name, price, imgUrl])
// .then( () => res.sendStatus(200) )
// .catch( err => {
// res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
// console.error("error in create method", err)
// create: (req, res, next) => {
//     const db = req.app.get('db');
//     const { name, description, price, image_url } = req.body;

//     db.create_product([name, description, price, image_url])
//     .then( () => res.sendStatus(200) )
//     .catch( err => {
//         res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
//         console.error("error in create method", err)
//     });
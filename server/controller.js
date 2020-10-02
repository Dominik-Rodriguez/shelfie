
module.exports = {
    getProducts: (req, res) => {
        const db = req.app.get('db');

        db.read_products()
        .then(product => res.status(200).send(product))
        .catch(err => res.status(500).send(err));
    },

    // newItem: (req, res) => {
    //     const {url, name, price} = req.body;
    //     const db = req.app.get('db');

    //     db.add_item([url, name, price])
    //     .then(product => res.status(200).send(product))
    //     .catch(err => res.status(500).send(err));
    // },
    
    newItem: (req, res, next) => {
        const db = req.app.get('db');
        const { url, name, price } = req.body;
    
        db.add_item([url, name, price])
          .then(() => res.sendStatus(200))
          .catch(err => {
            res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
            console.log(err)
          });
        }
}
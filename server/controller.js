module.exports = {
    getProducts: (req, res) => {
        const db = req.app.get('db');

        db.read_products()
        .then(product => res.status(200).send(product))
        .catch(err => res.status(500).send(err));
    },
    
    newItem: (req, res) => {
        const db = req.app.get('db');
        const { url, name, price } = req.body;
    
        db.add_item({url, name, price})
          .then(() => res.status(200))
          .catch(err => {
            res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
            console.log(err)
          });
    },
    
    deleteItem: (req, res) => {
      const db = req.app.get('db');
      const {id} = req.params;

      db.deleteItem({id})
      .then(product => res.status(200).send(product))
      .catch(err => res.status(500).send(err));
    },

    editItem: (req, res) => {
      const {id} = req.params;
      const {newUrl, newName, newPrice} = req.body;
      const db = req.app.get('db');
      console.log(id, newUrl, newName,newPrice);
      db.edit_item([id, newUrl, newName, newPrice])
      .then(product => res.status(200).send(product))
      .catch(err => res.status(500).send(err));
    }
}
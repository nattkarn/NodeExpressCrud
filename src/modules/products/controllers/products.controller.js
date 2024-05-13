import ProductService from "../services/products.service.js"

const productController = {
  getProduct: async (req, res) => {
    const product = await ProductService.getAll();
    
    try {
      res.status(200).json({
        success: true,
        timestamp: new Date(),
        data: {
          result: product,
        },
      });
    } catch (err) {
      console.log(err);
      res.status(500).send("Server Error");
    }
  },
  getProductById: async (req, res) => {
    const { id } = req.params;
    const product = await ProductService.getOne(id);
    try {
      res.status(200).json({
        success: true,
        timestamp: new Date(),
        data: {
          result: product,
        },
      });
    } catch (err) {
      console.log(err);
      res.status(500).send("Server Error");
    }
  },
  findTitleProduct: async (req, res) => {
    const { title } = req.body;
    // const jsonString = JSON.stringify(); //convert json to jsonString
    // const jsonObj = JSON.parse({ title })
    const product = await ProductService.findProduct({ title });
    try {
      res.status(201).json({
        success: true,
        timestamp: new Date(),
        data: {
          result: product,
        },
      });
    } catch (err) {
      console.log(err);
      res.status(500).send("Server Error");
    }
  },
  addProduct: async (req, res) => {
    const { title, description, price } = req.body;
    const created = await ProductService.create({ title, description, price });
    try {
      res.status(201).json({
        success: true,
        timestamp: new Date(),
        data: {
          result: created,
        },
      });
    } catch (err) {
      console.log(err);
      res.status(500).send("Server Error");
    }
  },
  updateProduct: async (req, res) => {
    const { id } = req.params;
    const { title, description, price } = req.body;
    const filter = { _id: id };
    const updated = await ProductService.updateOne(filter, {
      title,
      description,
      price,
    });
    console.log("Before Update:", updated);
    const product = await ProductService.getOne(id);
    console.log("Updated:", product);
    try {
      res.status(201).json({
        success: true,
        timestamp: new Date(),
        data: {
          result: product,
        },
      });
    } catch (err) {
      console.log(err);
      res.status(500).send("Server Error");
    }
  },
  //Not recommend to do this
  deleteProduct: async (req, res) => {
    const { id } = req.params;
    const filter = { _id: id };
    const delProduct = await ProductService.delProduct(filter);
    try {
      res.status(200).json({
        success: true,
        timestamp: new Date(),
        data: {
          result: delProduct,
        },
      });
    } catch (err) {
      console.log(err);
      res.status(500).send("Server Error");
    }
  },
};
export default productController;

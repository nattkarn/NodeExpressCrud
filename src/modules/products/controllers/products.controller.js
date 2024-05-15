import ProductService from "../services/products.service.js";
import fs from "fs";
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
    // const { title, description, price } = req.body;
    //

    var data = req.body;

    if (req.file) {
      data.file = req.file.filename;
    }

    try {
      const created = await ProductService.create(data);
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

    const filter = { _id: id };

    var data = req.body;
    if (req.file) {
      data.file = req.file.filename;
    }

    const updated = await ProductService.updateOne(filter, data);
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

    try {
      const product = await ProductService.getOne(id);
      if (product) {
        const delProduct = await ProductService.delete(filter);
        // link remove from storage
        if (delProduct?.file) {
          await fs.unlink("./src/uploads/" + delProduct.file, (err) => {
            if (err) {
              throw err;
            } else {
              console.log(`${delProduct.file} was deleted`);
            }
          });
        }
        res.status(200).json({
          success: true,
          timestamp: new Date(),
          data: {
            result: "delProduct",
          },
        });
      } else {
        res.status(400).send("Product not found");
      }
    } catch (err) {
      console.log(err);
      res.status(500).send("Server Error");
    }
  },
};
export default productController;

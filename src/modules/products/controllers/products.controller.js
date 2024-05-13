// import ProductService from "../service/product.service.js";

const productController = {
  getProduct:  (req, res) => {
    // const product = await ProductService.getAll();
    // res.status(200).send(product);
    res.status(200).json({
      success: true,
      timestamp: new Date(),
      data: {
        result: "product",
      },
    });
//   },
//   getProductById: async (req, res) => {
//     const { id } = req.params;
//     const product = await ProductService.getOne(id);
//     res.status(200).json({
//       success: true,
//       timestamp: new Date(),
//       data: {
//         result: product,
//       },
//     });
//   },
//   findTitleProduct: async (req, res) => {
//     const { title } = req.body;
//     // const jsonString = JSON.stringify(); //convert json to jsonString
//     // const jsonObj = JSON.parse({ title })
//     const product = await ProductService.findProduct({ title });
//     res.status(201).json({
//       success: true,
//       timestamp: new Date(),
//       data: {
//         result: product,
//       },
//     });
//   },
//   addProduct: async (req, res) => {
//     const { title, description, price } = req.body;
//     const created = await ProductService.create({ title, description, price });
//     res.status(201).json({
//       success: true,
//       timestamp: new Date(),
//       data: {
//         result: created,
//       },
//     });
//   },
//   updateProduct: async (req, res) => {
//     const { id } = req.params;
//     const { title, description, price } = req.body;
//     const filter = { _id: id };
//     const updated = await ProductService.updateOne(filter, {
//       title,
//       description,
//       price,
//     });
//     console.log("Before Update:", updated);
//     const product = await ProductService.getOne(id);
//     console.log("Updated:", product);
//     res.status(201).json({
//       success: true,
//       timestamp: new Date(),
//       data: {
//         result: product,
//       },
//     });
//   },
//   //Not recommend to do this
//   deleteProduct: async(req, res) => {
//     const { id } = req.params;
//     const filter = { _id: id}
//     const delProduct = await ProductService.delProduct(filter);
//     res.status(200).json({
//       success: true,
//       timestamp: new Date(),
//       data: {
//         result: delProduct,
//       },
//     });
  },
};
export default productController;

const asyncHandler = (reqestHandler) => (req, res, next) => {
  Promise.resolve(reqestHandler(req, res, next)).catch((err) => next(err));
};

export { asyncHandler };

//ANOTHER APPROACH:

// const asyncHandler = (func) => async (req, res, next) => {
//   try {
//     await func(req, res, next);
//   } catch (err) {
//     res.status(err.code || 500).json({
//       sucess: "false",
//       message: err.message,
//     });
//   }
// };

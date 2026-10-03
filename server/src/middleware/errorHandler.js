function notFound(req, res) {
  res.status(404).json({ message: "Route not found." });
}

function errorHandler(err, req, res, next) {
  console.error(err);
  res.status(err.status || 500).json({ message: "Something went wrong. Please try again." });
}

module.exports = { notFound, errorHandler };

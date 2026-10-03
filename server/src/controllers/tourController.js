const { readDb, writeDb, nextId } = require("../db/store");

function createTour(req, res) {
  const db = readDb();
  const {
    category_id,
    destination_id,
    title,
    price,
    duration,
    included_services,
    excluded_services,
    rating_avg,
  } = req.body;

  const errors = {};

  const categoryIdNum = Number(category_id);
  if (category_id === undefined || category_id === null || !Number.isInteger(categoryIdNum)) {
    errors.category_id = ["category_id is required and must be an integer."];
  }

  let destinationIdNum = null;
  if (destination_id !== undefined && destination_id !== null && destination_id !== "") {
    destinationIdNum = Number(destination_id);
    if (!Number.isInteger(destinationIdNum)) {
      errors.destination_id = ["destination_id must be an integer."];
    }
  }

  const cleanTitle = String(title || "").trim();
  if (!cleanTitle) {
    errors.title = ["title is required."];
  }

  const priceNum = Number(price);
  if (price === undefined || price === null || price === "" || !Number.isFinite(priceNum) || priceNum < 0) {
    errors.price = ["price is required and must be a valid number."];
  }

  let ratingAvgNum = null;
  if (rating_avg !== undefined && rating_avg !== null && rating_avg !== "") {
    ratingAvgNum = Number(rating_avg);
    if (!Number.isFinite(ratingAvgNum)) {
      errors.rating_avg = ["rating_avg must be a number."];
    }
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      message: "Validation failed. Please check the fields below.",
      errors,
    });
  }

  const now = new Date().toISOString();
  const tour = {
    id: nextId(db.tours),
    category_id: categoryIdNum,
    destination_id: destinationIdNum,
    title: cleanTitle,
    price: priceNum,
    duration: duration || null,
    included_services: included_services ?? null,
    excluded_services: excluded_services ?? null,
    rating_avg: ratingAvgNum,
    created_at: now,
    updated_at: now,
  };

  db.tours.push(tour);
  writeDb(db);

  res.status(201).json({
    message: "Tour created successfully.",
    data: tour,
  });
}


function listTours(req, res) {
  const db = readDb();
  res.json({ data: db.tours });
}

module.exports = { createTour, listTours };
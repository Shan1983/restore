import { Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../app/models/products";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((e) => console.log(e.message))
      .finally(() => setLoading(false));
  }, [loading, id]);

  if (loading) return <h3>Loading..</h3>;

  if (!product) return <h3>No product found</h3>;

  return <Typography variant="h2">{product.name}</Typography>;
}

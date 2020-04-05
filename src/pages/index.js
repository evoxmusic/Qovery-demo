import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
<section>
  <h2>Silver Stacking Ring</h2>
  <p>$19.99</p>
  <p>Wear one or seventeen! These rings are fun to mix and match.</p>
  <button
    class="snipcart-add-item"
    data-item-id="silver-stacking-ring"
    data-item-price="19.99"
    data-item-url="/"
    data-item-name="Silver Stacking Ring"
    data-item-file-guid="your-digital-product-guid"
  >
    Add to cart
  </button>
</section>
)

export default IndexPage

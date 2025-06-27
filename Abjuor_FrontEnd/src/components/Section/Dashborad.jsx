import React, { useState } from 'react';
import '../../styles/Dashbord.scss';
import { ListGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Dashborad({className}) {
  const PageNavigate = useNavigate();
  const [active , setActive] = useState("Executive-Table")


  const categoryMap = {
    "Executive-Table": "Office Tables",
    "Kids-Chair": "Office Furniture",
    "Office-Chairs": "Office Furniture",
    "Chairman-Chairs": "Office Chairs",
    "Conference-Table": "Office Tables",
    "Office-Sofa": "Office Furniture",
    "Study-Chairs": "Institutional",
    "Cabinet-Storage": "Office Furniture",
    "Cafe-Restaurant-Furniture": "Other products",
    "Training-Chair": "institutional",
  };

  const filteredProducts = (subCategory) => {
    const mainCategory = categoryMap[subCategory];
    if (mainCategory) {
      PageNavigate(`/product-category/${mainCategory}/${subCategory}`);
    } else {
      alert("Main category not found for this sub-category.");
    }
  };

  return (
    <div className={`dashbord-slider`}>
      <h4 className="mb-3">Product Categories</h4>
      <ListGroup>
        {Object.keys(categoryMap).map((subCat, idx) => (
          <>
            <li className={active === subCat   ? "active" : ""} key={idx} onClick={() => {filteredProducts(subCat); setActive(subCat)}}>
              <Link to="#">{subCat}</Link>
            </li>
          </>
        ))}
      </ListGroup>
    </div>
  );
}

export default Dashborad;

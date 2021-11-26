// import section
import React from 'react';
import './Cart.css';
const Cart = (props) => {
  // Calculate the total cost
  let total = 0;
  for (const developer of props.selectedDevelopers) {
    total += developer.demand;
  }

  return (
    <div className="d-flex flex-column d-block my-5">
      <h5 className="text-center">
        <span className="fw-bold"> Total Developer:</span>
        {props.selectedDevelopers.length}
      </h5>

      <h5 className="text-center">
        <span className="fw-bold">Total Cost:$</span>
        {total}
      </h5>
      <h5 className="text-center text-danger">
        <span className="fw-bold">Developer Teams:</span>
      </h5>
      <ul className="ps-5 ms-4">
        {props.selectedDevelopers.map((developer) => (
          <li className="" key={developer.key}>
            <h5 className=" green-color fw-bold ">{developer.name}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;

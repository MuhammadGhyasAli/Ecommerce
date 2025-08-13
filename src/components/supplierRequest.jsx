import React from 'react'
import "../css/supplierRequest.css"
export default function supplierRequest() {
  return (
    <div id="supplierRequestSection">
        <div id="titleNtext">
          <h1>
            An easy way to send <br />
            requests to all suppliers
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing <br />
            elit, sed do eiusmod tempor incididunt
          </p>
        </div>
        <div id="requestForm">
          <h3>Send Quote to Supplier</h3>
          <input type="text" placeholder="What item you need?" aria-label="Item needed" />
          <input
            type="text"
            placeholder="Type more details"
            id="details"
            aria-label="Details"
          />
          <div id="quntNpc">
            <input type="text" placeholder="Quantity" aria-label="Quantity" />
            <input type="text" placeholder="Pcs" aria-label="Unit" />
          </div>
          <button id="Send">Send Inquiry</button>
        </div>
    </div>
  )
}

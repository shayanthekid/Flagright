import React, { Component } from 'react'
import { CodeBlock, atomOneDark } from "react-code-blocks";
let code = `transactionId: "7b80a539eea6e78acbd6d458e5971482",
sendingAmount Details: {
country: "DE",
transactionAmount: 800,
transactionCurrency:"EUR",
},
receivingAmountDetails:{
country: "IN",
transactionAmount: 68351.34,
transactionCurrency: "INR",
},
timestamp: 1641654664,
senderPayment Details: {   
            `;
let language = "javascript";
let showLineNumbers = true;
let startingLineNumber = 1;
let title= "Sanction Checks"
export default class Developers extends Component {
  render() {
    return (
        <div style={{ backgroundColor: "#1A1935" }} className=' hidden lg:block py-28'>
            <div className="grid grid-cols-2  justify-center items-center relative">
                <div className="col-span-1 text-white text-center px-16">
                    <p className="text-center text-lg font-medium mb-4 p-2 rounded  bg-indigo-900">{title}</p>
                    <CodeBlock
                        text={code}
                        language={language}
                        showLineNumbers={showLineNumbers}
                        startingLineNumber={startingLineNumber}
                        theme={atomOneDark}
                    />
                    <div className="absolute bottom-4 ml-96 left-40 ">
                        <button className="bg-blue-500 text-white p-2 ">Send Request</button>
                    </div>
                </div>
                <div className="col-span-1 text-white justify-center justify-self-center ">
                    <h2 className="text-left text-3xl font-sans font-semibold   text-white  pb-5 ">Designed for <span style={{ color: '#7E6BDD' }}>developers</span> </h2>

                    <p>Meet the industry's most robust REST API. Powerful, centralized system <br /> abstracted into a single, easy-to-use API. Integrate end-to-end within 4 days</p>
                    <div className="flex items-center  ">
                        <a href="#" onClick={(event) => { event.preventDefault(); }} className="text-indigo-500 text-sm pr-2 py-4 text-white">Read API Docs</a>
                        <svg className="w-5 h-5 -ml-1 text-indigo-500 fill-current" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />  </svg>
                    </div>
                    <div className="flex items-center  ">
                        <a href="#" onClick={(event) => { event.preventDefault();  }} className="text-indigo-500 text-sm pr-2  text-white">Get an API key</a>
                        <svg className="w-5 h-5 -ml-1 text-indigo-500 fill-current" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />  </svg>
                    </div>
                </div>
            </div>
           
           
        
            
            </div>
    )
  }
}

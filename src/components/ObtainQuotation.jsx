import  React  from  'react';

const  ObtainQuotation = ({ selectQuotation }) => {
      return (
            <div  className="ObtainQuotation">
            <button  onClick={selectQuotation}>Get quotation</button>
            </div>
      );
      
};

export  default  ObtainQuotation;
import  React  from  'react';



const  DisplayQuotation = ({ quotation }) => {
      return (
            <div  className="DisplayQuotation">
                  <img  src={quotation.image}  alt="picture"  />
                  <h3> "{quotation.quote}" - {quotation.character}
                  </h3>
            </div>
      );
};

export  default  DisplayQuotation;
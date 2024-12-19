const FooterCard = () => {
  return (
    <>
      <div className="text-secondary">
        <a href="/">
          <h3 className="font-semibold font-sans">Shop Categories</h3>
          <div className="text">
            <p>Makeup</p>
            <p>Hair Care</p>
            <p>Skin Care</p>
            <p>Hand & Feet</p>
            <p>Body Care</p>
          </div>
          
        </a>
      </div>

      <div className="text-secondary">
        <a href="/">
          <h3 className="font-semibold font-sans"> Subcategories</h3>
          <div className="text">
            <h5 className="font-semibold font-sans text-[16px]">Makeup</h5>
            <p>Face</p>
            <p>Eyes</p>
            <p>Lips</p>
            <p>Nail</p>
            <p>liner&Macara</p>
            <p>Accessories</p>
            <h5 className="font-semibold font-sans text-[16px]">Skin Care</h5>
            <p>Face Masks</p>
            <p>Scrub</p>
            <p>Serums</p>
            <p>MoisturizerR</p>
          </div>
        </a>
      </div>

      <div className="text-secondary">
        <a href="/">
        <h3 className="font-semibold font-sans text-[16px]">Hair Care</h3>
        <div className="text">
          <p>Shampoo</p>
          <p>Mask</p>
          <p>Conditinor</p>
          <p>oil</p>
          <p>spray</p>
          <h5 className="font-semibold font-sans text-[16px]">Hand&Feet</h5>
          <p>Scrub</p>
          <p>creams</p>
          <p>Hand Mask</p>
          <p>Hand Wash</p>
        </div>
        
        </a>
      </div>

      <div className="text-secondary">
        <a href="/">
          <h3 className="font-semibold font-sans text-[16px]">BodyCare</h3>
          <div className="text">
          <p>Shower Gel</p>
          <p>Scrub</p>
          <p>Lotion</p>
          <p>Cream</p>
          </div>  
        </a>
      </div>
      {/* Help */}
      <div className="text-secondary">
        <h3 className="font-semibold font-sans text-[16px]">Help</h3>
        <div className="text">
              <ul>
          <li>
            <a href="/">Contect us</a>
          </li>
          <li>
            <a href="/">FAQs</a>
          </li>
          <li>
            <a href="/">Privacy policy</a>
          </li>
          <li>
            <a href="/">Payment policy</a>
          </li>
        </ul>
        </div>
      
      </div>
    </>
  );
};

export default FooterCard;

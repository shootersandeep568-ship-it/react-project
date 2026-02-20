import React from "react";

const About = () => {

  const data = [
    {
      title: "MOST SEARCHED ON FLIPKART",
      items: [
        "iPhone 15", "Samsung Galaxy S24", "OPPO K14x 5G",
        "Laptops", "Men's Shoes", "Smart Watches",
        "Earphones", "Air Conditioners", "LED TVs",
        "Women's Dresses", "Kitchen Appliances,Samsung Mobiles", "Apple iPhones", "Realme Mobiles",
        "OnePlus Mobiles", "Redmi Phones", "5G Mobiles",
        "Mobiles Under 10000", "Mobiles Under 20000,Apple Laptops", "HP Laptops", "Dell Laptops",
        "Gaming Laptops", "Laptops Under 50000",
        "i5 Laptops", "i7 Laptops,Apple Laptops", "HP Laptops", "Dell Laptops",
        "Gaming Laptops", "Laptops Under 50000",
        "i5 Laptops", "i7 Laptops,Apple Laptops", "HP Laptops", "Dell Laptops",
        "Gaming Laptops", "Laptops Under 50000",
        "i5 Laptops", "i7 Laptops,Apple Laptops", "HP Laptops", "Dell Laptops",
        "Gaming Laptops", "Laptops Under 50000",
        "i5 Laptops", "i7 Laptops"
      ]
    },
    {
      title: "MOBILES",
      items: [
        "Samsung Mobiles", "Apple iPhones", "Realme Mobiles",
        "OnePlus Mobiles", "Redmi Phones", "5G Mobiles",
        "Mobiles Under 10000", "Mobiles Under 20000,iPhone 15", "Samsung Galaxy S24", "OPPO K14x 5G",
        "Laptops", "Men's Shoes", "Smart Watches",
        "Earphones", "Air Conditioners", "LED TVsiPhone 15", "Samsung Galaxy S24", "OPPO K14x 5G",
        "Laptops", "Men's Shoes", "Smart Watches",
        "Earphones", "Air Conditioners", "LED TVsiPhone 15", "Samsung Galaxy S24", "OPPO K14x 5G",
        "Laptops", "Men's Shoes", "Smart Watches",
        "Earphones", "Air Conditioners", "LED TVs"
      ]
    },
    {
      title: "LAPTOPS",
      items: [
        "Apple Laptops", "HP Laptops", "Dell Laptops",
        "Gaming Laptops", "Laptops Under 50000",
        "i5 Laptops", "i7 Laptops,Apple Laptops", "HP Laptops", "Dell Laptops",
        "Gaming Laptops", "Laptops Under 50000",
        "i5 Laptops", "i7 Laptops,Apple Laptops", "HP Laptops", "Dell Laptops",
        "Gaming Laptops", "Laptops Under 50000",
        "i5 Laptops", "i7 Laptops,Apple Laptops", "HP Laptops", "Dell Laptops",
        "Gaming Laptops", "Laptops Under 50000",
        "i5 Laptops", "i7 Laptops"
      ]
    },
    {
      title: "FASHION",
      items: [
        "Men's Shirts", "Women's Dresses",
        "Jeans", "T-Shirts", "Shoes",
        "Sneakers", "Watches"
      ]
    },
    {
      title: "HOME & FURNITURE",
      items: [
        "Beds", "Sofa Sets", "Dining Tables",
        "Wardrobes", "Office Chairs", "Mattress"
      ]
    }
  ];

  return (
    <div className="brandDirectory">
      <h2>Top Stories : Brand Directory</h2>

      {data.map((section, index) => (
        <div className="brandSection" key={index}>
          <h3>{section.title}</h3>
          <div className="brandLinks">
            {section.items.map((item, i) => (
              <a href="/" key={i}>{item}</a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
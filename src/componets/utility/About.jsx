import React from "react";

const About = () => {

  const data = [
    {
      title: "☠ MOST SEARCHED CURSED ITEMS ☠",
      items: [
        "iPhone 15", "Samsung Galaxy S24", "OPPO K14x 5G",
        "Laptops", "Men's Shoes", "Smart Watches",
        "Earphones", "Air Conditioners", "LED TVs",
        "Women's Dresses", "Kitchen Appliances"
      ]
    },
    {
      title: "📱 HAUNTED MOBILES",
      items: [
        "Samsung Mobiles", "Apple iPhones", "Realme Mobiles",
        "OnePlus Mobiles", "Redmi Phones", "5G Mobiles",
        "Mobiles Under 10000", "Mobiles Under 20000"
      ]
    },
    {
      title: "💻 CURSED LAPTOPS",
      items: [
        "Apple Laptops", "HP Laptops", "Dell Laptops",
        "Gaming Laptops", "Laptops Under 50000",
        "i5 Laptops", "i7 Laptops"
      ]
    },
    {
      title: "👗 DARK FASHION",
      items: [
        "Men's Shirts", "Women's Dresses",
        "Jeans", "T-Shirts", "Shoes",
        "Sneakers", "Watches"
      ]
    },
    {
      title: "🏚️ HAUNTED HOME & FURNITURE",
      items: [
        "Beds", "Sofa Sets", "Dining Tables",
        "Wardrobes", "Office Chairs", "Mattress"
      ]
    }
  ];

  return (
    <div className="spooky-about">

      <h2 className="main-title">☠ Dark Store : Brand Directory ☠</h2>

      {data.map((section, index) => (
        <div className="brandSection" key={index}>

          <h3 className="section-title">{section.title}</h3>

          <div className="brandLinks">
            {section.items.map((item, i) => (
              <a href="/" key={i} className="linkItem">
                ☠ {item}
              </a>
            ))}
          </div>

        </div>
      ))}

    </div>
  );
};

export default About;
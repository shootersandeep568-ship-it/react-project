import React from "react";

const sections = [
  { title: "Most loved", items: ["New arrivals", "Bestsellers", "Editor's picks", "Gifts under ₹2,000", "Premium essentials"] },
  { title: "Technology", items: ["Smartphones", "Laptops", "Audio", "Wearables", "Home entertainment"] },
  { title: "Style", items: ["Women's fashion", "Men's fashion", "Shoes", "Watches", "Accessories"] },
  { title: "Home", items: ["Furniture", "Kitchen", "Decor", "Bedding", "Lighting"] },
];

const About = () => (
  <section className="spooky-about">
    <p className="eyebrow">EXPLORE AURELIA</p>
    <h2 className="main-title">A considered collection, beautifully chosen.</h2>
    {sections.map((section) => (
      <div className="brandSection" key={section.title}>
        <h3 className="section-title">{section.title}</h3>
        <div className="brandLinks">
          {section.items.map((item) => <a href="/" key={item} className="linkItem">{item}</a>)}
        </div>
      </div>
    ))}
  </section>
);

export default About;

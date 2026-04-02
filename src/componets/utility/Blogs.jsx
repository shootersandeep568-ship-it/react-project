import React from "react";

const Blogs = () => {
  return (
    <div className="spooky-blog-container">

      <h1 className="spooky-title">
        ☠ The Cursed Marketplace: A Dark Shopping Tale ☠
      </h1>

      <p className="spooky-text">
        Welcome… if you dare 😈  
        This is no ordinary store. Since 2007, this cursed marketplace has been 
        attracting millions of souls 👻 with its endless collection of mysterious items.  
        Some say… once you enter, you never stop scrolling...
      </p>

      <h2 className="spooky-subtitle">
        🩸 What Dark Treasures Will You Find?
      </h2>

      {/* Section 1 */}
      <section className="spooky-section">
        <h3>📱 Haunted Devices</h3>
        <p>
          Discover cursed <a href="/">Samsung</a>, <a href="/">Apple</a>,
          <a href="/">OnePlus</a>, <a href="/">Vivo</a> devices.  
          These <a href="/">5G Mobiles</a> whisper at night…  
          <a href="/">Gaming Phones</a> that glow in the dark…  
          and <a href="/">Budget Phones</a> that hide secrets...
        </p>
      </section>

      {/* Section 2 */}
      <section className="spooky-section">
        <h3>🏚️ Possessed Appliances</h3>
        <p>
          Beware of <a href="/">Smart TVs</a> that turn on by themselves,  
          <a href="/">Air Conditioners</a> that breathe cold whispers,  
          <a href="/">Refrigerators</a> that hum in the night,  
          and <a href="/">Microwaves</a> that flicker mysteriously...
        </p>
      </section>

      {/* Section 3 */}
      <section className="spooky-section">
        <h3>🧛 Dark Fashion</h3>
        <p>
          Wear the shadows with <a href="/">Men's Clothing</a>,  
          cursed <a href="/">Women's Dresses</a>,  
          haunted <a href="/">Watches</a>,  
          and enchanted <a href="/">Makeup</a> & <a href="/">Haircare</a>.
        </p>
      </section>

      {/* Section 4 */}
      <section className="spooky-section">
        <h3>🪑 Haunted Furniture</h3>
        <p>
          Rest… if you can… on <a href="/">Beds</a>,  
          sit on <a href="/">Sofa Sets</a> that creak at midnight,  
          gather around <a href="/">Dining Tables</a>,  
          and open <a href="/">Wardrobes</a> that may not be empty...
        </p>
      </section>

    </div>
  );
};

export default Blogs;
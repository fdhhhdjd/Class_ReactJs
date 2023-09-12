//* REACT
import React, { useState } from 'react';

//* STYLE
import './style.css';

//* CATEGORIES
import Categories from './categori_item';

//* DATA
import items from './data';

//* ASSETS
import logo from '../../../assets/images/logo.png';

//* MENU
import Menu from './menu';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

const Home = () => {
  const [menuItem, setMenuItem] = useState(items);
  const [activeCategory, setActiveCategory] = useState('');
  const [categories, setCategories] = useState(allCategories);

  const handleFilterItems = (category) => {
    setActiveCategory(category);
    if (category === 'all') {
      setMenuItem(items);
      return;
    }
    const menuItems = items.filter((item) => item.category === category);
    setMenuItem(menuItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <img src={logo} alt="logo" className="logo" />
          <h2>Menu List</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          onFilterItems={handleFilterItems}
        />
        <Menu items={menuItem} />
      </section>
    </main>
  );
};

export default Home;

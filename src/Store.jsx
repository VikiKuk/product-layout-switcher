import { useState } from 'react';
import IconSwitch from './components/IconSwitch';
import CardsView from './components/CardsView';
import ListView from './components/ListView';
import products from './data/products';

export default function Store() {
  const [view, setView] = useState('module');

  const toggleView = () => {
    setView((prev) => (prev === 'module' ? 'list' : 'module'));
  };

return (
  <div className="store">
    <div className="view-toggle">
      <IconSwitch
        icon={view === 'module' ? 'view_list' : 'view_module'}
        onSwitch={toggleView}
      />
    </div>
    
    {view === 'module' ? (
      <CardsView cards={products} />
    ) : (
      <ListView items={products} />
    )}
  </div>
);
}   
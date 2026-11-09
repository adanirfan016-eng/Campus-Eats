import React, { useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  Search, ShoppingBag, Heart, UserRound, Menu as MenuIcon, X, Plus, Minus,
  ArrowRight, ArrowLeft, Star, Clock, MapPin, CheckCircle2, ChevronDown,
  Utensils, Bike, CreditCard, Wallet, Smartphone, Trash2, ClipboardList,
  Home, Coffee, Pizza, Sandwich, SlidersHorizontal, LogIn, PackageCheck
} from 'lucide-react'
import './styles.css'

const food = [
  { id: 1, name: 'Classic Beef Burger', restaurant: 'The Burger Hub', category: 'Burgers', price: 650, rating: 4.8, time: '15-20 min', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=85', fallbackImage: 'https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=900&q=80', tag: 'Bestseller', description: 'Juicy grilled beef patty with cheddar, lettuce, tomato and our signature house sauce.' },
  { id: 2, name: 'Loaded Pepperoni Pizza', restaurant: 'Broadway Pizza', category: 'Pizza', price: 890, rating: 4.7, time: '20-25 min', image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?w=900&q=85', fallbackImage: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900&q=80', tag: 'Popular', description: 'A cheesy campus favourite topped with pepperoni, herbs and rich tomato sauce.' },
  { id: 3, name: 'Crispy Chicken Burger', restaurant: 'The Burger Hub', category: 'Burgers', price: 580, rating: 4.6, time: '15-20 min', image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=900&q=85', fallbackImage: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=80', tag: 'Student pick', description: 'Crispy chicken fillet, fresh lettuce and creamy mayo in a toasted bun.' },
  { id: 4, name: 'Chocolate Brownie', restaurant: 'Daily Deli.co', category: 'Desserts', price: 320, rating: 4.9, time: '10-15 min', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=900&q=85', fallbackImage: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=900&q=80', tag: 'Sweet treat', description: 'Rich chocolate brownie with a soft centre. Perfect for a study break.' },
  { id: 5, name: 'Chicken Wrap', restaurant: 'Ranchers', category: 'Wraps', price: 490, rating: 4.5, time: '15-20 min', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=900&q=85', fallbackImage: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=900&q=80', tag: 'Fresh', description: 'Grilled chicken, crunchy vegetables and a tangy sauce wrapped fresh.' },
  { id: 6, name: 'Iced Coffee', restaurant: 'Daily Deli.co', category: 'Drinks', price: 280, rating: 4.6, time: '5-10 min', image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=900&q=85', fallbackImage: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=900&q=80', tag: 'Chilled', description: 'Smooth, refreshing iced coffee made for long campus days.' },
  { id: 7, name: 'Cheese Fries', restaurant: 'Cheezious', category: 'Sides', price: 360, rating: 4.7, time: '10-15 min', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=900&q=85', fallbackImage: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=900&q=80', tag: 'Shareable', description: 'Golden fries covered in creamy cheese sauce and a sprinkle of herbs.' },
  { id: 8, name: 'Double Smash Burger', restaurant: 'The Burger Hub', category: 'Burgers', price: 780, rating: 4.9, time: '20-25 min', image: 'https://images.deliveryhero.io/image/fd-pk/Products/97876981.jpg?width=900', fallbackImage: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=80', tag: 'Fan favourite', description: 'Two smashed beef patties, melted cheese, pickles and house sauce.' },
  { id: 9, name: 'Margherita Pizza', restaurant: 'Broadway Pizza', category: 'Pizza', price: 750, rating: 4.6, time: '20-25 min', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900&q=85', fallbackImage: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?w=900&q=80', tag: 'Classic', description: 'A classic combination of mozzarella, tomato and fresh basil.' },
  { id: 10, name: 'Creamy Fajita Pizza', restaurant: 'Cheezious', category: 'Pizza', price: 980, rating: 4.8, time: '20-30 min', image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=900&q=85', fallbackImage: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900&q=80', tag: 'Cheesy', description: 'Creamy sauce, tender chicken, peppers and a generous cheese topping.' },
  { id: 11, name: 'BBQ Chicken Pizza', restaurant: 'Broadway Pizza', category: 'Pizza', price: 1050, rating: 4.7, time: '25-30 min', image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=900&q=85', fallbackImage: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?w=900&q=80', tag: 'House special', description: 'Smoky BBQ chicken, onions and mozzarella on a crisp base.' },
  { id: 12, name: 'Zinger Burger', restaurant: 'Ranchers', category: 'Burgers', price: 620, rating: 4.6, time: '15-20 min', image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=900&q=85', fallbackImage: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=80', tag: 'Crispy', description: 'Crunchy chicken, lettuce and creamy sauce in a soft toasted bun.' },
  { id: 13, name: 'Mushroom Swiss Burger', restaurant: 'The Burger Hub', category: 'Burgers', price: 720, rating: 4.7, time: '20-25 min', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=900&q=85', fallbackImage: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=80', tag: 'Chef pick', description: 'Grilled beef, sautéed mushrooms and melted Swiss-style cheese.' },
  { id: 14, name: 'Grilled Chicken Wrap', restaurant: 'Ranchers', category: 'Wraps', price: 520, rating: 4.6, time: '15-20 min', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=900&q=85', fallbackImage: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900&q=80', tag: 'Light bite', description: 'Grilled chicken, lettuce, tomato and garlic sauce in a warm tortilla.' },
  { id: 15, name: 'Crispy Veggie Wrap', restaurant: 'Daily Deli.co', category: 'Wraps', price: 390, rating: 4.4, time: '10-15 min', image: 'https://images.deliveryhero.io/image/talabat/MenuItems/Veg_Roll638837691774565935.jpg', fallbackImage: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=900&q=80', tag: 'Fresh', description: 'Fresh vegetables, crunchy greens and a creamy herb dressing.' },
  { id: 16, name: 'Red Velvet Cupcake', restaurant: 'Daily Deli.co', category: 'Desserts', price: 260, rating: 4.8, time: '5-10 min', image: 'https://punkcake.rocks/cdn/shop/products/fullsizeoutput_1da2_1800x1800.jpg?v=1583606984', fallbackImage: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85', tag: 'Baked fresh', description: 'Soft red velvet sponge finished with a smooth cream topping.' },
  { id: 17, name: 'New York Cheesecake', restaurant: 'Daily Deli.co', category: 'Desserts', price: 420, rating: 4.9, time: '5-10 min', image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=900&q=85', fallbackImage: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900&q=80', tag: 'Premium', description: 'Creamy cheesecake with a buttery biscuit base.' },
  { id: 18, name: 'Chocolate Donut', restaurant: 'Daily Deli.co', category: 'Desserts', price: 190, rating: 4.5, time: '5-10 min', image: 'https://images.unsplash.com/photo-1551024506-0ccf828d3073?w=900&q=85', fallbackImage: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=900&q=80', tag: 'Sweet treat', description: 'A fluffy donut with a rich chocolate glaze.' },
  { id: 19, name: 'Creamy Choco Coffee', restaurant: 'Daily Deli.co', category: 'Drinks', price: 180, rating: 4.5, time: '5-10 min', image: 'https://images.unsplash.com/photo-1513558161293-cfaf765edfd4?w=900&q=85', fallbackImage: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=900&q=80', tag: 'Refreshing', description: 'Freshly squeezed lemonade served chilled.' },
  { id: 20, name: 'Caramel Iced Latte', restaurant: 'Daily Deli.co', category: 'Drinks', price: 350, rating: 4.7, time: '5-10 min', image: 'https://media-assets.swiggy.com/swiggy/image/upload/f_auto%2Cq_auto%2Cfl_lossy/nujzidihhyg0x9l9ozri', fallbackImage: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=900&q=80', tag: 'Popular', description: 'Espresso, milk and caramel over ice.' },
  { id: 21, name: 'Loaded Masala Fries', restaurant: 'Cheezious', category: 'Sides', price: 390, rating: 4.6, time: '10-15 min', image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=900&q=85', fallbackImage: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=900&q=80', tag: 'Spicy', description: 'Crispy fries tossed in a bold masala seasoning.' },
  { id: 22, name: 'Garlic Bread', restaurant: 'Broadway Pizza', category: 'Sides', price: 290, rating: 4.5, time: '10-15 min', image: 'https://gilroygarlic.com/cdn/shop/articles/custom_resized_5926ec37-2953-47e4-9a71-f1fea666b9f5_1200x1200.jpg?v=1629953191', fallbackImage: 'https://gilroygarlic.com/cdn/shop/articles/custom_resized_5926ec37-2953-47e4-9a71-f1fea666b9f5_1200x1200.jpg?v=1629953191', tag: 'Perfect side', description: 'Toasted bread with garlic butter and herbs.' },
  { id: 23, name: 'Chicken Nuggets', restaurant: 'The Burger Hub', category: 'Sides', price: 430, rating: 4.6, time: '10-15 min', image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=900&q=85', fallbackImage: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=900&q=80', tag: 'Crunchy', description: 'Golden bite-sized chicken pieces with a dipping sauce.' },
  { id: 24, name: 'Chocolava Shake', restaurant: 'Campus Cafe', category: 'Drinks', price: 330, rating: 4.7, time: '5-10 min', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=900&q=85', fallbackImage: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=900&q=80', tag: 'Creamy', description: 'A thick strawberry milkshake served ice cold.' },
  { id: 25, name: 'Chocolate Fudge Cake', restaurant: 'Daily Deli.co', category: 'Desserts', price: 390, rating: 4.8, time: '5-10 min', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900&q=85', fallbackImage: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=900&q=80', tag: 'Rich & fudgy', description: 'A soft chocolate cake slice with smooth fudge frosting.' },
  { id: 26, name: 'Vanilla Cold Brew', restaurant: 'Campus Cafe', category: 'Drinks', price: 310, rating: 4.6, time: '5-10 min', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=900&q=85', fallbackImage: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=900&q=80', tag: 'Cafe favourite', description: 'Slow-steeped cold brew with a smooth vanilla finish.' }
]
const restaurants = [
  { name: 'The Burger Hub', rating: '4.5', distance: '300m', time: '15-20 min', tint: 'peach', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=900&q=85', fallbackImage: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=80', type: 'Burgers, wraps & sides', description: 'Juicy burgers, crispy chicken and satisfying sides.' },
  { name: 'Broadway Pizza', rating: '4.7', distance: '450m', time: '20-25 min', tint: 'cream', image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?w=900&q=85', fallbackImage: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900&q=80', type: 'Pizza & sides', description: 'Freshly baked pizzas with classic and loaded toppings.' },
  { name: 'Cheezious', rating: '4.6', distance: '500m', time: '20-25 min', tint: 'lavender', image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=900&q=85', fallbackImage: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?w=900&q=80', type: 'Pizza & cheesy bites', description: 'Cheesy pizzas, loaded fries and comfort food.' },
  { name: 'Daily Deli.co', rating: '4.8', distance: '250m', time: '10-15 min', tint: 'mint', image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=900&q=85', fallbackImage: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=900&q=80', type: 'Desserts, wraps & drinks', description: 'A sweet stop for brownies, cakes, donuts and chilled drinks.' },
  { name: 'Ranchers', rating: '4.6', distance: '550m', time: '15-20 min', tint: 'peach', image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=900&q=85', fallbackImage: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=80', type: 'Burgers & wraps', description: 'Crispy burgers and freshly prepared wraps.' },
  { name: 'Campus Cafe', rating: '4.6', distance: '200m', time: '5-10 min', tint: 'mint', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=900&q=85', fallbackImage: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=900&q=80', type: 'Coffee & cold drinks', description: 'Coffee, shakes and quick campus refreshments.' }
]
const categories = ['All', 'Burgers', 'Pizza', 'Wraps', 'Desserts', 'Drinks', 'Sides']
const money = n => `Rs. ${Number(n).toLocaleString('en-PK')}`

function App() {
  const [page, setPage] = useState('home')
  const [activeNav, setActiveNav] = useState('Home')
  const [cart, setCart] = useState([{ id: 1, qty: 1 }, { id: 3, qty: 1 }])
  const [selected, setSelected] = useState(food[0])
  const [selectedRestaurant, setSelectedRestaurant] = useState(restaurants[0])
  const [detailQty, setDetailQty] = useState(1)
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')
  const [favourites, setFavourites] = useState([4])
  const [toast, setToast] = useState('')
  const [overlay, setOverlay] = useState('')
  const [delivery, setDelivery] = useState('Pickup')
  const [payment, setPayment] = useState('Cash on Delivery')
  const [order, setOrder] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [mobileMenu, setMobileMenu] = useState(false)

  const cartItems = cart.map(c => ({ ...food.find(f => f.id === c.id), qty: c.qty })).filter(x => x.id)
  const subtotal = cartItems.reduce((s, x) => s + x.price * x.qty, 0)
  const fee = cartItems.length ? (delivery === 'Delivery' ? 100 : 50) : 0
  const total = subtotal + fee
  const cartCount = cart.reduce((s, x) => s + x.qty, 0)
  const shownFood = useMemo(() => food.filter(f =>
    (category === 'All' || f.category === category) &&
    (f.name.toLowerCase().includes(query.toLowerCase()) || f.restaurant.toLowerCase().includes(query.toLowerCase()))
  ), [category, query])

  const notify = msg => { setToast(msg); window.clearTimeout(window.__toastTimer); window.__toastTimer = window.setTimeout(() => setToast(''), 2400) }
  const go = (p, nav) => { setPage(p); if (nav) setActiveNav(nav); setOverlay(''); setMobileMenu(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  const add = (item, qty = 1) => {
    setCart(old => old.some(x => x.id === item.id) ? old.map(x => x.id === item.id ? { ...x, qty: x.qty + qty } : x) : [...old, { id: item.id, qty }])
    notify(`${item.name} added to your cart`)
  }
  const changeQty = (id, delta) => setCart(old => old.map(x => x.id === id ? { ...x, qty: x.qty + delta } : x).filter(x => x.qty > 0))
  const toggleFav = id => setFavourites(old => old.includes(id) ? old.filter(x => x !== id) : [...old, id])
  const openDetail = item => { setSelected(item); setDetailQty(1); go('details') }
  const openRestaurant = restaurant => { setSelectedRestaurant(restaurant); setQuery(''); setCategory('All'); go('menu') }
  const placeOrder = e => {
    e.preventDefault()
    if (!cartItems.length) return notify('Your cart is empty')
    const newOrder = { id: `CE${Math.floor(100000 + Math.random() * 900000)}`, total, delivery, payment, name: form.name || 'Campus student' }
    setOrder(newOrder); setCart([]); go('success')
  }

  const navItems = [
    { label: 'Home', icon: Home, page: 'home' },
    { label: 'Explore', icon: Search, page: 'explore' },
    { label: 'Favorites', icon: Heart, page: 'favorites' },
    { label: 'Track Order', icon: PackageCheck, page: 'tracking' }
  ]

  function Header() {
    return <header className="header">
      <div className="header-inner">
        <button className="brand" onClick={() => go('home', 'Home')} aria-label="Campus Eats home"><span className="brand-mark"><Utensils size={21}/></span><span>campus<span className="brand-orange">eats</span><small>GOOD FOOD. GOOD CAMPUS.</small></span></button>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.slice(0, 3).map(n => <button key={n.label} className={activeNav === n.label ? 'nav-link active' : 'nav-link'} onClick={() => go(n.page, n.label)}>{n.label}</button>)}
        </nav>
        <div className="header-actions">
          <button className="icon-button search-toggle" onClick={() => go('explore', 'Explore')} aria-label="Search"><Search/></button>
          <button className="icon-button" onClick={() => go('cart')} aria-label="Shopping cart"><ShoppingBag/>{cartCount > 0 && <span className="count">{cartCount}</span>}</button>
          <button className="profile-button" onClick={() => go('auth')}><UserRound size={17}/><span>Sign in</span></button>
          <button className="icon-button mobile-menu-btn" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Toggle menu">{mobileMenu ? <X/> : <MenuIcon/>}</button>
        </div>
      </div>
      {mobileMenu && <div className="mobile-menu">{navItems.map(n => <button key={n.label} onClick={() => go(n.page, n.label)}>{n.label}</button>)}<button onClick={() => go('cart')}>My Cart ({cartCount})</button></div>}
    </header>
  }

  function BottomNav() {
    return <nav className="bottom-nav" aria-label="Mobile navigation">{navItems.map(n => { const I = n.icon; return <button key={n.label} className={activeNav === n.label ? 'bottom-item active' : 'bottom-item'} onClick={() => go(n.page, n.label)}><I size={20}/><span>{n.label}</span></button> })}<button className="bottom-item" onClick={() => go('cart')}><ShoppingBag size={20}/><span>Cart{cartCount ? ` (${cartCount})` : ''}</span></button></nav>
  }

  function FoodCard({ item }) {
    const fav = favourites.includes(item.id)
    return <article className="food-card">
      <div className="food-image-wrap" onClick={() => openDetail(item)} role="button" tabIndex="0" onKeyDown={e => e.key === 'Enter' && openDetail(item)}>
        <img src={item.image} alt={item.name} className="food-image" loading="lazy" onError={e => { e.currentTarget.onerror = null; e.currentTarget.src = item.fallbackImage || 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=80' }}/>
        <span className="food-tag">{item.tag}</span>
        <button className={`fav-button ${fav ? 'is-fav' : ''}`} aria-label={fav ? 'Remove from favourites' : 'Add to favourites'} onClick={e => { e.stopPropagation(); toggleFav(item.id) }}><Heart size={17} fill={fav ? 'currentColor' : 'none'}/></button>
      </div>
      <div className="food-card-body">
        <div className="food-meta"><span><Star size={13} fill="currentColor"/> {item.rating}</span><span><Clock size={13}/> {item.time}</span></div>
        <button className="food-title" onClick={() => openDetail(item)}>{item.name}</button>
        <p className="food-restaurant">{item.restaurant}</p>
        <div className="food-card-bottom"><strong>{money(item.price)}</strong><button className="add-small" onClick={() => add(item)} aria-label={`Add ${item.name} to cart`}><Plus size={18}/></button></div>
      </div>
    </article>
  }

  function SearchBar() {
    return <div className="search-box"><Search size={19}/><input aria-label="Search food or restaurant" placeholder="Search food, restaurants..." value={query} onChange={e => setQuery(e.target.value)}/>{query && <button onClick={() => setQuery('')} aria-label="Clear search"><X size={16}/></button>}<button className="filter-button" onClick={() => setOverlay('filters')}><SlidersHorizontal size={17}/><span>Filter</span></button></div>
  }

  function FoodGrid({ items }) {
    return items.length ? <div className="food-grid">{items.map(item => <FoodCard key={item.id} item={item}/>)}</div> : <div className="empty-state"><Search size={32}/><h3>No food found</h3><p>Try another search or category.</p><button className="btn btn-outline" onClick={() => { setQuery(''); setCategory('All') }}>Clear filters</button></div>
  }

  function HomePage() {
    return <>
      <section className="hero">
        <div className="hero-copy"><span className="eyebrow"><span className="eyebrow-dot"/> YOUR CAMPUS, YOUR CRAVINGS</span><h1>Good food.<br/><em>Great</em> campus days.</h1><p>Your favourite campus meals, just a few taps away. Discover, order and enjoy without missing a beat.</p><div className="hero-actions"><button className="btn btn-primary" onClick={() => go('explore', 'Explore')}>Explore food <ArrowRight size={17}/></button><button className="text-link" onClick={() => go('restaurants')}>View restaurants</button></div><div className="hero-proof"><div className="avatar-stack"><span>🍔</span><span>🍕</span><span>🥤</span></div><div><strong>1,200+ students</strong><small>ordering on campus</small></div><div className="proof-rating"><Star size={14} fill="currentColor"/> 4.8 <small>student rating</small></div></div></div>
        <div className="hero-visual"><div className="hero-image-main"><img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1100&q=90" alt="Delicious burger with fresh ingredients" onError={e => { e.currentTarget.onerror = null; e.currentTarget.src = food[0].fallbackImage }}/></div><div className="floating-note note-top"><span className="note-icon"><Clock size={17}/></span><span><b>Quick pickup</b><small>Ready in 15–20 min</small></span></div><div className="floating-note note-bottom"><span className="note-emoji">🍟</span><span><b>Made for students</b><small>Campus favourites</small></span></div><div className="hero-sunburst">YUM!</div></div>
      </section>
      <section className="section-block">
        <div className="section-heading"><div><span className="eyebrow">WHAT ARE YOU CRAVING?</span><h2>Explore categories</h2></div><button className="text-link" onClick={() => go('explore', 'Explore')}>See all <ArrowRight size={16}/></button></div>
        <div className="category-grid">{[
          {n:'Pizza',c:'cat-peach',image:'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=240&q=80'},
          {n:'Burgers',c:'cat-yellow',image:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=240&q=80'},
          {n:'Desserts',c:'cat-pink',image:'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=240&q=80'},
          {n:'Drinks',c:'cat-blue',image:'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=240&q=80'},
          {n:'Wraps',c:'cat-mint',image:'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=240&q=80'},
          {n:'Sides',c:'cat-lavender',image:'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=240&q=80'}
        ].map(c => <button className={`category-tile ${c.c}`} key={c.n} onClick={() => { setCategory(c.n); go('explore','Explore') }}><img className="category-photo" src={c.image} alt="" loading="lazy" onError={e => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=240&q=75' }}/><b>{c.n}</b><small>Explore now <ArrowRight size={12}/></small></button>)}</div>
      </section>
      <section className="section-block">
        <div className="section-heading"><div><span className="eyebrow">STUDENT FAVOURITES</span><h2>Popular right now</h2><p className="section-subtitle">The bites everyone on campus is talking about.</p></div><button className="text-link" onClick={() => go('explore','Explore')}>View all food <ArrowRight size={16}/></button></div>
        <FoodGrid items={food.slice(0, 4)}/>
      </section>
      <section className="promo-banner"><div><span className="eyebrow">A LITTLE CAMPUS HAPPINESS</span><h2>Big cravings?<br/>We've got you.</h2><p>Find your next favourite meal from campus restaurants.</p><button className="btn btn-light" onClick={() => go('restaurants')}>Find a restaurant <ArrowRight size={17}/></button></div><div className="promo-art">🍔<span>🍟</span><i>🍹</i></div></section>
      <section className="section-block"><div className="section-heading"><div><span className="eyebrow">CLOSE TO YOUR CLASS</span><h2>Campus restaurants</h2></div><button className="text-link" onClick={() => go('restaurants')}>All restaurants <ArrowRight size={16}/></button></div><RestaurantGrid/></section>
    </>
  }

  function RestaurantGrid() {
    return <div className="restaurant-grid">{restaurants.map(r => <button className="restaurant-card" key={r.name} onClick={() => openRestaurant(r)}><img src={r.image} alt={r.name} loading="lazy" onError={e => { e.currentTarget.onerror = null; e.currentTarget.src = r.fallbackImage }}/><div className="restaurant-info"><div><b>{r.name}</b><small>{r.type}</small></div><span className="rating-pill"><Star size={13} fill="currentColor"/> {r.rating}</span></div><div className="restaurant-bottom"><span><MapPin size={13}/> {r.distance}</span><span><Clock size={13}/> {r.time}</span></div></button>)}</div>
  }

  function ExplorePage() {
    return <div className="page-content"><div className="page-title-row"><div><span className="eyebrow">FIND YOUR NEXT FAVOURITE</span><h1>Explore food</h1><p>Fresh bites and campus classics, all in one place.</p></div></div><SearchBar/><div className="chips">{categories.map(c => <button key={c} className={category === c ? 'chip selected' : 'chip'} onClick={() => setCategory(c)}>{c}</button>)}</div><FoodGrid items={shownFood}/></div>
  }

  function MenuPage() {
    const [tab, setTab] = useState('Menu')
    const restaurantFood = food.filter(item => item.restaurant === selectedRestaurant.name)
    const menuCategories = ['All', ...new Set(restaurantFood.map(item => item.category))]
    const visibleMenu = restaurantFood.filter(item => category === 'All' || item.category === category)

    return <div className="page-content">
      <button className="back-link" onClick={() => go('restaurants')}><ArrowLeft size={16}/> All restaurants</button>
      <div className="restaurant-hero">
        <img src={selectedRestaurant.image} alt={selectedRestaurant.name} onError={e => { e.currentTarget.onerror = null; e.currentTarget.src = selectedRestaurant.fallbackImage }}/>
        <div className="restaurant-hero-overlay">
          <span className="eyebrow">CAMPUS RESTAURANT</span>
          <h1>{selectedRestaurant.name}</h1>
          <p><Star size={15} fill="currentColor"/> {selectedRestaurant.rating} · Campus favourite <span>·</span> <MapPin size={15}/> {selectedRestaurant.distance} away</p>
        </div>
      </div>
      <div className="tab-row"><button className={tab==='Menu'?'tab active':'tab'} onClick={() => setTab('Menu')}>Menu</button><button className={tab==='Info'?'tab active':'tab'} onClick={() => setTab('Info')}>Info</button></div>
      {tab === 'Menu' ? <>
        <div className="section-heading compact"><div><h2>{selectedRestaurant.name} menu</h2><p className="section-subtitle">{restaurantFood.length} fresh options available.</p></div></div>
        <div className="chips">{menuCategories.map(c => <button key={c} className={category===c?'chip selected':'chip'} onClick={() => setCategory(c)}>{c}</button>)}</div>
        <FoodGrid items={visibleMenu}/>
      </> : <div className="info-panel"><h2>About {selectedRestaurant.name}</h2><p>{selectedRestaurant.description}</p><p><Clock size={16}/> Open today · 10:00 AM – 8:00 PM</p><p><MapPin size={16}/> {selectedRestaurant.distance} from campus centre</p></div>}
    </div>
  }

  function DetailsPage() {
    return <div className="page-content"><button className="back-link" onClick={() => go('explore','Explore')}><ArrowLeft size={16}/> Back to explore</button><div className="detail-layout"><div className="detail-image"><img src={selected.image} alt={selected.name} onError={e => { e.currentTarget.onerror = null; e.currentTarget.src = selected.fallbackImage || 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=80' }}/><span className="food-tag">{selected.tag}</span></div><div className="detail-info"><span className="eyebrow">{selected.restaurant}</span><h1>{selected.name}</h1><div className="detail-rating"><Star size={16} fill="currentColor"/> {selected.rating} <span>·</span> <Clock size={16}/> {selected.time}</div><strong className="detail-price">{money(selected.price)}</strong><p>{selected.description}</p><div className="ingredient-row"><span>Freshly prepared</span><span>Student favourite</span><span>Made to order</span></div><div className="detail-order-row"><div className="quantity-control"><button onClick={() => setDetailQty(Math.max(1, detailQty-1))} aria-label="Decrease quantity"><Minus size={16}/></button><b>{detailQty}</b><button onClick={() => setDetailQty(detailQty+1)} aria-label="Increase quantity"><Plus size={16}/></button></div><button className="btn btn-primary grow" onClick={() => { add(selected, detailQty); go('cart') }}>Add to cart · {money(selected.price*detailQty)}</button></div></div></div></div>
  }

  function CartPage() {
    return <div className="page-content narrow-page"><div className="page-title-row"><div><span className="eyebrow">ALMOST YOURS</span><h1>Your cart</h1><p>{cartCount} items ready for a happy break.</p></div></div>{cartItems.length ? <div className="cart-layout"><div className="cart-list">{cartItems.map(item => <div className="cart-item" key={item.id}><img src={item.image} alt={item.name} onError={e => { e.currentTarget.onerror = null; e.currentTarget.src = item.fallbackImage || 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=80' }}/><div className="cart-item-info"><b>{item.name}</b><small>{item.restaurant}</small><strong>{money(item.price)}</strong><div className="quantity-control small"><button onClick={() => changeQty(item.id,-1)} aria-label="Decrease"><Minus size={13}/></button><b>{item.qty}</b><button onClick={() => changeQty(item.id,1)} aria-label="Increase"><Plus size={13}/></button></div></div><button className="remove-button" onClick={() => setCart(old => old.filter(x => x.id!==item.id))} aria-label="Remove item"><Trash2 size={17}/></button></div>)}</div><OrderSummary subtotal={subtotal} fee={fee} total={total} action={() => go('checkout')}/></div> : <div className="empty-state"><ShoppingBag size={38}/><h2>Your cart is waiting</h2><p>Looks like you haven't added any campus favourites yet.</p><button className="btn btn-primary" onClick={() => go('explore','Explore')}>Explore food <ArrowRight size={16}/></button></div>}</div>
  }

  function OrderSummary({ subtotal: sub, fee: f, total: t, action }) {
    return <aside className="summary-card"><h3>Order summary</h3><div className="summary-line"><span>Subtotal</span><b>{money(sub)}</b></div><div className="summary-line"><span>Campus service fee</span><b>{money(f)}</b></div><div className="summary-line total-line"><span>Total</span><strong>{money(t)}</strong></div><button className="btn btn-primary full" onClick={action}>Continue to checkout <ArrowRight size={16}/></button><small className="secure-note">Your order details are safe with us.</small></aside>
  }

  function CheckoutPage() {
    return <div className="page-content narrow-page"><button className="back-link" onClick={() => go('cart')}><ArrowLeft size={16}/> Back to cart</button><div className="page-title-row"><div><span className="eyebrow">ONE LAST STEP</span><h1>Checkout</h1><p>Choose how you'd like to get your food.</p></div></div>{cartItems.length ? <form className="checkout-layout" onSubmit={placeOrder}><div className="checkout-main"><section className="form-card"><h3>Contact details</h3><label>Your name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Enter your name"/></label><label>Email address<input type="email" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@example.com"/></label></section><section className="form-card"><h3>How would you like your order?</h3><div className="choice-grid"><button type="button" className={delivery==='Pickup'?'choice selected':'choice'} onClick={()=>setDelivery('Pickup')}><Utensils/><b>Pickup</b><small>Collect at cafeteria</small></button><button type="button" className={delivery==='Delivery'?'choice selected':'choice'} onClick={()=>setDelivery('Delivery')}><Bike/><b>Delivery</b><small>Bring it to your spot</small></button></div>{delivery==='Pickup' ? <p className="location-note"><MapPin size={16}/> Main Campus Cafeteria, PUCIT</p> : <label>Delivery location<input required placeholder="Building, block or campus location"/></label>}</section><section className="form-card"><h3>Payment method</h3><div className="payment-options">{[{n:'Cash on Delivery',i:Wallet},{n:'Card',i:CreditCard},{n:'JazzCash / Easypaisa',i:Smartphone}].map(p=>{const I=p.i;return <button type="button" key={p.n} className={payment===p.n?'payment-option selected':'payment-option'} onClick={()=>setPayment(p.n)}><I size={19}/><span>{p.n}</span><i className="radio-dot"/></button>})}</div><small className="secure-note">Demo checkout: no real payment will be charged.</small></section></div><div><OrderSummary subtotal={subtotal} fee={fee} total={total} action={()=>notify('Please use Place order to confirm')}/><button className="btn btn-primary full place-order" type="submit">Place order · {money(total)} <ArrowRight size={16}/></button></div></form> : <div className="empty-state"><h2>Your cart is empty</h2><button className="btn btn-primary" onClick={()=>go('explore','Explore')}>Explore food</button></div>}</div>
  }

  function SuccessPage() {
    return <div className="success-page"><div className="success-icon"><CheckCircle2 size={54}/></div><span className="eyebrow">THANK YOU FOR ORDERING</span><h1>Order confirmed!</h1><p>Your campus cravings are on their way. We've received your order and the kitchen is getting started.</p><div className="order-ticket"><small>ORDER NUMBER</small><strong>#{order?.id || 'CE123456'}</strong><div className="ticket-divider"/><div><Clock size={17}/> Estimated {order?.delivery==='Delivery'?'delivery':'pickup'} in <b>15–20 min</b></div><div><MapPin size={17}/> Main Campus Cafeteria, PUCIT</div><div className="ticket-total"><span>Order total</span><b>{money(order?.total || 0)}</b></div></div><div className="success-actions"><button className="btn btn-primary" onClick={()=>go('tracking','Track Order')}>Track my order</button><button className="btn btn-outline" onClick={()=>go('home','Home')}>Back to home</button></div></div>
  }

  function TrackingPage() {
    const steps = ['Order placed','Restaurant confirmed','Preparing your food','Ready for pickup']
    return <div className="page-content narrow-page"><div className="page-title-row"><div><span className="eyebrow">STAY IN THE LOOP</span><h1>Track your order</h1><p>Follow your food from the kitchen to you.</p></div></div><div className="tracking-card"><div className="tracking-top"><span className="status-badge"><span/> In progress</span><small>#{order?.id || 'CE123456'}</small></div><h2>Your order is being prepared!</h2><p>Estimated time: <b>15–20 minutes</b></p><div className="timeline">{steps.map((s,i)=><div className={`timeline-step ${i===0?'done':i===1?'current':''}`} key={s}><span className="timeline-dot">{i===0?<CheckCircle2 size={15}/>:i+1}</span><div><b>{s}</b><small>{i===0?'We have received your order':i===1?'The restaurant is getting it ready':'We will update you shortly'}</small></div></div>)}</div><div className="tracking-help"><MapPin size={17}/> Main Campus Cafeteria, PUCIT</div></div><button className="btn btn-outline" onClick={()=>go('home','Home')}>Back to home</button></div>
  }

  function AuthPage() {
    const [mode,setMode]=useState('Login')
    const submit=e=>{e.preventDefault();notify(`Welcome${form.name?' '+form.name:''}! Demo ${mode.toLowerCase()} successful.`);go('home','Home')}
    return <div className="auth-wrap"><div className="auth-card"><div className="auth-icon"><Utensils/></div><span className="eyebrow">WELCOME TO CAMPUS EATS</span><h1>{mode==='Login'?'Good to see you!':'Create your account'}</h1><p>{mode==='Login'?'Sign in to make your campus food breaks easier.':'Join your campus food community.'}</p><div className="auth-tabs"><button className={mode==='Login'?'active':''} onClick={()=>setMode('Login')}>Login</button><button className={mode==='Signup'?'active':''} onClick={()=>setMode('Signup')}>Sign up</button></div><form onSubmit={submit}>{mode==='Signup'&&<label>Full name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your name"/></label>}<label>Email address<input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@example.com"/></label><label>Password<input required minLength="6" type="password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} placeholder="At least 6 characters"/></label><button className="btn btn-primary full" type="submit">{mode==='Login'?'Sign in':'Create account'} <ArrowRight size={16}/></button></form><small className="secure-note">Academic demo only. No account data is sent to a server.</small></div></div>
  }

  function Footer() {
    return <footer className="footer"><div className="footer-main"><div className="footer-brand"><div className="brand"><span className="brand-mark"><Utensils size={21}/></span><span>campus<span className="brand-orange">eats</span><small>GOOD FOOD. GOOD CAMPUS.</small></span></div><p>Making campus food breaks a little more delicious, one order at a time.</p></div><div><b>Explore</b><button onClick={()=>go('home','Home')}>Home</button><button onClick={()=>go('explore','Explore')}>Browse food</button><button onClick={()=>go('restaurants')}>Restaurants</button></div><div><b>Help</b><button onClick={()=>go('tracking','Track Order')}>Track order</button><button onClick={()=>go('auth')}>Your account</button><button onClick={()=>setOverlay('contact')}>Contact us</button></div><div className="footer-contact"><b>Made for campus life</b><span><MapPin size={15}/> PUCIT, Lahore</span><span><Clock size={15}/> Daily · 10 AM – 8 PM</span></div></div><div className="footer-bottom"><span>© 2026 Campus Eats. Student HCI project.</span><span>Made with ♥ for campus cravings.</span></div></footer>
  }

  function Overlay() {
    if (!overlay) return null
    return <div className="modal-backdrop" onClick={()=>setOverlay('')}><div className="modal-card" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setOverlay('')} aria-label="Close"><X/></button>{overlay==='filters'?<><span className="eyebrow">MAKE IT YOURS</span><h2>Filter food</h2><p>Choose a category to find what you're craving.</p><div className="chips modal-chips">{categories.map(c=><button key={c} className={category===c?'chip selected':'chip'} onClick={()=>setCategory(c)}>{c}</button>)}</div><button className="btn btn-primary full" onClick={()=>{setOverlay('');go('explore','Explore')}}>Show {category==='All'?'all food':category}</button></>:overlay==='contact'?<><span className="eyebrow">WE'RE HERE TO HELP</span><h2>Contact Campus Eats</h2><p>Have a question or suggestion? We'd love to hear from you.</p><form onSubmit={e=>{e.preventDefault();setOverlay('');notify('Thanks! Your message has been received.')}}><label>Your email<input type="email" required placeholder="you@example.com"/></label><label>Message<textarea required rows="4" placeholder="Write your message..."/></label><button className="btn btn-primary full">Send message</button></form></>:<><h2>Campus Eats</h2><p>Choose an option to continue.</p></>}</div></div>
  }

  return <><Header/><main className="main-container">
    {page==='home'&&<HomePage/>}
    {page==='explore'&&<ExplorePage/>}
    {page==='restaurants'&&<div className="page-content"><span className="eyebrow">GOOD FOOD AROUND YOU</span><h1>Campus restaurants</h1><p className="section-subtitle">Discover your nearby campus favourites.</p><RestaurantGrid/></div>}
    {page==='menu'&&<MenuPage/>}
    {page==='details'&&<DetailsPage/>}
    {page==='cart'&&<CartPage/>}
    {page==='checkout'&&<CheckoutPage/>}
    {page==='success'&&<SuccessPage/>}
    {page==='tracking'&&<TrackingPage/>}
    {page==='auth'&&<AuthPage/>}
    {page==='favorites'&&<div className="page-content"><span className="eyebrow">SAVED FOR LATER</span><h1>Your favourites</h1><p className="section-subtitle">All the bites you love, in one place.</p><FoodGrid items={food.filter(f=>favourites.includes(f.id))}/></div>}
  </main><Footer/><BottomNav/><Overlay/>{toast&&<div className="toast"><CheckCircle2 size={18}/>{toast}</div>}</>
}

createRoot(document.getElementById('root')).render(<App/>)

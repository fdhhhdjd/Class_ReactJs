# React-Router-V6

## Installing

```js
npm i react-router-domt
```

## add the following import statement:

```js
import { BrowserRouter, Route, Routes } from 'react-router-dom';
```

## Setting up top-level routes

```js
<BrowserRouter>
  <Routes>{/* All routes are nested inside it */}</Routes>
</BrowserRouter>
```

## Adding a navigation menu

```js
import { Link } from 'react-router-dom';
```

```js
<Link to="/">Home</Link>
```

## useNavigate

```js
import { useNavigate } from 'react-router-dom';

function App() {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/home');
  }
  return (
    <div>
      <button onClick={handleClick}>go home</button>
    </div>
  );
}
```

## <Route element>

```js
<Route path="/" element={<Home />} />
```

## Not found routes

```js
<Route path="/*" element={<NotFoundPage />} />
```

## Route parameters

```js
<Route path="products/:id" element={<ProductPage />} />
```

## Nested layout

Route elements can be nested inside one another:

```js
<Route path="products" element={<ProductsPage />}>
  <Route path=":id*" element={<ProductPage />} />
</Route>
```

## handle nested routes

```js
import {
  // rest of the elements/components imported remain same
  Outlet,
} from 'react-router-dom';
```

```js
function ProductPage() {
  return (
    <div>
      <h2>ProductPage</h2>
      {/* render any matching child */}
      <Outlet />
    </div>
  );
}
```

## URL parameters and dynamic parameters of a route

```js
<Link to={`/Products/${id}`}>
  <h3>{title}</h3>
</Link>
```

## useParams

```js
import {
  // rest of the elements/components imported remain same
  useParams,
} from 'react-router-dom';
```

```js
function ProductPage() {
  const { id } = useParams();
  return (
    <div>
      <h3>{id}</h3>
    </div>
  );
}
```

## Search parameters

```js
let [searchParams, setSearchParams] = useSearchParams();
```

```js
<form
  onSubmit={(e) => {
    e.preventDefault();
    setSearchParams(`search=${new FormData(e.currentTarget).get('search')}`);
  }}
>
  <input name="search" type="search" placeholder="search ..." />
</form>
```

## useRoutes

```js
function App() {
  let element = useRoutes([
    // These are the same as the props you provide to <Route>
    { path: '/', element: <Home /> },
    { path: 'dashboard', element: <Dashboard /> },
    {
      path: 'invoices',
      element: <Invoices />,
      // Nested routes use a children property, which is also
      // the same as <Route>
      children: [
        { path: ':id', element: <Invoice /> },
        { path: 'sent', element: <SentInvoices /> },
      ],
    },
    // Redirects use a redirectTo property to
    { path: 'home', redirectTo: '/' },
    // Not found routes work as you'd expect
    { path: '*', element: <NotFound /> },
  ]);

  // The returned element will render the entire element
  // hierarchy with all the appropriate context it needs
  return element;
}
```

## example

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Welcome</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);
```

#### _Navigation_

```js
import { Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="about">About</Link>
      </nav>
    </div>
  );
}

function About() {
  return <h1>About</h1>;
}

function App() {
  return (
    <div>
      <h1>Welcome</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}
```

#### _Reading URL Parameters_

```js
import { Routes, Route, useParams } from 'react-router-dom';

function Invoice() {
  let { invoiceId } = useParams();
  return <h1>Invoice {invoiceId}</h1>;
}

function App() {
  return (
    <Routes>
      <Route path="invoices/:invoiceId" element={<Invoice />} />
    </Routes>
  );
}
```

#### _Ambiguous Paths and Ranking_

```js
import { Routes, Route, useParams } from 'react-router-dom';

function Invoice() {
  let { invoiceId } = useParams();
  return <h1>Invoice {invoiceId}</h1>;
}

function SentInvoices() {
  return <h1>Sent Invoices</h1>;
}

function App() {
  return (
    <Routes>
      <Route path="invoices/:invoiceId" element={<Invoice />} />
      <Route path="invoices/sent" element={<SentInvoices />} />
    </Routes>
  );
}
```

#### _Nested Routes_

```js
import { Routes, Route, Outlet } from 'react-router-dom';

function Invoices() {
  return (
    <div>
      <h1>Invoices</h1>

      {/*
        This element renders the element for the child route, which in
        this case will be either <SentInvoices> or <IndividualInvoice>
      */}
      <Outlet />
    </div>
  );
}

function IndividualInvoice() {
  let { invoiceId } = useParams();
  return <h1>Invoice {invoiceId}</h1>;
}

function SentInvoices() {
  return <h1>Sent Invoices</h1>;
}

function App() {
  return (
    <Routes>
      <Route path="invoices" element={<Invoices />}>
        <Route path=":invoiceId" element={<IndividualInvoice />} />
        <Route path="sent" element={<SentInvoices />} />
      </Route>
    </Routes>
  );
}
```

#### _Multiple Sets of Routes_

```js
function App() {
  return (
    <div>
      <Sidebar>
        <Routes>
          <Route path="/" element={<MainNav />} />
          <Route path="dashboard" element={<DashboardNav />} />
        </Routes>
      </Sidebar>

      <MainContent>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="about" element={<About />} />
            <Route path="support" element={<Support />} />
          </Route>
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="invoices" element={<Invoices />} />
            <Route path="team" element={<Team />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainContent>
    </div>
  );
}
```

#### _Descendant Routes_

```js
function Dashboard() {
  return (
    <div>
      <p>Look, more routes!</p>
      <Routes>
        <Route path="/" element={<DashboardGraphs />} />
        <Route path="invoices" element={<InvoiceList />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dashboard/*" element={<Dashboard />} />
    </Routes>
  );
}
```

#### _Navigating Programmatically_

```js
// This is a React Router v6 app
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate('/')}>Go 2 pages forward</button>
    </>
  );
}
```

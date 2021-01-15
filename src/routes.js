import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Books from './pages/Books';
import BooksDetail from './pages/BooksDetail';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/books" exact component={Books} />
      <Route path="/bookDetails/:bookId" exact component={BooksDetail} />
    </Switch>
  );
}

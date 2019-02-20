import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { Button } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

class Index extends Component {
  render() {
    return (
      <BaseLayout>
        <h1>I am the Index page</h1>
        <Button color="info">Click Me!</Button>
      </BaseLayout>
    );
  }
}

export default Index;

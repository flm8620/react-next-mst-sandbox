import React from 'react';
import Link from 'next/link';
import { inject, observer } from 'mobx-react';
import Clock from './Clock';

@inject('store')
@observer
class SampleComponent extends React.Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Clock number={this.props.store.number} />
        <nav>
          <Link href={this.props.linkTo}>
            <a>Navigate</a>
          </Link>
          <br />
          <Link href={'/ssg'}>
            <a>SSG</a>
          </Link>
          <br />
          <Link href={'/ssr'}>
            <a>SSR</a>
          </Link>
        </nav>
      </div>
    );
  }
}

export default SampleComponent;

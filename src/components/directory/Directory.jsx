import React, { Component } from 'react';

import './style.scss';

import MenuItem from '../menu-item/MenuItem';

// const Directory = ({ children }) => <div className='directory-menu'>{children}</div>;

class Directory extends Component {
  //

  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Hats',
          imageUrl:
            'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          id: 1,
        },
        {
          title: 'Jackets',
          imageUrl:
            'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          id: 2,
        },
        {
          title: 'Watches',
          imageUrl:
            'https://images.unsplash.com/photo-1523268755815-fe7c372a0349?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          id: 3,
        },
        {
          title: 'Shoes',
          size: 'large',
          imageUrl:
            'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
          id: 4,
        },
        {
          title: 'Shades',
          size: 'large',
          imageUrl:
            'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
          id: 5,
        },
      ],
    };
  }

  render() {
    const { sections } = this.state;

    return (
      <div className='directory-menu'>
        {sections.map(({ title, imageUrl, size, id }) => (
          <MenuItem key={id} title={title} image={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;

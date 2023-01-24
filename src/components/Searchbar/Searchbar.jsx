import React, { Component } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { MdSearch } from 'react-icons/md';

import {
  SearchbarStyles,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

export default class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { searchQuery } = this.state;
    if (searchQuery === '') {
      toast.error('Please try again!', {
        duration: 1000,
      });

      return;
    }
    this.props.onSubmit(searchQuery);
    this.setState({ searchQuery: '' });
  };
  handleInputChange = e => {
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase().trim() });
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <SearchbarStyles>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit" aria-label="Search Button">
            <MdSearch size={26} />
          </SearchFormButton>

          <SearchFormInput
            onChange={this.handleInputChange}
            value={searchQuery}
            type="text"
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarStyles>
    );
  }
}

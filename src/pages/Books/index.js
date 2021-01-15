import React, { useState, useEffect, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ReactLoading from 'react-loading';

import {
  ContainerBackground,
  Header,
  ButtonIcon,
  TextTitle,
  ContainerBooks,
  BookList,
  ContainerLogo,
  TextContainer,
  TextDescription,
  TextDescriptionQuote,
  ButtonMore,
  ButtonContainer,
  InputSearch,
  ContainerSearch,
} from './styles';

import { MdSearch, MdHome } from 'react-icons/md';
import api from '../../services/api';

import image from '../../assets/illustration-book.png';
import missingImage from '../../assets/missingbook.png';
let listBooks = [];

function Books(props) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [renderSearch, setRenderSearch] = useState(false);
  const [searchParam, setSearchParam] = useState('a');
  const [search, setSearch] = useState(false);
  const [searched, setSearched] = useState(false);
  const history = useHistory();

  useEffect(() => {
    async function getBooks() {
      setLoading(true);
      console.log('entrou');
      if (
        props.history.location.state &&
        props.history.location.state.searchParam &&
        props.history.location.state.listBooks &&
        searched === false
      ) {
        const response = await api.get(
          `${props.history.location.state.searchParam}&startIndex=0&maxResults=40`
        );
        listBooks = [];
        setSearched(true);
        setBooks(response.data);
        setSearchParam(props.history.location.state.searchParam);
        setStartIndex(0);
        console.log('Books', response.data);
        setLoading(false);
      } else {
        const response = await api.get(
          `${searchParam}&startIndex=${startIndex}&maxResults=40`
        );
        setBooks(response.data);
        console.log('Books', response.data);
        setLoading(false);
      }
    }
    getBooks();
  }, [startIndex, search]);

  useEffect(() => {
    function BookList() {
      if (books && books.items) {
        books.items.map((book) => {
          listBooks.push(book);
        });
      }
    }
    BookList();
  }, [books]);

  function handleMore() {
    setStartIndex(startIndex + 40);
  }

  return (
    <ContainerBackground>
      <Header>
        <ButtonIcon>
          <Link
            onClick={() => history.push('/')}
            style={{ color: '#000', textDecoration: 'none' }}
          >
            <MdHome size={25} />
          </Link>
        </ButtonIcon>
        <Link
          style={{ color: '#000', textDecoration: 'none' }}
          onClick={() => window.location.reload()}
        >
          <TextTitle>Amazing Books</TextTitle>
        </Link>
        {!renderSearch ? (
          <ButtonIcon onClick={() => setRenderSearch(true)}>
            <MdSearch size={25} />
          </ButtonIcon>
        ) : (
          <ContainerSearch>
            <InputSearch
              onChange={(e) => setSearchParam(e.target.value)}
              placeholder="Search"
            />
            <ButtonIcon
              onClick={() => {
                setStartIndex(0);
                listBooks = [];
                setSearch(!search);
              }}
            >
              <MdSearch size={27} />
            </ButtonIcon>
          </ContainerSearch>
        )}
      </Header>
      <ContainerLogo>
        <TextContainer>
          <TextDescription>
            “A reader lives a thousand lives before he dies . . . The man who
            never reads lives only one.”
          </TextDescription>
          <TextDescriptionQuote>George R.R. Martin</TextDescriptionQuote>
        </TextContainer>
        <img src={image} />
      </ContainerLogo>
      <ContainerBooks>
        {books ? (
          <BookList>
            {listBooks &&
              listBooks.map((book) => {
                return (
                  <>
                    <li key={book.id}>
                      <Link
                        to={`/bookDetails/${book.id}`}
                        style={{ textDecoration: 'none', color: '#000' }}
                      >
                        <img
                          src={
                            book.volumeInfo && book.volumeInfo.imageLinks
                              ? book.volumeInfo.imageLinks.thumbnail
                              : missingImage
                          }
                          alt="thumbnail"
                        />

                        <p>
                          {book.volumeInfo &&
                            book.volumeInfo.title &&
                            book.volumeInfo.title.toUpperCase()}
                        </p>
                      </Link>
                    </li>
                  </>
                );
              })}
          </BookList>
        ) : (
          <ReactLoading type={'spin'} color={'#000'} height={100} width={100} />
        )}
      </ContainerBooks>
      <ButtonContainer>
        {!loading ? (
          <ButtonMore onClick={() => handleMore()}>'LOAD MORE'</ButtonMore>
        ) : (
          <ReactLoading type={'spin'} color={'#000'} height={50} width={50} />
        )}
      </ButtonContainer>
    </ContainerBackground>
  );
}

export default Books;

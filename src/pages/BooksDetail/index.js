import React, { useState, useEffect } from 'react';
import Rating from '@material-ui/lab/Rating';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import {
  ContainerBackground,
  Header,
  ButtonIcon,
  TextTitle,
  ContainerDetails,
  ContainerImage,
  Image,
  ContainerDetailsBook,
  TextTitleBook,
  TextAuthor,
  TextPrice,
  ConatinerStarPrice,
  ConatinerTitleBook,
  ButtonBuy,
  ConatinerButtons,
  ButtonIconLike,
} from './styles';

import { MdSearch } from 'react-icons/md';
import { FcLikePlaceholder, FcLike } from 'react-icons/fc';
import { ImBooks } from 'react-icons/im';
import missingImage from '../../assets/missingbook.png';

function BooksDetail({ match }) {
  const history = useHistory();
  const [book, setBook] = useState();
  const [rating, setRating] = useState();
  const [liked, setLiked] = useState(false);
  const { bookId } = match.params;

  useEffect(() => {
    async function getBook() {
      const response = await api.get(`${bookId}`);
      setBook(response.data);
    }
    getBook();
  }, []);

  return (
    <ContainerBackground>
      <Header>
        <ButtonIcon
          onClick={() => (window.location.href = 'http://localhost:3000/books')}
        >
          <ImBooks size={25} />
        </ButtonIcon>
        <TextTitle>Amazing Books</TextTitle>
        <ButtonIcon>
          <MdSearch size={25} />
        </ButtonIcon>
      </Header>
      <ContainerDetails>
        <ContainerImage>
          <Image
            src={
              book &&
              book.items[0] &&
              book.items[0].volumeInfo &&
              book.items[0].volumeInfo.imageLinks &&
              book.items[0].volumeInfo.imageLinks.thumbnail
                ? book.items[0].volumeInfo.imageLinks.thumbnail
                : missingImage
            }
            alt=""
          />
        </ContainerImage>
        <ContainerDetailsBook>
          <ConatinerTitleBook>
            <TextTitleBook>
              {book && book.items[0].volumeInfo.title}
            </TextTitleBook>
            <TextAuthor>
              by {book && book.items[0].volumeInfo.authors}
            </TextAuthor>
            <ConatinerStarPrice>
              <TextPrice>
                {book &&
                book.items[0] &&
                book.items[0].saleInfo.saleability === 'FOR_SALE'
                  ? 'R$' + book &&
                    book.items[0].saleInfo.retailPrice.amount.toPrecision(4)
                  : 'NOT FOR SALE'}
              </TextPrice>
              <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
              />
            </ConatinerStarPrice>
            <ConatinerButtons>
              <ButtonBuy
                onClick={() =>
                  window.open(`${book.items[0].saleInfo.buyLink})`, '_blank')
                }
                disabled={
                  book &&
                  book.items[0] &&
                  book.items[0].saleInfo.saleability === 'FOR_SALE'
                    ? false
                    : true
                }
              >
                BUY
              </ButtonBuy>
              <ButtonIconLike onClick={() => setLiked(!liked)}>
                {!liked ? (
                  <FcLikePlaceholder size={25} />
                ) : (
                  <FcLike size={25} />
                )}
              </ButtonIconLike>
            </ConatinerButtons>
            <p>{book && book.items[0].volumeInfo.description}</p>
          </ConatinerTitleBook>
          {book && console.log(book.items[0].saleInfo.buyLink)}
        </ContainerDetailsBook>
      </ContainerDetails>
    </ContainerBackground>
  );
}

export default BooksDetail;

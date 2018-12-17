import React from 'react'; 
import PropTypes from 'prop-types'; 
import { Link } from 'gatsby';


// {src: String, alt: String, className: String }
const Images = ({imgs}) => (
  imgs.map((img) => (
    <img src={img.src} alt={img.alt} className={'card__icon-item'} />
  ))
);

// link { to: string, type: String [A, LINK, BUTTON ], className: String }
const Button = ({link}) => {
  let classNames = 'btn'; 
  switch (link.type.toUpperCase()) {
    case 'A':
      return (
        <a 
          href={link.to} 
          className={classNames}
        > 
          { link.text } 
        </a>
      );
    default: 
      return (
        <Link to={link.to} className={classNames}>{ link.text }</Link>
      );
  }
};

function Card({title, imgs, link, children}) {
  return (
    <div className="card">
      <header className="card__header">
        <h3 className="card__title">{title}</h3>
        <div className="card__icons">
          <Images imgs={imgs} /> 
        </div>
      </header> 
      <div className="card__content">
        {children}
      </div>
      <div className="card__footer">
        <Button link={link} />
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imgs: PropTypes.array, 
  link: PropTypes.object, 
};

export default Card; 
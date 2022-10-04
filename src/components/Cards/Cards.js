// import React from 'react'
// import {
//     CardWrapper,
//     CardImg,
//     CardTextBody,
//     CardTextDate,
//     CardTextTitle,
//     CardTextWrapper,
//     CardLinkWrapper,
//     CardLink,
//     LinkText
// } from './CardsElements'

// import image1 from '../../images/food/Portrait/1.jpg'

// const Cards = ({ title, date, Img}) => {
//   return (
//     <>
//       <CardWrapper>
//         <CardImg background={image1} />
//         <CardTextWrapper>
//             <CardTextDate>{date} days ago</CardTextDate>
//             <CardTextTitle>{title}</CardTextTitle>
//             <CardTextBody>
//             Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
//             temporibus omnis illum maxime quod deserunt eligendi dolor
//           </CardTextBody>
//         </CardTextWrapper>
//         <CardLinkWrapper>
//             <CardLink>
//                 <LinkText href="#">See More</LinkText>
//             </CardLink>
//         </CardLinkWrapper>
//       </CardWrapper>
//     </>
//   )
// }

// export default Cards
import React from 'react'
import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextDate,
  CardTextTitle,
  CardTextBody,
  CardStatWrapper,
  CardStats,
  LinkText
} from "./CardsElements";


const Cards = ({ title, date, imgUrl }) => {
  return (

      <CardWrapper>
        <CardImage background={imgUrl} />
        <CardTextWrapper>
          <CardTextDate>{date} days ago</CardTextDate>
          <CardTextTitle>{title}</CardTextTitle>
          <CardTextBody>
            Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
            temporibus omnis illum maxime quod deserunt eligendi dolor
          </CardTextBody>
        </CardTextWrapper>
        <CardStatWrapper>
          {/* <CardStats>
            <div>
              1<sup>m</sup>
            </div>
            <div>read</div>
          </CardStats> */}
          <CardStats>
            <LinkText href="#">website</LinkText>
          </CardStats>
          <CardStats>
            <LinkText href="#">github</LinkText>
          </CardStats>
        </CardStatWrapper>
      </CardWrapper>
  );
};


export default Cards
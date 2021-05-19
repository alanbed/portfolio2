import React from 'react';
import styled from 'styled-components';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

export const FooterSection = () => {
  return (
    <StyledFooter
      variants={pageAnimation}
      initial='hidden'
      exit='exit'
      animate='show'
    >
      <p className='copyrightText'>© 2021 Alan Bedoya</p>
      <StyledIcons>
        <li>
          <a href='https://github.com/alanbedoya'>
            <FaGithubSquare
              className='colorChange'
              size='2.2rem'
              color='#ccc'
            />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/alanbedoya/'>
            <FaLinkedin className='colorChange' size='2.2rem' color='#ccc' />
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/alanbed22/'>
            <FaInstagramSquare
              className='colorChange'
              size='2.2rem'
              color='#ccc'
            />
          </a>
        </li>
      </StyledIcons>
    </StyledFooter>
  );
};

const StyledFooter = styled(motion.footer)`
  height: 4rem;
  background: #282828;
  display: flex;
  margin-top: auto;
  padding-left: 10%;
  padding-right: 10%;
  align-items: center;
  justify-content: space-between;
  align-self: center;
  bottom: 0;

  .copyrightText {
    font-size: 1rem;
    padding: 0;
    margin: 0;
  }

  @media (max-width: 53em) {
    .copyrightText {
      font-size: 0.6rem;
    }
  }
`;

const StyledIcons = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;

  li {
    padding: 0 1rem;
    color: #ccc;

    .colorChange {
      :hover {
        fill: #89c9b8;
      }
    }
  }
`;

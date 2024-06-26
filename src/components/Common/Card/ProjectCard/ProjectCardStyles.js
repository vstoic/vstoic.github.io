import styled from 'styled-components';
import { Box, Modal } from '@mui/material';
// import { Image } from '@mui/icons-material';
// import Modal from '@mui/material/Modal';

export const Title = styled.div`
  fontFamily: 'Phi,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif',
  fontSize: '32px',
  fontWeight: 'bold',
  // color: 'black',
`;

export const LinkText = styled.p`
    cursor: pointer;
    font-weight: 500;
    font-size: 1.2rem;
    margin-bottom: 0px;
    // color: black;
    text-decoration: none;
    fontFamily: 'Phi, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',

    :hover {
    }
  `;

export const WorkImage = styled.img(({ theme }) => ({
  width: '388px',
  height: '285px',
  objectFit: 'cover',
  borderRadius: '3px',
  opacity: '0.8',
  transition: 'opacity 500ms ease',
  backgroundColor: 'white',
  boxShadow: `0px 2px 5px 1px ${theme.palette.shadow.main}, 0px 3px 5px 0px ${theme.palette.shadow.secondary}`,
  '@media (max-width: 1200px)': {
    height: 'auto',
    width: '100%',
  },
}));

export const ProjectImage = styled.img(({ theme }) => ({
  width: '388px',
  height: '285px',
  objectFit: 'cover',
  borderRadius: '3px',
  opacity: '0.8',
  filter: 'grayscale(100%)',
  transition: 'opacity 500ms ease',
  backgroundColor: 'white',
  boxShadow: `0px 2px 5px 1px ${theme.palette.shadow.main}, 0px 3px 5px 0px ${theme.palette.shadow.secondary}`,
  '@media (max-width: 1200px)': {
    height: 'auto',
    width: '100%',
    filter: 'grayscale(0%)',
  },
}));

export const CustomModal = styled(Modal)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  backdrop-filter: blur(5px);
  flex-wrap: wrap;
  border: none;
  overflow: scroll;

  @media (max-width: 900px) {
    width: 100vw;
    flex-direction: column;
  }
`;

export const ModalContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 85%;
  height: 85%;
  min-height: 85%;
  overflow: scroll;

  @media (max-width: 900px) {
    overflow: scroll;
    overflow-y: auto; /* Allow vertical scrolling */
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100%;
    margin: 0px;
    padding: 0px;
  }
`;

export const ModalImageContainer = styled(Box)`
  width: 50%;
  height: auto;
  background-color: white;
  display: flex;
  align-items: center;
  padding: 0% 5%;

  @media (max-width: 900px) {
    width: 80vw;
    height: auto;
    margin: 20px 0px 0px 0px;
  }
`;

export const ModalTextContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flexDirection: 'column',
  backgroundColor: theme.palette.background.default,
  width: '50%',
  padding: '30px 50px',

  '@media (max-width: 900px)': {
    width: '80vw',
    height: '100%',
    padding: '20px 20px 30px 20px',
  },
}));

export const styles = {
  eachGrid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '3rem',
    cursor: 'pointer',
    width: '100%',
    margin: 0, // Add this to reset margin
    padding: 0, // Add this to reset padding
    animation: 'fadeIn 1s 0.5s backwards',
    // color: '#333',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
  },
  textTitle: {
    margin: '4px 0px 0px',
    textAlign: 'left',
    fontSize: '18px',
    fontWeight: '300',
    fontFamily:
      'Phi,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif',
  },
  textJobTitle: {
    margin: '15px 0px 0px',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: '16px',
    fontWeight: '200',
    fontFamily:
      'Phi, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  },
  text: {
    fontSize: '16px',
    fontWeight: 'normal',
    fontFamily:
      'Phi,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif',
  },
  modalImage: {
    overflow: 'show',
    objectFit: 'contain',
    width: '100%',
    height: 'auto',
  },
  modelTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end', // Updated property
    alignItems: 'center',
    width: '100%',
    marginBottom: '20px',
  },
  exitButtonContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalTitle: {
    textAlign: 'center',
    fontSize: '28px',
    fontWeight: ' 200',
    fontFamily:
      'Phi, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  },
  modalSubTitle: {
    textAlign: 'center',
    textTransform: 'uppercase',
    marginTop: '24px',
    fontSize: '16px',
    fontWeight: '200',
    fontFamily:
      'Phi, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  },
  modalText: {
    paddingLeft: '15px',
    fontSize: '14px',
    fontWeight: '200',
    fontFamily:
      'Phi, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  },
  link: {
    paddingLeft: '15px',
    cursor: 'pointer',
    fontWeight: '200',
    textDecoration: 'none',
    fontSize: '14px',
    fontFamily:
      'Phi, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  },
};

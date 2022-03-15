import styled from 'styled-components';

const App = styled.div`
  padding: 40px;
`;

const Header = styled.header`
  background-color: #282c34;
  padding: 2% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 40px;
`;

const styles = {
  App,
  Header,
  Pagination,
};

export default styles;

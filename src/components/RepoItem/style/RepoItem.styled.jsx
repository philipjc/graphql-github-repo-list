import styled from 'styled-components';

const RepoItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const ItemDetails = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

const DetailsText = styled.i`
  margin-bottom: 5px;
  margin-right: 10px;
  width: fit-content;
`;

const repoItemStyles = {
  RepoItem,
  ItemDetails,
  DetailsText,
};

export default repoItemStyles;

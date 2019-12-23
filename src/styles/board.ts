import styled from '@emotion/styled';
import { makeStyles } from '@material-ui/core/styles';

export const BoardContainer = styled.div`
  display: flex;
  flex-flow: 'row';
`;

export const CompleteColumn = styled.div`
  display: 'flex';
  flex-flow: 'column';
  width: 100%;
`;

export const Questions = styled.div`
  display: 'flex';
  flex-flow: 'column';
`;

// materialize
export const useStyles = makeStyles({
  card: {
    padding: '1rem',
    margin: '0.2rem',
    backgroundColor: '#3F9FC9',
    color: 'white',
    minHeight: '3rem',
    minWidth: '3rem',
    textAlign: 'center',
    fontSize: '1.2rem',
  },
});

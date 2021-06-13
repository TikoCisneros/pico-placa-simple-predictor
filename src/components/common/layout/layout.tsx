import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#ffffff',
    backgroundImage: 'linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)',
    minWidth: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export type LayoutProps = {
  children?: React.ReactChild | React.ReactChild[];
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <Grid className={useStyles().root} spacing={0} container>
    {children}
  </Grid>
);

export default Layout;

// import React from 'react'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import about from './img/about.jfif'
import './css/Portfolio.css'
import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

const Portfolio = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

    return (
          <Stack container display="flex" flexWrap="wrap" marginTop="80px" justifyContent="center"  align-items="center" direction="row" spacing={10} >
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="300"
        image={about}
      />
      <CardContent>
        <Typography className="header-name" variant="p" component="div">
          Gerald Diego
        </Typography>
        <Typography className="sub-header" gutterBottom variant="p" component="div">
          A Web Developer
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos id dolore doloremque, culpa, voluptatem, atque voluptate fugit suscipit ullam vel dolorem quo molestiae aperiam ratione quae. Eveniet, libero. Id, fugiat?
        </Typography>
      </CardContent>
      <CardActions>
        <Button href="https://github.com/gerald-diego54" className="btn-action" size="small">Portfolio</Button>
      </CardActions>
    </Card>


    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="300"
        image={about}
      />
      <CardContent>
        <Typography className="header-name" variant="p" component="div">
          John Eric
        </Typography>
        <Typography className="sub-header" gutterBottom variant="p" component="div">
          A Web Developer
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos id dolore doloremque, culpa, voluptatem, atque voluptate fugit suscipit ullam vel dolorem quo molestiae aperiam ratione quae. Eveniet, libero. Id, fugiat?
        </Typography>
      </CardContent>
      <CardActions>
      <Button href="https://github.com/Jonnykoder" className="btn-action" size="small">Portfolio</Button>
      </CardActions>
    </Card>


    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="300"
        image={about}
      />
      <CardContent>
        <Typography className="header-name" variant="p" component="div">
          Demel Novo
        </Typography>
        <Typography className="sub-header" gutterBottom variant="p" component="div">
          A Web Developer
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos id dolore doloremque, culpa, voluptatem, atque voluptate fugit suscipit ullam vel dolorem quo molestiae aperiam ratione quae. Eveniet, libero. Id, fugiat?
        </Typography>
      </CardContent>
      <CardActions>
      <Button href="https://github.com/ShadowLight016" className="btn-action" size="small">Portfolio</Button>
      </CardActions>
    </Card>
    </Stack>
    )
}

export default Portfolio
 //typography

// export default function Home() {
//     return (
        
//     );
// }
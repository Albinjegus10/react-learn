import * as React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard({ id, image, title, description, price }) {
  return (
    <Card sx={{ maxWidth: 345, mb: 2 }}>
      <Link to={`/checkout/${id}`} style={{ textDecoration: 'none' }}>
        <CardMedia
          component="img"
          alt={title}
          height="200" // Increase the height of the image area here
          image={image}
          style={{ cursor: 'pointer' }}
        />
      </Link>
      <CardContent sx={{ py: 1 }}> {/* Reduce padding here */}
        <Typography gutterBottom variant="h6" component="div"> {/* Reduce the variant to h6 */}
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
        <Typography variant="body2" sx={{ color: 'red', mt: 1 }}> {/* Change 'green' to any color you like */}
  Price: Rs {price}
</Typography>
      </CardContent>
      <CardActions sx={{ py: 1 }}> {/* Reduce padding here */}
        <Button size="small">Buy</Button>
        <Button size="small">Add Cart</Button>
      </CardActions>
    </Card>
  );
}

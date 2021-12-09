import { useState, FunctionComponent } from 'react';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Button from '@mui/material/Button';
import parser from 'html-react-parser';
import { Link } from '@mui/material';
import { Book } from '../../Interfaces/Book';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const useStyles = makeStyles({
  img: {
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

const ExpandMore = styled((props: ExpandMoreProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface Props {
  bookInfo: Book;
}

export const BookCard: FunctionComponent<Props> = ({ bookInfo }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const {
    volumeInfo: { title, authors, publishedDate, description, imageLinks },
    searchInfo,
    accessInfo: { webReaderLink },
  } = bookInfo;

  const image =
    imageLinks?.thumbnail ||
    'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg';

  const snippet = parser(
    searchInfo?.textSnippet || '<b>No short description found</b>'
  );

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={title}
        subheader={`Author(s): ${authors?.join(', ') || 'Unknown'}`}
      />
      <CardMedia component="img" image={image} className={classes.img} />
      <CardContent>
        <Typography variant="subtitle1">
          Published Date: {publishedDate || 'Unknown'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {snippet}
        </Typography>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="subtitle1" gutterBottom component="div">
            Description
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description?.slice(0, 600)}...
          </Typography>
        </CardContent>
      </Collapse>
      <CardActions disableSpacing>
        <CardActions>
          <Button size="small">
            <Link
              href={webReaderLink}
              target="_blank"
              rel="noreferrer"
              underline="none"
              color="inherit"
            >
              Learn More
            </Link>
          </Button>
        </CardActions>
        {description && (
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Show More"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        )}
      </CardActions>
    </Card>
  );
};

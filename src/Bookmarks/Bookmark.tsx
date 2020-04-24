import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import { Grid, Paper, Typography, Link, IconButton } from "@material-ui/core";
import BookmarkEditForm from "./BookmarkEditForm";

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
}));

interface BookmarkProps {
    bookmark: BookmarkType,
}

const Bookmark: React.FC<BookmarkProps> = (bookmarkProps) => {

    const classes = useStyles();

    const [currBookmark, setCurrentBookmark] = React.useState(bookmarkProps.bookmark);

    const [editFormOpen, setEditFormOpen] = React.useState(false);

    const handleBookmarkEditFormOpen = () => {
        setEditFormOpen(true);
    }

    const handleBookmarkEditFormClose = () => {
        setEditFormOpen(false);
    }

    return(
        <React.Fragment>
            <BookmarkEditForm open={editFormOpen} bookmark={currBookmark} onClose={handleBookmarkEditFormClose} />
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Grid container>
                            <Grid item xs={10}>
                                <Typography variant="h6" align="left" gutterBottom>
                                    <Link href={currBookmark.url} target="_blank" rel="noreferrer">{currBookmark.name}</Link>
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Grid container justify="flex-end">
                                    <IconButton size="small" color="primary" onClick={handleBookmarkEditFormOpen}>
                                        <EditIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="subtitle1" align="left">{currBookmark.description}</Typography>
                            </Grid>                            
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Bookmark;
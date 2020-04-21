import React from 'react';
import Bookmark from './Bookmark';
import { Grid } from '@material-ui/core';
import BookmarkService from './BookmarkService';

const BookmarkList: React.FunctionComponent = () => {

    const bookmarkService = new BookmarkService();

    const [bookmarks, setBookmarks] = React.useState(bookmarkService.getBookmarks());

    return (
        <React.Fragment>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    {
                        bookmarks.map((bookmark: BookmarkType) => {
                            return <Bookmark bookmark={bookmark} />
                        })
                    }
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default BookmarkList;
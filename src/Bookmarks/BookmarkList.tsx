import React from 'react';
import Bookmark from './Bookmark';
import { Grid, Select, MenuItem } from '@material-ui/core';
import BookmarkService from './BookmarkService';

const BookmarkList: React.FunctionComponent = () => {

    const bookmarkService = new BookmarkService();

    const [bookmarks, setBookmarks] = React.useState(bookmarkService.getBookmarks());
    const [bookmarkSort, setBookmarkSort] = React.useState(0);

    const handleBookmarkSort = (event: React.ChangeEvent<{value: unknown}>) => {
        setBookmarkSort(event.target.value as number);
        setBookmarks(bookmarkService.getBookmarksSort(event.target.value as number));
    }

    return (
        <React.Fragment>
            <Grid container spacing={4}>
                <Grid item xs={10} />
                <Grid item xs={2}>
                    <Grid container justify="flex-end">
                        <Select id="selectBookmarkSort" value={bookmarkSort} onChange={handleBookmarkSort}>
                            <MenuItem value={0}>Reihenfolge</MenuItem>
                            <MenuItem value={1}>Reihenfolge, umgekehrt</MenuItem>
                            <MenuItem value={2}>alphabetisch</MenuItem>
                            <MenuItem value={3}>alphabetisch, umgekehrt</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
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
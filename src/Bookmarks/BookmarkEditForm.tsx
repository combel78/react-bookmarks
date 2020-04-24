import React from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, makeStyles, Theme, createStyles, FormControl } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            marginTop: theme.spacing(2),
        },
        formElement: {
            marginBottom: theme.spacing(2),
        },
    }),
);

interface BookmarkEditFormProps {
    open: boolean,
    bookmark: BookmarkType,
    onClose: any,
}

const BookmarkEditForm: React.FC<BookmarkEditFormProps> = (bookmarkEditFormProps) => {

    const classes = useStyles();

    const [inputName, setInputName] = React.useState(bookmarkEditFormProps.bookmark.name);
    const [inputUrl, setInputUrl] = React.useState(bookmarkEditFormProps.bookmark.url);
    const [inputDescription, setInputDescription] = React.useState(bookmarkEditFormProps.bookmark.description);

    const handleCancel = () => {
        bookmarkEditFormProps.onClose();
    }

    return (
        <div>
            <Dialog open={bookmarkEditFormProps.open} aria-labelledby="form-dialog-title" maxWidth="sm" fullWidth={true}>
                <DialogTitle id="form-dialog-title">Bookmark bearbeiten</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Bitte hier die Informationen zur Bookmark eingeben.
                    </DialogContentText>
                    <FormControl className={classes.formControl} fullWidth>
                        <TextField
                            id="bookmark_name"
                            className={classes.formElement}
                            label="Name" value={inputName}
                            autoFocus
                            fullWidth />
                        <TextField id="bookmark_url"
                            className={classes.formElement}
                            label="URL"
                            value={inputUrl}
                            fullWidth />
                        <TextField
                            id="bookmark_description"
                            className={classes.formElement}
                            label="Beschreibung"
                            value={inputDescription}
                            multiline
                            rows="2"
                            fullWidth />
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={handleCancel}>
                        Abbrechen
                    </Button>
                    <Button variant="contained" autoFocus  color="secondary">
                        Speichern
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default BookmarkEditForm;
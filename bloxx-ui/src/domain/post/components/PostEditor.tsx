import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Post} from "common/types/commonTypes";
import {messages} from "common/i18n/messages";
import {Controller, SubmitHandler, useForm} from "react-hook-form";


interface PostEditorProps {
    post: Post
    onSave: (post: Post) => void
    handleClose: () => void
    editorOpen: boolean
}

interface PostFormData {
    content: string
    title: string
}

export default function PostEditor({post, onSave, handleClose, editorOpen}: PostEditorProps) {
    const {handleSubmit, control, watch, getValues, formState: {errors}} = useForm<PostFormData>({
        defaultValues: {
            content: post.content,
            title: post.title
        }
    });
    const onSubmit: SubmitHandler<PostFormData> = (data: PostFormData, event?: React.BaseSyntheticEvent) => {
        event?.preventDefault()
    }

    const handleSave = () => {
        const values: PostFormData = getValues()
        onSave({
            ...post,
            ...values
        })
        handleClose()
    }

    return (
        <Dialog open={editorOpen} onClose={handleClose} fullWidth={true}>
            <DialogTitle>{messages.postEditor.dlgtitle}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {messages.postEditor.dlgdescription}
                </DialogContentText>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="title"
                        control={control}
                        rules={{required: true}}
                        render={({field}) =>
                            <TextField
                                autoFocus
                                margin="dense"
                                label="Title"
                                type="text"
                                fullWidth
                                variant="standard"
                                {...field}
                            />
                        }
                    />
                    <Controller
                        name="content"
                        control={control}
                        rules={{required: true}}
                        render={({field}) =>
                            <TextField
                                autoFocus
                                margin="dense"
                                label="Inhalt"
                                type="text"
                                fullWidth
                                variant="standard"
                                {...field}
                            />
                        }
                    />
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>{messages.common.btnCancel}</Button>
                <Button onClick={handleSave}>{messages.common.btnSave}</Button>
            </DialogActions>
        </Dialog>
    );
}
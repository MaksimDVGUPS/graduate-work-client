import styles from './ArticleEditForm.module.scss'
import React, {FC, useEffect, useState} from "react";
import {Button, MenuItem} from "@mui/material";
import {OutputData} from "@editorjs/editorjs";
import CustomTextField from "../../../ui-kit/CustomTextField/CustomTextField";
import cn from "classnames";
import dynamic from "next/dynamic";
import {Api} from "../../../utils/api";
import {UploadResponse} from "../../../utils/api/filesApi";
import CustomSelect from "../../../ui-kit/CustomSelect/CustomSelect";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";
import CustomButton, {ButtonType} from "../../../ui-kit/CustomButton/CustomButton";
import PageHeader from "../../PageHeader/PageHeader";

const Editor = dynamic(() => {
    return import("../../Editor/Editor")
}, {ssr: false})

interface ArticleEditForm {
    pageTitle: string;
    onSubmit: (name: string, previewText: string, previewImage: number, content: OutputData['blocks'], categoryId: 1) => void;
}

const ArticleEditForm: FC<ArticleEditForm> = ({ pageTitle, onSubmit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [previewImage, setPreviewImage] = useState<UploadResponse | null>(null);
    const [category, setCategory] = useState<number | ''>('')
    const [content, setContent] = useState<OutputData['blocks']>([])

    const {categories} = useTypedSelector(state => state.articlesCategories);
    const {fetchArticlesCategories} = useActions();

    useEffect(() => {
        if (!categories) {
            fetchArticlesCategories()
        }
    }, [])

    const changeTitleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const changeDescriptionHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value)
    }

    const changePreviewImageHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const formData = new FormData();
            formData.set('file', event.target.files[0], 'file');
            try {
                const response = await Api().files.uploadImage(formData);
                setPreviewImage(response);
            } catch (e) {

            }
        }
    }

    const changeCategoryHandler = (categoryId: number) => {
        setCategory(categoryId)
    }

    const changeContentHandler = (blocks: OutputData['blocks']) => {
        setContent(blocks)
    }

    const submitHandler = async () => {
        await onSubmit(title, description, previewImage.fileId, content, category)
    }

    return (
        <>
            <PageHeader h1={pageTitle}>
                <div className={styles.btns}>
                    <CustomButton variant={ButtonType.blue} text='Опубликовать' additionalClass={styles.blueBtn} onClick={submitHandler} />
                </div>
            </PageHeader>
            <div className='section'>
                <div className={cn("container", styles.container)}>
                    <CustomTextField
                        className={styles.input}
                        label='Заголовок'
                        variant='standard'
                        name='title'
                        value={title}
                        onChange={changeTitleHandler}
                    />
                    <CustomTextField
                        className={styles.input}
                        label='Краткое описание'
                        variant='standard'
                        name='description'
                        value={description}
                        onChange={changeDescriptionHandler}
                        multiline
                    />
                    <div>
                        {previewImage &&
                            <div className={styles.previewImage}>
                                <img src={`${process.env.NEXT_PUBLIC_SERVER_URL}/tmp/${previewImage.filename}`} />
                            </div>
                        }
                        <Button
                            variant="contained"
                            component="label"
                            className={styles.loadPreviewBtn}
                        >
                            {previewImage ? 'Заменить превью' : 'Загрузить превью'}
                            <input
                                onChange={changePreviewImageHandler}
                                type="file"
                                hidden
                            />
                        </Button>
                    </div>
                    <CustomSelect label='Категория' value={category} onChange={changeCategoryHandler}>
                        {categories && categories.map(category =>
                            <MenuItem value={category.id}>{category.name}</MenuItem>
                        )}
                    </CustomSelect>
                </div>
            </div>
            <Editor blocks={content} onChange={changeContentHandler} />
        </>
    );
};

export default ArticleEditForm;
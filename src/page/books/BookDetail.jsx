import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, TextField, Typography } from "@mui/material"
import { Link, useNavigate, useParams } from "react-router-dom"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ja } from "date-fns/locale";
import { useState } from "react";
import { format } from "date-fns";

export const BookDetail =({books,setBooks})=>{
    const navigate = useNavigate();
    const params = useParams()
    const book = books.find(data =>{
        return data.id === parseInt(params.id,10) 
    })

    console.log(book.readDate)

    const [value,setValue] = useState(new Date(book.readDate));
    const [memo,setMemo]   = useState(book.memo); 

    const updateBookInfo=(id)=>{
        const newList = books.filter(data=>{
            if (data.id === id ){
                data.readDate = value
                data.memo = memo
                return data
            } else{
                return data
            }
        })

        setBooks(newList)
        navigate('/')
        
    }

    const setNewValue = (newValue)=>{
        setValue(new Date(newValue));
        // setValue(format(newValue,'yyyy/MM/dd'))
    }

    // console.log(memo);
    return (<>
    <Container component={"section"} maxWidth="md" sx={{mt:5}}>
        <Card sx={{height:"100%"}}>
            <Grid container>
                <Grid item sm={4}>
                    <CardMedia
                        component={"img"}
                        image={book.image}
                        alt={book.title}
                    />
                </Grid>
                <Grid item sm={8}>
                    <CardContent>
                        <Typography sx={{mb:2,fontSize:"18px"}}>
                            {book.title}
                        </Typography>
                        <Box sx={{mb:2}}>
                            読んだ日
                            <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja} dateFormats={{monthAndYear:"yyyy年 MM月"}}>
                                <DatePicker label={"日付"} maxDate={new Date()} value={value} onChange={(newValue)=>{setNewValue(newValue)}} />
                            </LocalizationProvider>
                        </Box>
                        <Box>
                            感想: <br/>
                            <TextField
                                multiline
                                fullWidth
                                rows={8}
                                value={memo}
                                onChange={(e)=>{setMemo(e.target.value)}}    
                            />
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Grid item sm={6}>
                            <Button
                                component={Link}
                                to="/"
                                color="secondary"
                                variant="contained"
                            >一覧に戻る</Button>
                        </Grid>
                        <Grid item sm={6}>
                            <Button color="info" variant="contained" onClick={()=>{updateBookInfo(book.id)}}>保存する</Button>
                        </Grid>

                    </CardActions>
                </Grid>
            </Grid>

        </Card>

    </Container>
    </>)
}
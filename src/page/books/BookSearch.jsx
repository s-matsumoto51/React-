import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Fab, Grid,TextField, Typography } from "@mui/material"
import { useEffect, useRef, useState } from "react"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import { Link,useNavigate } from "react-router-dom";

export const BookSearch =({book = [], setBook = () => {} })=>{
    const inputRef = useRef('');
    const [searchResult,setSearchResult] = useState([]);
    const navigate = useNavigate();

    const onClickSearch =async(keyWord,e) =>{
        e.preventDefault();
        if (!keyWord) return;

        const bookUrl=`https://www.googleapis.com/books/v1/volumes?q=${keyWord.current.value}&maxResults=40`;

        const response= await fetch(bookUrl)
        .then((data)=>{return data.json()})
        .catch((error)=>{return alert(error)})

        setSearchResult(response.items.map((data)=>({
            title:data.volumeInfo.title?data.volumeInfo.title:'',
            image:data.volumeInfo.imageLinks?data.volumeInfo.imageLinks.thumbnail:'',
            description:data.volumeInfo.description?data.volumeInfo.description.slice(0, 40):''
        })))
        console.log(searchResult)
    }

    const addBook = card =>{
        console.log(card)
        const newId = book.length !==0 ? book.slice(-1)[0].id+1 :1
        const newBook={
            id:newId,
            title : card.title,
            description :card.description,
            image: card.image,
            readDate:'',
            memo:''
        }
        setBook([
            ...book,
            newBook
        ])

        navigate(`/edit/${newId}`)
    }
    
    return (
    <>
        <Container component={"section"} maxWidth="xl">
            <Fab size="medium"
                component={Link}
                to={'/'}
                sx={{mt:1,ml:1}}
            >
                <ArrowBackIcon/>
            </Fab>
        </Container>
        <Container component={"section"} maxWidth="lg">
            <Box sx={{
                mt:2,
                display:"flex",
                flexDirection:'column',
                alignItems:'center'
            }}>
                <Typography component={"h1"} variant="h5">本を検索</Typography>
                <Box component={"form"} onSubmit={e =>onClickSearch(inputRef,e)} sx={{mt:1}}>
                    <TextField inputRef={inputRef} label={"search"} variant="outlined"name="search" required fullWidth></TextField>
                    <Button type="submit" fullWidth variant="contained" sx={{my:2}}>search</Button>
                </Box>
            </Box>            
        </Container>
        <Container component={"section"} maxWidth="lg">
            <Grid container spacing={4}>
                { searchResult.map((card, index) => (
                <Grid item key={index} xs={12} sm={6} md={4} >
                    <Card sx={{ height: '100%'}}>
                    <Grid container>
                        <Grid item sm={4}>
                        <CardMedia
                            component="img"
                            image={card.image}
                            alt={card.title}
                            />
                        </Grid>
                        <Grid item sm={8}>
                        <CardContent>
                            <Typography sx={{ fontSize: '16px'}}>
                            { card.title}
                            </Typography>
                            <Typography sx={{ fontSize:'14px', mb: 1.5 }}
                            color="text.secondary">
                            { card.description }
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Fab color="primary" onClick={()=>addBook(card)}>
                            <AddIcon />
                            </Fab>
                        </CardActions>
                        </Grid>
                    </Grid>
                    </Card>
                </Grid>
                ))}
            </Grid>
        </Container>

    </>)
}
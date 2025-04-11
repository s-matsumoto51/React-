import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Fab, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import { Link,useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { bookIndexSearch } from "./BookIndexSearch";
import { useState } from "react";

export const BookIndex =({books = [],setBooks = () => {}})=>{
    const navigate=useNavigate();
    const [value,setValue] = useState('');
    const [backFlg,setBackFlg] =useState(false);
    const [originalBooks,setOriginalBooks] =useState([]);
    const demo = [1,2,3,4,5,6]
    // const [sorted,setSorted] = useState(''); 

    const goToEdit =(id)=>{
        navigate(`/edit/${id}`)
    }

    const goToSearch =()=>{
        navigate('/search')
    }
    const sortChange=(e)=>{
        const newValue = e.target.value;
        let newBooks = []
        if(newValue===10){
            newBooks = [...books].sort((a,b)=>a.id-b.id)
        }
        if(newValue===20){
            newBooks = [...books].sort((a,b)=>a.title.localeCompare(b.title))
        }
        if(newValue===30){
            newBooks = [...books].sort((a, b) => {
                const titleA = a.readDate || "";
                const titleB = b.readDate || "";
                return titleA.localeCompare(titleB)
            })
        }
        setBooks(newBooks);
        console.log(newBooks)
    }
    return (<>
    <Container component={"section"} maxWidth="lg"sx={{my:2}}>
        <Stack direction="row"   sx={{justifyContent: "space-between",alignItems: "center"}}
            >
            <Box> 
                {!backFlg?<Button size="small" variant="contained" onClick={goToSearch}>検索する</Button> 
                :<Fab size="medium"component={Link} to={'/'} onClick={()=>{setBackFlg(false);setBooks(originalBooks)}}>
                    <ArrowBackIcon/>
                </Fab>}
            </Box>
            {/* <Box display="flex" gap={34} fullWidth>  */}
            <Box display="flex" gap={1}>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth value={value} onChange={e=>setValue(e.target.value)} />
                <Button variant="contained" onClick={()=>bookIndexSearch(books,value,setBackFlg,setBooks,setOriginalBooks)}>このページ内を検索</Button>
            </Box>
            <Box >
                <FormControl sx={{minWidth: 80}} >
                    <InputLabel id="demo-simple-select-label" size="medium">sort</InputLabel>
                    <Select 
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={sorted}
                        onChange={e=>sortChange(e)}>
                        <MenuItem value={10}>登録順</MenuItem>
                        <MenuItem value={20}>名前</MenuItem>
                        <MenuItem value={30}>読んだ日</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            {/* </Box> */}
        </Stack>   
    </Container>
    <Container component={"section"} maxWidth="lg">
        <Grid container spacing={4}>
            { books.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={3} >
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
                            <Fab color="primary" onClick={()=>goToEdit(card.id)}>
                            <EditIcon />
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
import React from 'react';
import {
    Card,
    CardContent,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
    Typography
} from "@material-ui/core";
import List from "@material-ui/core/List";
import LinkIcon from '@material-ui/icons/Link';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    media: {
        height: 140,
    },
});

const classificators = [
    {name: '  ББК'},
    {name: ' Генеральна систематична картотека з лісового госп-ва, лісової та д/о пром-ті'},
    {name: ' Каталог навчальних курсів'},
    {name: '  Ключові слова'},
    {name: '  Навчальні дисципліни'},
    {name: '  Персоналії'},
    {name: '  Праці співробітників НЛТУ'},
    {name: '  Тематичні картотеки'},
    {name: '  УДК'},
    {name: '  Фонд рідкісної книги'},
    {name: '  Художня література'},
];
const bbk = [
    {name: `Міждисциплінарні знання.Природничі науки.Техніка.Технічні науки`},
    {name: `Сільське і лісове господарство.Сільськогосподарські і лісогосподарські науки.Присадибне господарство.Агрономія`},
    {name: `Охорона здоров'я. Медичні науки`},
    {name: `Суспільні науки в цілому`},
    {name: `Історія.Історичні науки`},
    {name: `Економіка.Економічні науки`},
    {name: `Політика.Політичні науки`},
    {name: `Держава і право.Юридичні науки`},
    {name: `Військова справа.Військова наука.Культура.Наука.Освіта.Культура.Культурне будівництво.Наука.Наукознавство`},
    {name: `Освіта.Педагогічна наука`},
    {name: `Фізична культура і спорт`},
    {name: `Засоби масової інформації(Преса, радіомовлення, телебачення)`},
    {name: `Культурно - освітня робота`},
    {name: `Бібліотечна справа.Бібліотекознавство.Бібліографознавство.Охорона пам'яток історії і культури. Музейна справа. Архівна справа.`},
    {name: `Філологічні науки в цілому`},
    {name: `Мовознавство`},
    {name: `Фольклор.Фольклористика`},
    {name: `Літературознавство`},
    {name: `Художня література`},
    {name: `Мистецтвознавство`},
    {name: `Релігія.Містика.Вільнодумство`},
    {name: `Філософія`},
    {name: `Психологія`},
    {name: `Література універсального змісту`},
];
const Help = () => {
    const classes = useStyles();


    return (
        <>
            <h2>Допомога</h2>
                       <Card className={classes.root} variant="outlined">
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Правила користування пошуковою системою
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        За допомогою пошукової системи можна здійснювати пошук документів та переглядати інформацію про
                        них. Шукати документи можна як за атрибутами (автор, назва, інші вихідні дані) так і за
                        належністю документів до тієї чи іншої теми.
                    </Typography>
                </CardContent>
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Пошук в класифікаторах
                    </Typography>
                    <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                        Класифікатори призначені для того, щоб полегшити пошук необхідних документів. Рубрики у
                        класифікаторах називаються темами. Кожна тема має підтеми.

                        Кожний документ може бути віднесений до однієї або кількох тем, і у будь-якій з них його можна
                        знайти.

                        У системі створено класифікатори, будь-яким з них можна скористатися для пошуку необхідних
                        документів, вибравши опцію на екрані одержимо повний їх перелік:
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        Класифікатори:
                    </Typography>
                    <List gutterBottom>
                        {classificators.map(name => (
                                <ListItem>
                                    <ListItemIcon>
                                        <LinkIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary={name.name}/>
                                </ListItem>
                            )
                        )}
                    </List>
                    <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                        При виборі певного каталогу будуть відображені теми, які містяться в ньому. Наприклад, вибираємо
                        каталог 'ББК', і бачимо всі теми, якими можна скористатися для пошуку документа:
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        ББК:
                    </Typography>
                    <List gutterBottom>
                        {bbk.map(name => (
                                <ListItem>
                                    <ListItemText primary={name.name}/>
                                </ListItem>
                            )
                        )}
                    </List>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Вибравши одну з тем, відкриваємо її, тобто виводимо всі підтеми і т.д. Продовжуйте пошук таким
                        чином доти, доки не знайдете потрібну тему або не зупинитися на темі, що вже не розкривається,
                        бо не має підтем. Якщо таким чином знайти потрібну тему не вдається, спробуйте виконати пошук
                        теми за контекстом.

                        Під розкритою темою або класифікатором знаходиться меню, в якому можна вибрати необхідне
                        обмеження для документів ( 'Всі документи теми' або 'Всі документи теми з підтемами'). Якщо
                        треба відмовитись від пошуку в тематичному каталозі, виберіть умову 'Без обмежень' або перейдіть
                        на 'Класифікатори'. </Typography>
                </CardContent>
            </Card>
            {/*<Card className={classes.root} variant="outlined">*/}
            {/*    <CardContent className={classes.cardContent}>*/}
            {/*        /!*<form noValidate autoComplete="off">*!/*/}
            {/*        /!*    <TextField id="standard-basic" label="Standard" onChange={handle} value={inpVal}/>*!/*/}
            {/*        /!*    <Button onClick={reper}>post</Button>*!/*/}
            {/*        */}
            {/*        /!*    <Button onClick={request}>request</Button>*!/*/}
            {/*        /!*    <Button onClick={deleteReq}>deleteReq</Button>*!/*/}
            {/*        /!*</form>*!/*/}
            {/*    </CardContent>*/}
            {/*</Card>*/}
            {/*<Button onClick={() => console.log(movies)}>click</Button>*/}
            {/*<Card className={classes.root} variant="outlined">*/}
            {/*    <CardContent className={classes.cardContent}>*/}

            {/*        {*/}
            {/*            movies.length > 0*/}
            {/*                ? <TableContainer component={Paper}>*/}
            {/*                    <Table className={classes.table} aria-label="customized table">*/}
            {/*                        <TableHead>*/}
            {/*                            <TableRow>*/}
            {/*                                <StyledTableCell>Title</StyledTableCell>*/}
            {/*                                <StyledTableCell align="right">Year</StyledTableCell>*/}
            {/*                                <StyledTableCell align="right">author</StyledTableCell>*/}
            {/*                                <StyledTableCell align="right">imdbID</StyledTableCell>*/}
            {/*                                <StyledTableCell align="right">WHO IS THIS</StyledTableCell>*/}
            {/*                            </TableRow>*/}
            {/*                        </TableHead>*/}
            {/*                        <TableBody>*/}
            {/*                            {movies.map((movie) => (*/}
            {/*                                <StyledTableRow key={movie.id}>*/}
            {/*                                    <StyledTableCell component="th" scope="row">*/}
            {/*                                        {movie.title}*/}
            {/*                                    </StyledTableCell>*/}
            {/*                                    <StyledTableCell align="right">{movie.year}</StyledTableCell>*/}
            {/*                                    <StyledTableCell align="right">{movie.author}</StyledTableCell>*/}
            {/*                                    <StyledTableCell align="right">{movie.id}</StyledTableCell>*/}
            {/*                                    <StyledTableCell*/}
            {/*                                        align="center">{movie.ukrainian_author ? 'top' : 'loh'}</StyledTableCell>*/}
            {/*                                </StyledTableRow>*/}
            {/*                            ))}*/}
            {/*                        </TableBody>*/}
            {/*                    </Table>*/}
            {/*                </TableContainer>*/}
            {/*                : <>Ведіть потрібні значення</>*/}
            {/*        }*/}
            {/*    </CardContent>*/}
            {/*</Card>*/}
        </>
    );
};

export default Help;

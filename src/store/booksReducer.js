import { v4 as uuid } from 'uuid';

const books = [
    {
        id: uuid(),
        title: 'Доця',
        author: 'ТАМАРА ГОРІХА ЗЕРНЯ',
        year: 2019,
        lang: 'ukr'
    },
    {
        id: uuid(),
        title: 'Химеросховище',
        author: 'Тіна Гальянова',
        year: 2019,
        lang: 'ukr'
    },
    {
        id: uuid(),
        title: 'Магнетизм',
        author: 'Петро Яценко',
        year: 2020,
        lang: 'ukr'
    },{
        id: uuid(),
        title: 'БОМБАРДИР',
        author: 'КИРИЛО КРУТОРОГОВ',
        year: 2017,
        lang: 'ukr'
    },
    {
        id: uuid(),
        title: 'Перспективи української революції',
        author: 'СТЕПАН БАНДЕРА',
        year: 2020,
        lang: 'ukr'
    },
    {
        id: uuid(),
        title: 'Простими словами. Як розібратися у своїх емоціях',
        author: 'МАРК ЛІВІН, ІЛЛЯ ПОЛУДЬОННИЙ',
        year: 2020,
        lang: 'ukr'
    },
    {
        id: uuid(),
        title: '12 правил життя. Як перемогти хаос',
        author: 'ДЖОРДАН ПІТЕРСОН',
        year: 2019,
        lang: 'ukr'
    },
    {
        id: uuid(),
        title: 'Точка неповернення',
        author: 'ДМИТРО ВЕРБИЧ',
        year: 2020,
        lang: 'ukr'
    },
    {
        id: uuid(),
        title: 'Крадійка книжок',
        author: 'Маркус Зузак',
        year: 2015,
        lang: 'ukr'
    },
    {
        id: uuid(),
        title: 'Рекреації',
        author: 'Юрій Андрухович',
        year: 1992,
        lang: 'ukr'
    },
    {
        id: uuid(),
        title: 'Острів КРК',
        author: 'Юрій Іздрик',
        year: 1993,
        lang: 'ukr'
    },
    {
        id: uuid(),
        title: 'Московіада',
        author: 'Юрій Андрухович',
        year: 1993,
        lang: 'ukr'
    },
    {
        id: uuid(),
        title: 'Сталінка',
        author: 'Олесь Ульяненко',
        year: 1994,
        lang: 'ukr'
    },
    {
        id: uuid(),
        title: 'Цитатник',
        author: 'Сергій Жадан',
        year: 1995,
        lang: 'ukr'
    },
    {
        id: uuid(),
        title: 'Польові дослідження з українського сексу',
        author: 'Оксана Забужко',
        year: 1996,
        lang: 'ukr'
    },
    {
        id: uuid(),
        title: 'Перверзія',
        author: 'Юрій Андрухович',
        year: 1996,
        lang: 'ukr'
    },
    {
        id: uuid(),
        title: 'Воццек',
        author: 'Юрій Іздрик',
        year: 1997,
        lang: 'ukr'
    },
    {
        id: uuid(),
        title: 'Ключ',
        author: 'Василь Шкляр',
        year: 1999,
        lang: 'ukr'
    },
    {
        id: uuid(),
        title: 'Те, що на споді',
        author: 'Юрко Покальчук',
        year: 1999,
        lang: 'ukr'
    },
    {
        id: uuid(),
        title: 'Діва Обида',
        author: 'Ігор Римарук',
        year: 2000,
        lang: 'ukr'
    },
    {
        id: uuid(),
        title: 'Мальва Ланда',
        author: 'Юрій Винничук',
        year: 2000,
        lang: 'ukr'
    },
    {
        id: uuid(),
        title: 'Озерний вітер',
        author: 'Юрко Покальчук',
        year: 2000,
        lang: 'ukr'
    },
    {
        id: uuid(),
        title: 'Герой нашого часу',
        author: 'Лесь Подерв’янський',
        year: 2000,
        lang: 'ukr'
    },
    {
        id: uuid(),
        title: 'Культ',
        author: 'Любко Дереш',
        year: 2001,
        lang: 'ukr'
    },
    {
        id: uuid(),
        title: 'Рівне',
        author: 'Олександр Ірванець',
        year: 2001,
        lang: 'ukr'
    },
    {
        id: uuid(),
        title: 'Непрості',
        author: 'Тарас Прохасько',
        year: 2002,
        lang: 'ukr'
    },
    {
        id: uuid(),
        title: 'Дванадцять обручів',
        author: 'Юрій Андрухович',
        year: 2003,
        lang: 'ukr'
    },
    {
        id: uuid(),
        title: 'Кляса',
        author: 'Павло Вольвач',
        year: 2003,
        lang: 'ukr'
    },
    {
        id: uuid(),
        title: 'Тема для медитації',
        author: 'Леонід Кононович',
        year: 2003,
        lang: 'ukr'
    },
    {
        id: uuid(),
        title: 'Поклоніння ящірці',
        author: 'Любко Дереш',
        year: 2004,
        lang: 'ukr'
    },
    {
        id: uuid(),
        title: 'Фройд би плакав',
        author: 'Ірена Карпа',
        year: 2004,
        lang: 'ukr'
    },
    {
        id: uuid(),
        title: 'Депеш мод',
        author: 'Сергій Жадан',
        year: 2004,
        lang: 'ukr'
    },
    {
        id: uuid(),
        title: 'Весняні ігри в осінніх садах',
        author: 'Юрій Винничук',
        year: 2005,
        lang: 'ukr'
    },
    {
        id: uuid(),
        title: 'Пацики',
        author: 'Анатолій Дністровий',
        year: 2005,
        lang: 'ukr'
    },
    {
        id: uuid(),
        title: 'Жінка його мрії',
        author: 'Олесь Ульяненко',
        year: 2006,
        lang: 'ukr'
    },
    {
        id: uuid(),
        title: 'Мастер и Маргарита',
        author: 'Михаил Булгаков',
        year: 1921,
        lang: 'rus'
    },
    {
        id: uuid(),
        title: '12 стульев. Золотой телёнок',
        author: 'Илья Ильф',
        year: 1993,
        lang: 'rus'
    },
    {
        id: uuid(),
        title: 'А зори здесь тихие',
        author: 'Борис Васильев',
        year: 1972,
        lang: 'rus'
    },
    {
        id: uuid(),
        title: 'Тихий Дон',
        author: 'Михаил Шолохов',
        year: 1927,
        lang: 'rus'
    },
    {
        id: uuid(),
        title: 'Идиот',
        author: 'Фёдор Достоевский',
        year: 1868,
        lang: 'rus'
    },
    {
        id: uuid(),
        title: 'Анна Каренина',
        author: 'Лев Толстой',
        year: 1873,
        lang: 'rus'
    },
    {
        id: uuid(),
        title: 'Собачье сердце',
        author: 'Михаил Булгаков',
        year: 1968,
        lang: 'rus'
    },
    {
        id: uuid(),
        title: 'Мёртвые души',
        author: 'Николай Васильевич Гоголь',
        year: 1842,
        lang: 'rus'
    },
    {
        id: uuid(),
        title: 'Горе от ума',
        author: 'А. С. Грибоедов',
        year: 1825,
        lang: 'rus'
    },
    {
        id: uuid(),
        title: 'Отцы и дети',
        author: 'Иван Сергеев',
        year: 1860,
        lang: 'rus'
    },
    {
        id: uuid(),
        title: 'Доктор Живаго',
        author: 'Борис Пастернак',
        year: 1957,
        lang: 'rus'
    },
    {
        id: uuid(),
        title: 'Братья Карамазовы',
        author: 'Фёдор Достоевский',
        year: 1879,
        lang: 'rus'
    },
    {
        id: uuid(),
        title: 'Капитанская дочка',
        author: 'Александр Пушкин',
        year: 1836,
        lang: 'rus'
    },
    {
        id: uuid(),
        title: 'Ревизор',
        author: 'Николай Васильевич Гоголь',
        year: 1927,
        lang: 'rus'
    },
    {
        id: uuid(),
        title: 'Мы',
        author: 'Евгений Замятин',
        year: 1920,
        lang: 'rus'
    },
    {
        id: uuid(),
        title: 'In Search of Lost Time',
        author: 'Marcel Proust',
        year: 1913,
        lang: 'eng'
    },
    {
        id: uuid(),
        title: 'Ulysses',
        author: 'James Joyce',
        year: 1904,
        lang: 'eng'
    },
    {
        id: uuid(),
        title: 'Don Quixote',
        author: 'Miguel de Cervantes',
        year: 1605,
        lang: 'eng'
    },
    {
        id: uuid(),
        title: 'One Hundred Years of Solitude',
        author: 'Gabriel Garcia Marquez',
        year: 1967,
        lang: 'eng'
    },
    {
        id: uuid(),
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        year: 1925,
        lang: 'eng'
    },
    {
        id: uuid(),
        title: 'Moby Dick',
        author: 'Herman Melville',
        year: 1851,
        lang: 'eng'
    },
    {
        id: uuid(),
        title: 'War and Peace',
        author: 'Leo Tolstoy',
        year: 1869,
        lang: 'eng'
    },
    {
        id: uuid(),
        title: 'Hamlet',
        author: 'William Shakespeare',
        year: 1599,
        lang: 'eng'
    },
    {
        id: uuid(),
        title: 'The Odyssey',
        author: 'Homer',
        year: 1614,
        lang: 'eng'
    },
    {
        id: uuid(),
        title: 'Madame Bovary',
        author: 'Gustave Flaubert',
        year: 1856,
        lang: 'eng'
    },
    {
        id: uuid(),
        title: 'The Divine Comedy',
        author: 'Dante Alighieri',
        year: 1320,
        lang: 'eng'
    },
    {
        id: uuid(),
        title: 'Lolita',
        author: 'Vladimir Nabokov',
        year: 1955,
        lang: 'eng'
    },
    {
        id: uuid(),
        title: 'The Brothers Karamazov',
        author: 'Fyodor Dostoyevsky',
        year: 1879,
        lang: 'eng'
    },
    {
        id: uuid(),
        title: 'Crime and Punishment',
        author: 'Fyodor Dostoyevsky',
        year: 1983,
        lang: 'eng'
    },
    {
        id: uuid(),
        title: 'Wuthering Heights',
        author: 'Emily Brontë',
        year: 1986,
        lang: 'eng'
    },
    {
        id: uuid(),
        title: 'The Catcher in the Rye',
        author: 'J. D. Salinger',
        year: 1945,
        lang: 'eng'
    },
    {
        id: uuid(),
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        year: 1813,
        lang: 'eng'
    },
    {
        id: uuid(),
        title: 'The Adventures of Huckleberry Finn',
        author: 'Mark Twain',
        year: 1895,
        lang: 'eng'
    },
    {
        id: uuid(),
        title: 'Anna Karenina',
        author: 'Leo Tolstoy',
        year: 1877,
        lang: 'eng'
    },
    {
        id: uuid(),
        title: 'Alice\'s Adventures in Wonderland',
        author: 'Lewis Carroll',
        year: 1965,
        lang: 'eng'
    },
    {
        id: uuid(),
        title: 'The Iliad',
        author: 'Homer',
        year: 1194,
        lang: 'eng'
    },
    {
        id: uuid(),
        title: 'To the Lighthouse',
        author: 'Virginia Woolf',
        year: 1927,
        lang: 'eng'
    },
    {
        id: uuid(),
        title: 'Catch-22',
        author: 'Joseph Heller',
        year: 1943,
        lang: 'eng'
    },
    {
        id: uuid(),
        title: 'Heart of Darkness',
        author: 'Joseph Conrad',
        year: 1899,
        lang: 'eng'
    },
    {
        id: uuid(),
        title: 'The Sound and the Fury',
        author: 'William Faulkner',
        year: 1929,
        lang: 'eng'
    },
    {
        id: uuid(),
        title: '',
        author: 'George Orwell',
        year: 1849,
        lang: 'eng'
    },
    {
        id: uuid(),
        title: 'Great Expectations',
        author: 'Charles Dickens',
        year: 1861,
        lang: 'eng'
    },
    {
        id: uuid(),
        title: 'One Thousand and One Nights',
        author: 'India/Iran/Iraq/Egypt',
        year: 1909,
        lang: 'eng'
    },

];

const searchedBook = {};

const booksReducer = (state = {books, searchedBook}, action) => {
    switch (action.type) {
        case 'SEARCH_BOOKS': {
            let search = action.searchData;
            const regexTitle = new RegExp(search.title, 'gi');
            const regexAuthor = new RegExp(search.author, 'gi');
            const regexYear = new RegExp(search.year, '');
            const regexLang = new RegExp(search.lang, 'gi');
            return {
                ...state,
                searchedBook: state.books.filter(books =>
                    books.title.match(regexTitle) &&
                    books.author.match(regexAuthor) &&
                    books.lang.match(regexLang)
                    // &&
                    // books.year.match(regexYear)
                )
            }
        }
        default:
            return state
    }
};

export default booksReducer;
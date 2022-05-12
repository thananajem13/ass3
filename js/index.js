function newQuote() {
    var qoutes = getAuthorsAndQoutes();
    var qoutesCounter = getqoutesCounter(qoutes);
    generateRandomIndex = getGenerationQoutesRandomIndex(qoutesCounter);
    setQoutesAndAuthors('qouteAuther', getAuthor(qoutes, generateRandomIndex));
    var countQuotesOfAuthor = getCountQuotesOfAuthor(qoutes, generateRandomIndex);
    ////
    var generateRandomQuotesOfAuthorIndex = generateRandomQuotesOfAuthorIndexFunc(countQuotesOfAuthor);
    console.log(`generateRandomIndex: ${generateRandomIndex} - generateRandomQuotesOfAuthorIndex:${generateRandomQuotesOfAuthorIndexFunc(countQuotesOfAuthor)}`)
    setQoutesAndAuthors('qouteOutput', getQuotesOfAuthorIndexFunc(qoutes, generateRandomIndex, generateRandomQuotesOfAuthorIndex));

}
// author implementation
function getAuthorsAndQoutes() {
    return [{
            author: "--Albert Einstein",
            quotes: [`"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."`,
                `"There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle."`
            ]
        },
        {
            author: "--Oscar Wilde",
            quotes: [`"Be yourself; everyone else is already taken."`,
                `"To live is the rarest thing in the world. Most people exist, that is all."`
            ]
        }, {
            author: "--Dr. Seuss",
            quotes: [`"You know you're in love when you can't fall asleep because reality is finally better than your dreams."`,
                `"I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.”`, `“Sometimes the questions are complicated and the answers are simple."`
            ]
        }
    ];
}

function getGenerationQoutesRandomIndex(qoutesCounter) { return Math.floor(Math.random() * qoutesCounter); }

function getqoutesCounter(qoutes) { return qoutes.length; }

function getAuthor(qoutes, randomIndex) { return qoutes[randomIndex].author; }

function setQoutesAndAuthors(filedId, content) {
    document.getElementById(filedId).innerHTML = content;
}
//qoutes implementation
function getCountQuotesOfAuthor(qoutes, randomIndex) { return qoutes[randomIndex].quotes.length; }

function generateRandomQuotesOfAuthorIndexFunc(countQuotesOfAuthor) { return Math.floor(Math.random() * countQuotesOfAuthor); }

function getQuotesOfAuthorIndexFunc(qoutes, generateRandomIndex, generateRandomQuotesOfAuthorIndex) { return qoutes[generateRandomIndex].quotes[generateRandomQuotesOfAuthorIndex]; }
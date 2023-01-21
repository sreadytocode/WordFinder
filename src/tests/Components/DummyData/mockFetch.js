// import 'cross-fetch'

export const words = [
        {
        "word": "oat",
        "phonetic": "/əʊt/",
        "phonetics": [
        {
        "text": "/əʊt/",
        "audio": ""
        },
        {
        "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/oat-us.mp3",
        "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=1769485",
        "license": {
        "name": "BY-SA 3.0",
        "url": "https://creativecommons.org/licenses/by-sa/3.0"
        }
        }
        ],
        "meanings": [
        {
        "partOfSpeech": "noun",
        "definitions": [
        {
        "definition": "Widely cultivated cereal grass, typically Avena sativa.",
        "synonyms": [],
        "antonyms": [],
        "example": "The main forms of oat are meal and bran."
        },
        {
        "definition": "Any of the numerous species, varieties, or cultivars of any of several similar grain plants in genus Avena.",
        "synonyms": [],
        "antonyms": [],
        "example": "The wild red oat is thought to be the ancestor of modern food oats."
        },
        {
        "definition": "(usually as plural) The seeds of the oat, a grain, harvested as a food crop.",
        "synonyms": [],
        "antonyms": []
        },
        {
        "definition": "A simple musical pipe made of oat-straw.",
        "synonyms": [],
        "antonyms": []
        }
        ],
        "synonyms": [],
        "antonyms": []
        }
        ],
        "license": {
        "name": "CC BY-SA 3.0",
        "url": "https://creativecommons.org/licenses/by-sa/3.0"
        },
        "sourceUrls": [
        "https://en.wiktionary.org/wiki/oat"
        ]
        }
    ]
  
  // export default async function mockFetch(url) {
  //   if(url.startsWith('https://api.dictionaryapi.dev/api/v2/entries/en/') && url.includes('oat')) {
  //     return {
  //       ok: true,
  //       status: 200,
  //       json: async () => words,
  //     };
  //   }

// export function mockFetch(word){
//     if (word === "oat") {
//         return fetch("https://api.dictionaryapi.dev/api/v2/entries/en/oat").then(res => res.json())
//     } else {
//       throw new Error(`Unhandled request: ${word}`);    
//     } 
// }
  
    // throw new Error(`Unhandled request: ${url}`);        
  // }


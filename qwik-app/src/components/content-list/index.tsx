import {component$} from "@builder.io/qwik";
import {Movie, ContentCartXL} from "~/components/content-list/components/content-cart-xl";

const moviesList = {
    "page": 1,
    "results": [
        {
            "adult": false,
            "backdrop_path": "/bmlkLCjrIWnnZzdAQ4uNPG9JFdj.jpg",
            "genre_ids": [
                35,
                10751,
                14
            ],
            "id": 787699,
            "original_language": "en",
            "original_title": "Wonka",
            "overview": "Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.",
            "popularity": 3221.716,
            "poster_path": "/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
            "release_date": "2023-12-06",
            "title": "Wonka",
            "video": false,
            "vote_average": 7.2,
            "vote_count": 1341
        },
        {
            "adult": false,
            "backdrop_path": "/tLxjbT5ROZRwYcpNT3nfQbqkApk.jpg",
            "genre_ids": [
                878,
                12,
                28
            ],
            "id": 609681,
            "original_language": "en",
            "original_title": "The Marvels",
            "overview": "Carol Danvers, aka Captain Marvel, has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to a Kree revolutionary, her powers become entangled with that of Jersey City super-fan Kamala Khan, aka Ms. Marvel, and Carol’s estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau. Together, this unlikely trio must team up and learn to work in concert to save the universe.",
            "popularity": 2177.632,
            "poster_path": "/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg",
            "release_date": "2023-11-08",
            "title": "The Marvels",
            "video": false,
            "vote_average": 6.4,
            "vote_count": 1185
        },
        {
            "adult": false,
            "backdrop_path": "/jXJxMcVoEuXzym3vFnjqDW4ifo6.jpg",
            "genre_ids": [
                28,
                12,
                14
            ],
            "id": 572802,
            "original_language": "en",
            "original_title": "Aquaman and the Lost Kingdom",
            "overview": "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
            "popularity": 2141.691,
            "poster_path": "/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg",
            "release_date": "2023-12-20",
            "title": "Aquaman and the Lost Kingdom",
            "video": false,
            "vote_average": 6.7,
            "vote_count": 708
        },
        {
            "adult": false,
            "backdrop_path": "/rz8GGX5Id2hCW1KzAIY4xwbQw1w.jpg",
            "genre_ids": [
                35,
                80
            ],
            "id": 955916,
            "original_language": "en",
            "original_title": "Lift",
            "overview": "An international heist crew, led by Cyrus Whitaker, race to lift $500 million in gold from a passenger plane at 40,000 feet.",
            "popularity": 1113.522,
            "poster_path": "/gma8o1jWa6m0K1iJ9TzHIiFyTtI.jpg",
            "release_date": "2024-01-10",
            "title": "Lift",
            "video": false,
            "vote_average": 6.4,
            "vote_count": 479
        },
        {
            "adult": false,
            "backdrop_path": "/f1AQhx6ZfGhPZFTVKgxG91PhEYc.jpg",
            "genre_ids": [
                36,
                10752,
                18
            ],
            "id": 753342,
            "original_language": "en",
            "original_title": "Napoleon",
            "overview": "An epic that details the checkered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power through the prism of his addictive, volatile relationship with his wife, Josephine.",
            "popularity": 1065.456,
            "poster_path": "/jE5o7y9K6pZtWNNMEw3IdpHuncR.jpg",
            "release_date": "2023-11-22",
            "title": "Napoleon",
            "video": false,
            "vote_average": 6.5,
            "vote_count": 1385
        },
        {
            "adult": false,
            "backdrop_path": "/vdpE5pjJVql5aD6pnzRqlFmgxXf.jpg",
            "genre_ids": [
                18,
                36
            ],
            "id": 906126,
            "original_language": "es",
            "original_title": "La sociedad de la nieve",
            "overview": "On October 13, 1972, Uruguayan Air Force Flight 571, chartered to take a rugby team to Chile, crashes into a glacier in the heart of the Andes.",
            "popularity": 1005.821,
            "poster_path": "/2e853FDVSIso600RqAMunPxiZjq.jpg",
            "release_date": "2023-12-13",
            "title": "Society of the Snow",
            "video": false,
            "vote_average": 8.1,
            "vote_count": 1265
        },
        {
            "adult": false,
            "backdrop_path": "/yl2GfeCaPoxChcGyM5p7vYp1CKS.jpg",
            "genre_ids": [
                28,
                35,
                10749
            ],
            "id": 848187,
            "original_language": "en",
            "original_title": "Role Play",
            "overview": "Emma has a wonderful husband and two kids in the suburbs of New Jersey – she also has a secret life as an assassin for hire – a secret that her husband David discovers when the couple decide to spice up their marriage with a little role play.",
            "popularity": 707.832,
            "poster_path": "/7MhXiTmTl16LwXNPbWCmqxj7UxH.jpg",
            "release_date": "2023-12-14",
            "title": "Role Play",
            "video": false,
            "vote_average": 5.8,
            "vote_count": 185
        },
        {
            "adult": false,
            "backdrop_path": "/ruKNVJFViAyR4jguVboFXTskMOe.jpg",
            "genre_ids": [
                53,
                28,
                27
            ],
            "id": 1028703,
            "original_language": "en",
            "original_title": "The OctoGames",
            "overview": "8 contestants compete in 8 deadly, classic children's games. They seek fame beyond their wildest dreams, competing for the chance to take over the YouTube channel of the famous yet elusive masked YouTuber known only as \"JaxPro\".",
            "popularity": 672.558,
            "poster_path": "/qGz5rffXhegQH5PGUDiObqoOt06.jpg",
            "release_date": "2022-10-07",
            "title": "The OctoGames",
            "video": false,
            "vote_average": 4.8,
            "vote_count": 29
        },
        {
            "adult": false,
            "backdrop_path": "/a0GM57AnJtNi7lMOCamniiyV10W.jpg",
            "genre_ids": [
                16,
                12,
                14
            ],
            "id": 508883,
            "original_language": "ja",
            "original_title": "君たちはどう生きるか",
            "overview": "While the Second World War rages, the teenage Mahito, haunted by his mother's tragic death, is relocated from Tokyo to the serene rural home of his new stepmother Natsuko, a woman who bears a striking resemblance to the boy's mother. As he tries to adjust, this strange new world grows even stranger following the appearance of a persistent gray heron, who perplexes and bedevils Mahito, dubbing him the \"long-awaited one.\"",
            "popularity": 638.932,
            "poster_path": "/jDQPkgzerGophKRRn7MKm071vCU.jpg",
            "release_date": "2023-07-14",
            "title": "The Boy and the Heron",
            "video": false,
            "vote_average": 7.5,
            "vote_count": 795
        },
        {
            "adult": false,
            "backdrop_path": "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
            "genre_ids": [
                18,
                36
            ],
            "id": 872585,
            "original_language": "en",
            "original_title": "Oppenheimer",
            "overview": "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
            "popularity": 624.868,
            "poster_path": "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
            "release_date": "2023-07-19",
            "title": "Oppenheimer",
            "video": false,
            "vote_average": 8.1,
            "vote_count": 6306
        },
        {
            "adult": false,
            "backdrop_path": "/oQ429AcD85ttxvOxAaYpETnAsW0.jpg",
            "genre_ids": [
                28,
                10752
            ],
            "id": 918692,
            "original_language": "ru",
            "original_title": "Гранит",
            "overview": "Mozambique requests from Russia is being helped in the fight against militants of the \"Islamic State\" and a special group led by a commander with the call sign Granit is coming to the country.",
            "popularity": 570.762,
            "poster_path": "/zLJn4U2qlWIzlFP5SsyFJUDQjfs.jpg",
            "release_date": "2021-12-29",
            "title": "Granit",
            "video": false,
            "vote_average": 6,
            "vote_count": 8
        },
        {
            "adult": false,
            "backdrop_path": "/meyhnvssZOPPjud4F1CjOb4snET.jpg",
            "genre_ids": [
                16,
                12,
                35,
                10751,
                28
            ],
            "id": 940551,
            "original_language": "en",
            "original_title": "Migration",
            "overview": "After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.",
            "popularity": 844.892,
            "poster_path": "/ldfCF9RhR40mppkzmftxapaHeTo.jpg",
            "release_date": "2023-12-06",
            "title": "Migration",
            "video": false,
            "vote_average": 7.6,
            "vote_count": 164
        },
        {
            "adult": false,
            "backdrop_path": "/ehumsuIBbgAe1hg343oszCLrAfI.jpg",
            "genre_ids": [
                16,
                10751,
                14,
                12,
                10402
            ],
            "id": 1022796,
            "original_language": "en",
            "original_title": "Wish",
            "overview": "Asha, a sharp-witted idealist, makes a wish so powerful that it is answered by a cosmic force – a little ball of boundless energy called Star. Together, Asha and Star confront a most formidable foe - the ruler of Rosas, King Magnifico - to save her community and prove that when the will of one courageous human connects with the magic of the stars, wondrous things can happen.",
            "popularity": 600.239,
            "poster_path": "/AcoVfiv1rrWOmAdpnAMnM56ki19.jpg",
            "release_date": "2023-11-13",
            "title": "Wish",
            "video": false,
            "vote_average": 6.5,
            "vote_count": 336
        },
        {
            "adult": false,
            "backdrop_path": "/ba9TgAO4I8RyA2LljzR3MspHaM9.jpg",
            "genre_ids": [
                28,
                878,
                53
            ],
            "id": 799155,
            "original_language": "hi",
            "original_title": "Attack",
            "overview": "With the Parliament under siege, India’s first super soldier Arjun Shergill is tasked to get hold of the terrorists in the nick of time, save the Prime Minister from their clutches and stop a dirty bomb from exploding and destroying Delhi. Will Arjun succeed in his mission?",
            "popularity": 816.985,
            "poster_path": "/5jGKbYuZtdxSNOocI6ZziQeiY4n.jpg",
            "release_date": "2022-04-01",
            "title": "Attack",
            "video": false,
            "vote_average": 7.1,
            "vote_count": 36
        },
        {
            "adult": false,
            "backdrop_path": "/lU1x6KXi2tvBPSIQxtVP6rmKEcw.jpg",
            "genre_ids": [
                28,
                53
            ],
            "id": 1214314,
            "original_language": "en",
            "original_title": "One More Shot",
            "overview": "Following the attack on the black site in Poland, Navy SEAL Jake Harris is ordered to escort terrorist suspect Amin Mansur to Washington D.C. for interrogation. Before the prisoner transfer process is complete, though, the airport is attacked by a group of heavily armed, well-trained mercenaries.",
            "popularity": 465.529,
            "poster_path": "/nQ1BQg4yMdlYSHvHZgwladzy7EF.jpg",
            "release_date": "2024-01-12",
            "title": "One More Shot",
            "video": false,
            "vote_average": 6.7,
            "vote_count": 71
        },
        {
            "adult": false,
            "backdrop_path": "/nAQpXoqurOdVdFSEdYramsVF33w.jpg",
            "genre_ids": [
                28,
                53
            ],
            "id": 1211957,
            "original_language": "en",
            "original_title": "The Painter",
            "overview": "An ex-CIA operative is thrown back into a dangerous world when a mysterious woman from his past resurfaces. Now exposed and targeted by a relentless killer and a rogue black ops program, he must rely on skills he thought he left behind in a high-stakes game of survival.",
            "popularity": 521.893,
            "poster_path": "/UZ0ydgbXtnrq8xZCI5lHVXVcH9.jpg",
            "release_date": "2024-01-05",
            "title": "The Painter",
            "video": false,
            "vote_average": 5.9,
            "vote_count": 18
        },
        {
            "adult": false,
            "backdrop_path": "/dvNrgldueQciabkYmlCnyhmaPoO.jpg",
            "genre_ids": [
                28,
                9648,
                53,
                27
            ],
            "id": 899445,
            "original_language": "en",
            "original_title": "Deep Fear",
            "overview": "A solo trip aboard a yacht takes a terrifying turn when a woman encounters three drug traffickers clinging to the shattered remains of a boat. They soon force her to dive into shark-infested waters to retrieve kilos of cocaine from the sunken wreck.",
            "popularity": 501.437,
            "poster_path": "/ruujFw7J0Nd3BSjbN3QODym82Qs.jpg",
            "release_date": "2023-10-18",
            "title": "Deep Fear",
            "video": false,
            "vote_average": 5.3,
            "vote_count": 75
        },
        {
            "adult": false,
            "backdrop_path": "/h0oBqUpax591vOacpBsDJ8cynjk.jpg",
            "genre_ids": [
                878,
                10749,
                35
            ],
            "id": 792307,
            "original_language": "en",
            "original_title": "Poor Things",
            "overview": "Brought back to life by an unorthodox scientist, a young woman runs off with a debauched lawyer on a whirlwind adventure across the continents. Free from the prejudices of her times, she grows steadfast in her purpose to stand for equality and liberation.",
            "popularity": 570.234,
            "poster_path": "/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
            "release_date": "2023-11-21",
            "title": "Poor Things",
            "video": false,
            "vote_average": 8.1,
            "vote_count": 248
        },
        {
            "adult": false,
            "backdrop_path": "/47SVqaO02doJ06tOmrjiWDkwU3T.jpg",
            "genre_ids": [
                28,
                53
            ],
            "id": 927107,
            "original_language": "en",
            "original_title": "The Bricklayer",
            "overview": "Someone is blackmailing the CIA by assassinating foreign journalists and making it look like the agency is responsible. As the world begins to unite against the U.S., the CIA must lure its most brilliant – and rebellious – operative out of retirement, forcing him to confront his checkered past while unraveling an international conspiracy.",
            "popularity": 417.871,
            "poster_path": "/pwOQ9lqLX1OgsJRSybS662wMcu8.jpg",
            "release_date": "2023-12-14",
            "title": "The Bricklayer",
            "video": false,
            "vote_average": 6.4,
            "vote_count": 61
        },
        {
            "adult": false,
            "backdrop_path": "/r9oTasGQofvkQY5vlUXglneF64Z.jpg",
            "genre_ids": [
                28,
                35
            ],
            "id": 1029575,
            "original_language": "en",
            "original_title": "The Family Plan",
            "overview": "Dan Morgan is many things: a devoted husband, a loving father, a celebrated car salesman. He's also a former assassin. And when his past catches up to his present, he's forced to take his unsuspecting family on a road trip unlike any other.",
            "popularity": 372.04,
            "poster_path": "/a6syn9qcU4a54Lmi3JoIr1XvhFU.jpg",
            "release_date": "2023-12-14",
            "title": "The Family Plan",
            "video": false,
            "vote_average": 7.4,
            "vote_count": 784
        }
    ],
    "total_pages": 42122,
    "total_results": 842430
};

interface ContentListProps {
    limit?: number
}

export const ContentList = component$((props: ContentListProps) => {
    return <section class={`pt-[24px] pb-[24px]`}>
        <h2 class={`
            mb-[24px] 
            font-bold text-h3-sm sm:text-h3-lg
            text-transparent bg-clip-text bg-gradient-to-br from-primary to-grayscale-70
        `}>Movies</h2>

        <section class={`
               grid grid-cols-2 sm:grid-cols-4 grid-rows-4 gap-2
               
               [@media(min-width:1600px)]:grid-cols-5
               [@media(min-width:1919px)]:grid-cols-6
               [@media(min-width:2419px)]:grid-cols-8
        `}>
            {
                moviesList.results.map((movie: Movie) => {
                    return <ContentCartXL key={movie.id} data={movie}/>
                })
            }
        </section>
    </section>
})

const loadLesson = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then(res => res.json())
        .then((json) => displayLessons(json.data))
};
const removeActive = () => {
        const lessonbtn = document.querySelectorAll(".lesson-btn");
        lessonbtn.forEach(btn => btn.classList.remove("active"));
    }
    // const loadWordDetail = async(id) => {
    //     const url = `https://openapi.programming-hero.com/api/word/${id}`;
    //     const res = await fetch(url);
    //     const datails = await res.json();
    //     console.log(datails);
    //     displayWordDetail(datails.data);

// };
// const displayWordDetail = (word) => {
//     const detailsContainer = document.getElementById("details-container");
//     detailsContainer.innerHTML = "yeiii";
//     document.getElementById("word_modal").showModal();



// };
const loadLevelWord = (level_no) => {
    // console.log(level_no);

    // fetch("https://openapi.programming-hero.com/api/level/" + level_no)
    const url = `
    https: //openapi.programming-hero.com/api/level/${level_no}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            removeActive();
            const clickBtn = document.getElementById(`lesson-btn-${level_no}`);
            clickBtn.classList.add("active");
            displayLevelWord(data.data);
        });
}


// {
//     "id": 5,
//     "level": 1,
//     "word": "Eager",
//     "meaning": "আগ্রহী",
//     "pronunciation": "ইগার"
// }
const displayLevelWord = (words) => {
    const wordContainer = document.getElementById("word-container");
    console.log(words);
    wordContainer.innerHTML = "";
    if (words.length === 0) {
        wordContainer.innerHTML = `
        <div class="text-center col-span-full rounded py-10 space-y-4 font-bangla">
             <img class="items-center mx-auto" src="./assets/alert-error.png" alt="">
            <p class="font-medium font-bangla text-xl">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
            <h2 class="font-semibold text-xl">নেক্সট Lesson এ যান</h2>
        </div>
        `;
        return;
    }
    words.forEach(word => {
        const wordDiv = document.createElement("div");
        wordDiv.innerHTML = `
         <div class="bg-white rounded-xl shadow-sm text-center py-6 md:py-8 px-3 md:px-4 space-y-3 h-full flex flex-col justify-center">
            <h2 class="font-bold text-lg md:text-xl lg:text-2xl">${word.word ? word.word:"Not Found"}</h2>
            <p class="font-semibold text-sm md:text-base">Meaning /Pronounciation</p>
            <div class="font-bangla text-base md:text-lg lg:text-xl font-semibold">"${word.meaning ? word.meaning:"Not Found"} / ${word.pronunciation?word.pronunciation:"Not Found"} "</div>

            <div class="flex justify-between items-center gap-2 mt-4">
                <button onclick="loadWordDetail(${word.id})" class="btn btn-sm md:btn-md bg-[#1A91FF10] hover:bg-[#1A91FF60]"><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn btn-sm md:btn-md bg-[#1A91FF10] hover:bg-[#1A91FF60]"><i class="fa-solid fa-volume-high"></i></button>
            </div>


        </div>

        `;
        wordContainer.append(wordDiv);
    });

}
const displayLessons = (lessons) => {
    const levelContainer = document.getElementById("level-container")
    levelContainer.innerHTML = "";
    for (const lesson of lessons) {
        // console.log(lesson);
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
                            <button id="lesson-btn-${lesson.level_no}" onclick="loadLevelWord(${lesson.level_no})" class="btn btn-sm md:btn-md btn-outline btn-primary text-xs md:text-base lesson-btn">
                            <i class="fa-solid fa-arrow-right-from-bracket"></i>Lesson -${lesson.level_no}</button>
        `
        levelContainer.append(btnDiv);
    }
};
loadLesson()
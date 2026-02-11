const loadLesson = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then(res => res.json())
        .then((json) => displayLessons(json.data))
};
const loadLevelWord = (level_no) => {
    // console.log(level_no);

    // fetch("https://openapi.programming-hero.com/api/level/" + level_no)
    const url = `https://openapi.programming-hero.com/api/level/${level_no}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayLevelWord(data.data))
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
    words.forEach(word => {
        const wordDiv = document.createElement("div");
        wordDiv.innerHTML = `
         <div class="bg-white rounded-xl shadow-sm text-center py-6 md:py-8 px-3 md:px-4 space-y-3 h-full flex flex-col justify-center">
            <h2 class="font-bold text-lg md:text-xl lg:text-2xl">${word.word}</h2>
            <p class="font-semibold text-sm md:text-base">Meaning /Pronounciation</p>
            <div class="font-bangla text-base md:text-lg lg:text-xl font-semibold">"${word.meaning} / ${word.pronunciation} "</div>
            <div class="flex justify-between items-center gap-2 mt-4">
                <button class="btn btn-sm md:btn-md bg-[#1A91FF10] hover:bg-[#1A91FF60]"><i class="fa-solid fa-circle-info"></i></button>
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
                            <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-sm md:btn-md btn-outline btn-primary text-xs md:text-base">
                            <i class="fa-solid fa-arrow-right-from-bracket"></i>Lesson -${lesson.level_no}</button>
        `
        levelContainer.append(btnDiv);
    }
};
loadLesson()
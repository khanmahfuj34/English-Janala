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
const displayLevelWord = (words) => {
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML = "";
    words.forEach(word => {
        const wordDiv = document.createElement("div");
        wordDiv.innerHTML = `
        <p>hello</p>

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
                            <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
                            <i class="fa-solid fa-arrow-right-from-bracket"></i>Lesson -${lesson.level_no}</button>
        `
        levelContainer.append(btnDiv);
    }
};
loadLesson()
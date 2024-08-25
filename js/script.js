function entrypoint() {
    let timeLineContainer = document.getElementById("timeline-container");
    let pointsLength = 20;
    for (let index = 0; index < 20; index++) {
        const element = generateTimelinePoint(index);
        timeLineContainer.insertAdjacentHTML("beforeend", element);

    }
}

function generateTimelinePoint(index) {
    return /*html*/`
        <div class="timeline-point-wrapper">
            <div class="timeline-point-header">Header ${index}</div>
            <div class="timeline-point"></div>
            <div class="timeline-point-footer">Footer ${index}</div>
        </div>`;
}
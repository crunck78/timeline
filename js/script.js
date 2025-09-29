const TIMELINE_CONTAINER_ID = "timeline-container";
const TRANSLATE_CONTAINER_ID = "translate-container";
const TRANSLATE_DIRECTION_LEFT = "left";
const TRANSLATE_DIRECTION_RIGHT = "right";

function entrypoint() {
    generateTimeLinePoints();
}

function generateTimeLinePoints() {
    const timeLineContainer = document.getElementById(TIMELINE_CONTAINER_ID);
    let pointsLength = 100;
    for (let index = 0; index < pointsLength; index++) {
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

/**
 *
 * @param {string} direction
 */
function translateTimeline(direction) {
    const timeLineContainer = document.getElementById(TIMELINE_CONTAINER_ID);
    if (direction == TRANSLATE_DIRECTION_LEFT) {
        timeLineContainer.style.transform = "translateX(100px)";
    }

    if (direction == TRANSLATE_DIRECTION_RIGHT) {
        timeLineContainer.style.transform = "translateX(-100%)";
    }

    console.log(direction)
}

// Adjusted from https://jshakespeare.com/simple-count-up-number-animation-javascript-react/

const easeInOutCirc = x => x < 0.5
    ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2
    : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;

export const animateCountUp = (countTo, el) => {
    const animationDuration = 2000;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(animationDuration / frameDuration);
    let frame = 0;
    const counter = setInterval(() => {
        frame++;
        const progress = easeInOutCirc(frame / totalFrames);
        const currentCount = Math.round(countTo * progress);

        if (parseInt(el.innerHTML, 10) !== currentCount) {
            el.innerHTML = currentCount;
        }

        if (frame === totalFrames) {
            clearInterval(counter);
        }
    }, frameDuration);
};
